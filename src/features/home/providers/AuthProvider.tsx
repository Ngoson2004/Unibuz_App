import { Session } from "@supabase/supabase-js";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { supabase } from "@/shared/libs/supabase";
import { Tables } from "@/shared/libs/supabase/types/supabase";

type AuthData = {
  session: Session | null;
  mounting: boolean;
  user: Tables<"users"> | null;
};

type AuthAction =
  | { type: "SET_SESSION"; payload: Session | null }
  | { type: "SET_USER"; payload: Tables<"users"> | null }
  | { type: "SET_MOUNTING"; payload: boolean };

const authReducer = (state: AuthData, action: AuthAction): AuthData => {
  switch (action.type) {
    case "SET_SESSION":
      return { ...state, session: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_MOUNTING":
      return { ...state, mounting: action.payload };
    default:
      return state;
  }
};

const initialState: AuthData = {
  session: null,
  mounting: true,
  user: null,
};

const AuthContext = createContext<AuthData>(initialState);

export default function AuthProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      dispatch({ type: "SET_SESSION", payload: session });

      if (session) {
        const { data: user, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (error) {
          console.error("error", error);
        } else {
          dispatch({ type: "SET_USER", payload: user });
        }
      } else {
        dispatch({ type: "SET_USER", payload: null });
      }

      dispatch({ type: "SET_MOUNTING", payload: false });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

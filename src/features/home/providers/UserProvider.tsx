import { useEffect, useReducer, createContext, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { supabase } from "@/shared/libs/supabase";
import { User } from "@supabase/supabase-js";

type UserState = {
  user: User | null;
};

type UserAction =
  | { type: "SET_USER"; payload: User | null }
  | { type: "SIGN_OUT" };

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SIGN_OUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

const UserContext = createContext<
  | {
      state: UserState;
      dispatch: React.Dispatch<UserAction>;
    }
  | undefined
>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default function UserProvider() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(userReducer, { user: null });

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        dispatch({ type: "SIGN_OUT" });
        navigate("/auth/sign-in");
      } else if (session?.user) {
        dispatch({ type: "SET_USER", payload: session.user });
      }
    });

    // Check initial auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        dispatch({ type: "SET_USER", payload: session.user });
      } else {
        navigate("/auth/sign-in");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  if (!state.user) {
    return null;
  }

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Outlet />
    </UserContext.Provider>
  );
}

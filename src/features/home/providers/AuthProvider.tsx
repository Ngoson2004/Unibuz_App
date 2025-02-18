import { Session } from "@supabase/supabase-js";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "@/shared/libs/supabase";
import { Tables } from "@/shared/libs/supabase/types/supabase";
import { useNavigate } from "react-router-dom";

type AuthData = {
  session: Session | null;
  mounting: boolean;
  user: Tables<"users"> | null;
};

const AuthContext = createContext<AuthData>({
  session: null,
  mounting: true,
  user: null,
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<Tables<"users"> | null>(null);
  const [mounting, setMounting] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);

      if (session) {
        const { data: userData, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (error) {
          console.error("error", error);
        } else {
          setUser(userData);
        }
      } else {
        navigate("/auth/sign-in");
      }

      setMounting(false);
    };

    fetchSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
      setSession(newSession);

      if (newSession) {
        const { data: userData, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", newSession.user.id)
          .single();

        if (error) {
          console.error("error", error);
        } else {
          setUser(userData);
        }
      } else {
        setUser(null);
        navigate("/auth/sign-in");
      }

      setMounting(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ session, mounting, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

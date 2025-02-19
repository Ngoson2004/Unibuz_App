import { Session, User } from "@supabase/supabase-js";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "@/shared/libs/supabase";
import { Tables } from "@/shared/libs/supabase/types/supabase";

type AuthContextType = {
  session: Session | null | undefined;
  user: User | null | undefined;
  signOut: () => void;
};

type ProfileContextType = {
  profile: Tables<"users"> | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  signOut: () => {},
});

const ProfileContext = createContext<ProfileContextType>({
  profile: null,
  loading: true,
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User>();
  const [session, setSession] = useState<Session | null>();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Tables<"users"> | null>(null);
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    const setData = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) throw error;
      setSession(session);
      setUser(session?.user);
      setLoading(false);

      if (session?.user) {
        const { data: profileData, error: profileError } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (profileError) {
          console.error("error", profileError);
        } else {
          setProfile(profileData);
        }
        setProfileLoading(false);
      }
    };

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user);
        setLoading(false);

        if (session?.user) {
          const { data: profileData, error: profileError } = await supabase
            .from("users")
            .select("*")
            .eq("id", session.user.id)
            .single();

          if (profileError) {
            console.error("error", profileError);
          } else {
            setProfile(profileData);
          }
          setProfileLoading(false);
        } else {
          setProfile(null);
        }
      },
    );

    setData();

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const value = {
    session,
    user,
    signOut: () => supabase.auth.signOut(),
  };

  const profileValue = {
    profile,
    loading: profileLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      <ProfileContext.Provider value={profileValue}>
        {!loading && !profileLoading && children}
      </ProfileContext.Provider>
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export const useProfile = () => useContext(ProfileContext);

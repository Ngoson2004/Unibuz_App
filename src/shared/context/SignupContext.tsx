import { createContext, useContext, useReducer } from "react";

type SignupState = {
  email: string | null;
};

type SignupAction = {
  type: "SET_EMAIL";
  payload: string | null;
};

const SignupContext = createContext<
  | {
      state: SignupState;
      dispatch: React.Dispatch<SignupAction>;
    }
  | undefined
>(undefined);

function signupReducer(state: SignupState, action: SignupAction): SignupState {
  switch (action.type) {
    case "SET_EMAIL": {
      return {
        ...state,
        email: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function SignupProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(signupReducer, { email: null });
  const value = { state, dispatch };
  return (
    <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
  );
}

export function useSignup() {
  const context = useContext(SignupContext);
  if (context === undefined) {
    throw new Error("useSignup must be used within a SignupProvider");
  }
  return context;
}

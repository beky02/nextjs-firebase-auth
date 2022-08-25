import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from "react";
import Firebase from "../lib/firebase";
import { AuthStates, NotLoggedIn, SignUpFormData } from "../type";


export const AuthContext = createContext<AuthStates>({
  status: "not-logged-in",
  createAccountAndSignIn: () => undefined,
});

const AuthContextWrapper = ({ children }: { children: ReactNode }) => {
  const [ac, setAuthContext] = useState<AuthStates>({
    status: "not-logged-in",
    createAccountAndSignIn: () => undefined,
  } as NotLoggedIn);

  const createAccountAndSignIn = useCallback(
    async ({ data }: { data: SignUpFormData }) => {
      try {
        const user = await Firebase.auth().signInWithEmailAndPassword(
          data.email,
          data.password
        );
       
        return user.user;
      } catch (error) {
       
       
      }
    },
    []
  );
  useEffect(() => {
    setAuthContext({
      status: "not-logged-in",
      createAccountAndSignIn: createAccountAndSignIn,
    } as NotLoggedIn);
    const subscribe = Firebase.auth().onAuthStateChanged(
      (user: Firebase.User | null) => {}
    );
  }, []);
  return <AuthContext.Provider value={ac}>{children}</AuthContext.Provider>;
};

export default AuthContextWrapper;

import Firebase from "../lib/firebase";

export type SignUpFormData = {
  email: string;
  password: string;
};

export type AuthStates = NotLoggedIn | LoggedIn;
export type NotLoggedIn = {
  status: "not-logged-in";
  createAccountAndSignIn: ({
    data,
  }: {
    data: SignUpFormData;
  }) => Promise<Firebase.User | null> | undefined;
};

export type LoggedIn = {
  status: "logged-in";
  signOut: () => void;
};

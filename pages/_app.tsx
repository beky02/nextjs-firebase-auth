import "../styles/globals.css";
import type { AppProps } from "next/app";
import AuthContextWrapper from "../context/auth_context_wrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextWrapper>
      <Component {...pageProps} />
    </AuthContextWrapper>
  );
}

export default MyApp;

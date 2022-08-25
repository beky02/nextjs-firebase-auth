import { NextPage } from "next";
import Head from "next/head";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context";
import { States } from "../common/enums";
import { SignUpFormData } from "../type";
import { Button, Input } from "../components";

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const authContext = useContext(AuthContext);
  const route = useRouter();
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center w-full h-screen flex-1 text-center">
        <div className="p-8 justify-center items-center h-screen w-full bg-white flex">
          <form
            className="flex flex-col items-start w-7/12"
            onSubmit={async (ev) => {
              ev.preventDefault();
              if (authContext.status == States.NOT_LOGGED_IN) {
                const data: SignUpFormData = { email, password };
                const user = await authContext.createAccountAndSignIn({ data });
                if (user) {
                  route.push("/home");
                }
              }
            }}
          >
            <h3 className="text-black text-4xl mb-5">Welcome back</h3>
            <p className="text-gray-500 mb-6">
              Welcome back! Please enter your details
            </p>
            <label className="text-black mb-1">Email</label>

            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label className="text-black mb-1">Password</label>

            <Input
              id="password"
              type="password"
              placeholder="* * * * * * * * * * * * * *"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button type={"submit"} onClick={() => {}}>
              {" "}
              Sign Up
            </Button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-100 w-full h-screen ">
          <div className="flex flex-col items-center justify-center w-full h-fit relative">
            <div className="bg-primary w-64 h-64 rounded-full mb-10"></div>
            <div className="backdrop-blur-xl w-7/12 h-40 absolute bottom-0"></div>
          </div>
        </div>
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t"></footer> */}
    </div>
  );
};

export default Login;

"use client";

import { NextPage } from "next";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { useState } from "react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className="h-screen bg-[#13141F] flex lg:items-center justify-center">
      <div className="bg-[#1E1E2C] p-8 rounded-xl shadow-lg max-w-[500px]">
        <h2 className="text-gray-200 text-3xl font-semibold mb-7">
          {isLogin ? "Sign In" : "Sign Up"}
        </h2>

        {isLogin ? <Login /> : <Register />}

        <p className="text-gray-200 mt-5">
          {isLogin ? "Don't have any account? " : "Already have an account? "}

          <span
            className="cursor-pointer hover:underline"
            onClick={() => setIsLogin((prevState) => !prevState)}
          >
            {!isLogin ? "Login" : "Create account"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Page;

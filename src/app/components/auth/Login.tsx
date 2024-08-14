"use client";

import { NextPage } from "next";

interface Props {}

const Login: NextPage<Props> = ({}) => {
  const handleSubmit = () => {};

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full bg-transparent text-white border-gray-500 focus:border-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full bg-transparent text-white border-gray-500 focus:border-gray-400"
        />
      </div>
      <button className="btn btn-primary">Login</button>
    </form>
  );
};

export default Login;

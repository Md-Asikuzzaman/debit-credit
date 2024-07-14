import { NextPage } from "next";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="h-screen bg-white flex lg:items-center justify-center">
      <div className="bg-[#2a4e19] p-8 rounded-xl shadow-lg">
        <Login />
        <Register />
      </div>
    </div>
  );
};

export default Page;

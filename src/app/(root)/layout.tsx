import { NextPage } from "next";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-[#13141F] text-white">
      <Header />
      <div className="flex flex-row flex-1">
        <Sidebar />
        <div className="w-full px-8 py-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

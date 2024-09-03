import { NextPage } from "next";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#13141F]">
      <Header />
      <div className="flex flex-row flex-1">
        <Sidebar />
        <div className="w-full p-8">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const Container: NextPage<Props> = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 md:px-8 lg:px-12 bgs-red-200">
      {children}
    </div>
  );
};

export default Container;

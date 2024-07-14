"use client";

import { NextPage } from "next";
import Logo from "./Logo";
import Container from "../Container";
import UserMenu from "./UserMenu";

interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <header className="bg-[#1E1E2C] text-white py-4">
      <Container>
        <Logo />
        <UserMenu />
      </Container>
    </header>
  );
};

export default Header;

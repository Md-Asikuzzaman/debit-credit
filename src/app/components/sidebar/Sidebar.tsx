"use client";

import { NextPage } from "next";

import Logout from "./Logout";
import Link from "next/link";
import { navLinks } from "@/app/lib";
import { usePathname } from "next/navigation";

import { clsx } from "clsx";

interface Props {}

const Sidebar: NextPage<Props> = ({}) => {
  const pathname = usePathname();

  return (
    <div className="bg-[#1A103D] min-w-[400px] flex flex-col p-5 fixed md:relative h-full md:h-auto top-0 left-0 text-white border-r border-[#2d1b6e]">
      <ul className="flex-1 space-y-1">
        {navLinks.map(({ href, label, Icon }, index) => (
          <li key={index}>
            <Link
              href={href}
              className={clsx(
                "flex items-center gap-2  p-3 rounded-md",
                pathname === href ? "bg-[#2d1b6e]" : "hover:bg-[#2d1b6e]"
              )}
            >
              <Icon size={25} />
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <Logout />
    </div>
  );
};

export default Sidebar;

"use client";

import { NextPage } from "next";

import Logout from "./Logout";
import Link from "next/link";

import { MdDashboard } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { IoListSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { TbTransactionDollar } from "react-icons/tb";
import { MdCalculate } from "react-icons/md";

interface Props {}

const Sidebar: NextPage<Props> = ({}) => {
  return (
    <div className="bg-[#1E1E2C] min-w-[300px] flex flex-col p-5 fixed md:relative h-full md:h-auto top-0 left-0 text-white">
      <ul className="flex-1 space-y-1">
        <li>
          <Link
            href={"/"}
            className="flex items-center gap-2 bg-[#343449] p-3 rounded-md"
          >
            <MdDashboard size={25} />
            Overview
          </Link>
        </li>
        <li>
          <Link
            href={"/add-transaction"}
            className="flex items-center gap-2 hover:bg-[#343449] p-3 rounded-md"
          >
            <IoIosAddCircle size={25} />
            Add a transaction
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex items-center gap-2 hover:bg-[#343449] p-3 rounded-md"
          >
            <GrTransaction size={25} />
            Lists of transaction
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex items-center gap-2 hover:bg-[#343449] p-3 rounded-md"
          >
            <TbTransactionDollar size={25} />
            Filter records
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex items-center gap-2 hover:bg-[#343449] p-3 rounded-md"
          >
            <MdCalculate size={25} />
            Calculate a think
          </Link>
        </li>
      </ul>
      <Logout />
    </div>
  );
};

export default Sidebar;

"use client";

import { NextPage } from "next";

import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import { IoMdArrowUp, IoMdArrowDown } from "react-icons/io";

interface Props {
  title: string;
  subtitle: string;
  credit?: number;
  debit?: number;
  loss?: boolean;
}

const TransactionCard: NextPage<Props> = ({
  title,
  subtitle,
  credit,
  debit,
  loss,
}) => {
  return (
    <div className="bg-[#1E1E2C] p-5 rounded-lg">
      <h3 className="flex gap-5 text-gray-400 test-base">
        {subtitle}

        {!loss ? (
          <BsGraphUpArrow size={30} className="text-green-500" />
        ) : (
          <BsGraphDownArrow size={30} className="text-rose-500" />
        )}
      </h3>
      <h2 className="text-2xl lg:text-3xl font-semibold">$ {title}</h2>
      <p className="flex items-center gap-2 mt-5">
        {loss ? (
          <span className="text-rose-500 flex items-center gap-1">
            <IoMdArrowDown /> +12.89%
          </span>
        ) : (
          <span className="text-green-500 flex items-center gap-1">
            <IoMdArrowUp /> +12.89%
          </span>
        )}
        this month
      </p>
    </div>
  );
};

export default TransactionCard;

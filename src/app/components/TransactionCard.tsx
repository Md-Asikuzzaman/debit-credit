"use client";

import { NextPage } from "next";

import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import { IoMdArrowUp, IoMdArrowDown } from "react-icons/io";

import CountUp from "react-countup";

interface Props {
  title: number;
  subtitle: string;
  credit?: number;
  debit?: number;
  loss?: boolean;
  status?: "earn" | "cost" | "average";
  statusValue?: number;
}

const TransactionCard: NextPage<Props> = ({
  title,
  subtitle,
  credit,
  debit,
  loss,
  status,
  statusValue,
}) => {
  return (
    <div className="bg-[#1E1E2C] p-5 rounded-lg">
      <h3 className="flex justify-between text-gray-400 test-base">
        {subtitle}

        {status === "earn" && (
          <BsGraphUpArrow size={30} className="text-green-500" />
        )}

        {status === "cost" && (
          <BsGraphDownArrow size={30} className="text-rose-500" />
        )}

        {status === "average" &&
          (statusValue && statusValue > 0 ? (
            <BsGraphUpArrow size={30} className="text-green-500" />
          ) : (
            <BsGraphDownArrow size={30} className="text-rose-500" />
          ))}
      </h3>
      <h2 className="text-2xl lg:text-3xl font-semibold">
        {/* {title} */}
        <CountUp
          end={title}
          duration={2.75}
          separator=","
          decimals={2}
          decimal="."
        />
      </h2>
      <p className="flex items-center gap-2 mt-5">
        {status === "earn" && (
          <span className="text-green-500 flex items-center gap-1">
            <IoMdArrowUp /> +{statusValue?.toFixed(2)}%
          </span>
        )}
        {status === "cost" && (
          <span className="text-rose-500 flex items-center gap-1">
            <IoMdArrowDown /> -{statusValue?.toFixed(2)}%
          </span>
        )}
        {status === "average" &&
          (statusValue && statusValue > 0 ? (
            <span className="text-green-500 flex items-center gap-1">
              <IoMdArrowUp /> +{statusValue?.toFixed(2)}%
            </span>
          ) : (
            <span className="text-rose-500 flex items-center gap-1">
              <IoMdArrowDown />
              {statusValue?.toFixed(2)}%
            </span>
          ))}
        this month
      </p>
    </div>
  );
};

export default TransactionCard;

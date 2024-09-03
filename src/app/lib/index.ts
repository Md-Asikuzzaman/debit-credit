import { MdDashboard } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { TbTransactionDollar } from "react-icons/tb";
import { MdCalculate } from "react-icons/md";

export const navLinks = [
  {
    href: "/",
    label: "Overview",
    Icon: MdDashboard,
  },
  {
    href: "/add-transaction",
    label: "Add a transaction",
    Icon: IoIosAddCircle,
  },
  {
    href: "/lists-of-transaction",
    label: "Lists of transaction",
    Icon: GrTransaction,
  },
  {
    href: "/filter-records",
    label: "Filter records",
    Icon: TbTransactionDollar,
  },
  {
    href: "/calculate-a-think",
    label: "Calculate a think",
    Icon: MdCalculate,
  },
];

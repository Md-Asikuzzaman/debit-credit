"use client";

import { NextPage } from "next";

interface Props {}

const BreadCrumd: NextPage<Props> = ({}) => {
  return (
    <div className="breadcrumbs text-sm mb-3">
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>Overview</li>
      </ul>
    </div>
  );
};

export default BreadCrumd;

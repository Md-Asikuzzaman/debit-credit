import React from "react";
import BreadCrumd from "../components/BreadCrumd";
import TransactionCard from "../components/TransactionCard";

import { BsGraphUpArrow } from "react-icons/bs";
import MyChart from "../components/MyChart";

const Home = () => {
  return (
    <main>
      <BreadCrumd />

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 xl:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TransactionCard
              subtitle="30 Days Incomming"
              title="30,500"
              credit={40000}
              debit={50000}
            />
            <TransactionCard
              subtitle="30 Days Outgoing"
              title="66,500"
              credit={80000}
              debit={43000}
              loss
            />

            <TransactionCard
              subtitle="30 Days Outgoing"
              title="23,500"
              credit={80000}
              debit={43000}
            />
          </div>

          <div className="bg-[#1E1E2C] p-5 rounded-lg overflow-hidden mt-5">
            <MyChart />
          </div>
        </div>
        <div className="col-span-3">will</div>
      </div>
    </main>
  );
};

export default Home;

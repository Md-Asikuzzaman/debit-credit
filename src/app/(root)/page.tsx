import React from "react";
import BreadCrumd from "../components/BreadCrumd";
import TransactionCard from "../components/TransactionCard";
import MyChart from "../components/MyChart";

const Home = async () => {
  let earn = 50000;
  let cost = 50011;

  let earnPer = (earn / cost) * 100;
  let costPer = (cost / earn) * 100;

  // Calculate the profit or loss
  let profitLoss = earn - cost;
  let percentage = (profitLoss / Math.abs(cost)) * 100;

  return (
    <main>
      <BreadCrumd />
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 xl:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TransactionCard
              subtitle="30 Days Incomming"
              title="30,500"
              status="earn"
              statusValue={earnPer}
              credit={40000}
              debit={50000}
            />
            <TransactionCard
              subtitle="30 Days Outgoing"
              title="66,500"
              status="cost"
              statusValue={costPer}
              credit={80000}
              debit={43000}
              loss
            />

            <TransactionCard
              subtitle="30 Days Average"
              title="23,500"
              status="average"
              statusValue={percentage}
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

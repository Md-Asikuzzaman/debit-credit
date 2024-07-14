"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const MyChart = () => {
  const data = [
    {
      month: "january",
      date: 1,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 2,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 3,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 4,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 5,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 6,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 7,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 8,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 9,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 10,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 11,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 12,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 13,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 14,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 15,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 16,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 17,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 18,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 19,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 20,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 21,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 22,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
    {
      month: "january",
      date: 23,
      debit: Math.floor(Math.random() * 1000) + 1,
      credit: Math.floor(Math.random() * 1000) + 1,
    },
  ];

  const todaysDate = 31;

  // Function to fill missing dates with empty object
  const fillMissingDates = (data: any, maxDate: any) => {
    const filledData = [];
    for (let i = 1; i <= maxDate; i++) {
      const found = data.find((item: any) => item.date === i);
      if (found) {
        filledData.push(found);
      } else {
        filledData.push({ month: "", date: i, debit: 0, credit: 0 });
      }
    }
    return filledData;
  };

  // Call fillMissingDates to generate datas array
  const datas = fillMissingDates(data, todaysDate);

  const category = Array.from({ length: 31 }, (_, index) => index + 1);

  const initialChartData = {
    series: [
      {
        name: "series-1",
        data: datas.map((data) => data.credit),
      },
      {
        name: "series-2",
        data: datas.map((data) => data.debit),
      },
    ],
  };

  const [chartData, setChartData] = useState(initialChartData);
  const [resetChart, setResetChart] = useState(false);

  const handleResetChart = () => {
    setChartData(initialChartData);
    setResetChart(true);
    setTimeout(() => {
      setResetChart(false);
    }, 1);
  };

  return (
    <div className="text-black">
      <Chart
        options={{
          chart: {
            zoom: {
              enabled: false,
            },

            animations: {
              enabled: true,
              easing: "easeout",
              speed: 1000,
              animateGradually: {
                enabled: true,
                delay: 500,
              },
              dynamicAnimation: {
                enabled: true,
                speed: 50,
              },
            },
          },

          legend: {
            labels: {
              colors: ["#fff", "#fff"],
            },
          },

          xaxis: {
            categories: category,
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              style: {
                colors: "#fff",
              },
            },
          },

          yaxis: {
            labels: {
              style: {
                colors: "#fff",
              },
            },
          },

          dataLabels: {
            enabled: false,
          },

          stroke: {
            curve: "smooth",
          },

          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
              show: false,
            },
          },

          fill: {
            colors: ["#29C48B", "#FF7D89"],
          },
          colors: ["#29C48B", "#FF7D89"],
        }}
        series={chartData.series}
        type="area"
        width="100%"
        height={420}
        key={resetChart ? "reset" : "normal"}
      />

      <button onClick={handleResetChart}>Reset Chart</button>
    </div>
  );
};

export default MyChart;

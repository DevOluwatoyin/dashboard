"use client";
import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const DoughnutChart = () => {
  useEffect(() => {
    const canvas = document.getElementById("myChart");

    if (canvas instanceof HTMLCanvasElement) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const existingChart = Chart.getChart(ctx);

        if (existingChart) {
          existingChart.destroy();
        }

        const myChart = new Chart(ctx, {
          type: "doughnut",
          data: {
            datasets: [
              {
                data: [10, 5, 8],
                backgroundColor: ["#E4ECF7", "#4C6FFF", "#FF92AE"],
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
      }
    }

    return () => {
      const canvas = document.getElementById("myChart");
      if (canvas instanceof HTMLCanvasElement) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const existingChart = Chart.getChart(ctx);
          if (existingChart) {
            existingChart.destroy();
          }
        }
      }
    };
  }, []);

  return (
    <>
      <div className="relative">
        <canvas
          id="myChart"
          style={{
            width: "111px",
            height: "111px",
            transform: "rotate(-80deg)",
          }}
        ></canvas>
        <span className="absolute top-[33px] left-[37px] inline-block content['I am only here'] w-[36px] text-center text-heading-dark font-semibold text-[28px]">
          23
        </span>
      </div>
    </>
  );
};

export default DoughnutChart;

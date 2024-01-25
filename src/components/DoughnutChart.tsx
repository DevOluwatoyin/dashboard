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
                // centerText: {
                //   display: true,
                //   text: "280",
                // },
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
      <div>
        <canvas
          id="myChart"
          style={{
            width: "111px",
            height: "111px",
            transform: "rotate(-80deg)",
          }}
        ></canvas>
      </div>
    </>
  );
};

export default DoughnutChart;

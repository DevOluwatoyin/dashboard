"use client";
import { useEffect } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {
  useEffect(() => {
    const canvas = document.getElementById("myChart");

    if (canvas instanceof HTMLCanvasElement) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        // Check if a chart is already associated with the canvas
        const existingChart = Chart.getChart(ctx);

        // If a chart exists, destroy it before creating a new one
        if (existingChart) {
          existingChart.destroy();
        }

        // Create a new chart
        const myChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
            datasets: [
              {
                data: [13, 6, 2, 5, 13, 5, 2],
                // label: "Incognito",
                backgroundColor: "#E4ECF7",
                borderRadius: 100,
                barThickness: 10,
              },
              {
                data: [18, 11, 7, 11, 18, 11, 7],
                // label: "Users",
                backgroundColor: "#4C6FFF",
                borderRadius: 100,
                barThickness: 10,
              },
              {
                data: [16, 9, 4.5, 9, 16, 9, 4.5],
                // label: "Recruiters",
                backgroundColor: "#FF92AE",
                borderRadius: 100,
                barThickness: 10,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
      }
    }

    // Ensure that the chart is destroyed when the component unmounts
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
      <div className="w-full flex mx-auto my-auto">
        <div className="w-full h-[300px]">
          <canvas id="myChart" className="h-4/6 w-full"></canvas>
        </div>
      </div>
    </>
  );
};

export default BarChart;

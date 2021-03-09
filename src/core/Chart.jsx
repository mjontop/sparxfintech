import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = (data) => {
  return (
    <>
      <Bar
        data={data}
        options={{
          scales: {
            xAxes: [
              {
                maxBarThickness: "20",
                ticks: {
                  fontSize: 16,
                  fontColor: "black",
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  max: 50000,
                  fontColor: "black",
                  fontSize: 20,
                  fontFamily: "Raleway",
                },
              },
            ],
          },
          legend: {
            labels: {
              fontColor: "#2e9dbe",
              fontSize: 24,
              fontFamily: "Raleway",
            },
            display: false,
          },
        }}
      />
    </>
  );
};

export default Chart;

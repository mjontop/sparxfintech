import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const Chart = (data) => {
  console.log("data is", data);
  return (
    <>
      <Bar
        data={data}
        options={{
          scales: {
            xAxes: [
              {
                maxBarThickness: 40,
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  max: 10000,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontColor: "#2e9dbe",
            },
          },
        }}
      />
    </>
  );
};

export default Chart;

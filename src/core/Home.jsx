import React from "react";
import "../styles.css";
import { API } from "../backend";
import Map from "./Map";
import Chart from "./Chart";
import Base from "./Base";
import graphIco from "../assets/graphIcon.png";

const circularProgregessBar = (percentage) => (
  <div className="row">
    <div className="col-12 col-md-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="progress"
              data-percentage={100 - parseInt(percentage)}
            >
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value ml-3 ml-md-4">
                <div>
                  {percentage}%
                  <br />
                  <span>completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4"></div>
    <div className="col-12 col-md-4"></div>
  </div>
);

const dottedDropDown = () => (
  <div className="dropdown">
    <button
      className="btn dropdown-toggle pb-3"
      type="button"
      data-toggle="dropdown"
      style={{ fontWeight: 1000, fontSize: "32px", lineHeight: "0.5px" }}
    >
      ...
    </button>
    <ul className="dropdown-menu ">
      <li>View</li>
      <li>Delete</li>
    </ul>
  </div>
);

export default function Home() {
  console.log("API IS", API);
  const tableDatas = [
    {
      demography: "Population",
      zipcode: "322382",
      market: "121333",
      marketVariable: {
        desc: "25 Miles radius  from ZipCode",
        data: 70,
      },
    },
    {
      demography: "Female",
      zipcode: "33243",
      market: "211212",
      marketVariable: {
        desc: "$2,000 - $5000 Avg Patients",
        data: 90,
      },
    },
    {
      demography: "Male",
      zipcode: "32323",
      market: "12321323",
      marketVariable: {
        desc: "20% prospects Coverted",
        data: 100,
      },
    },
    {
      demography: "Average Income",
      zipcode: "$33433",
      market: "231212",
    },
  ];
  const annualCarddata = [
    {
      percentage: 11.8,
      name: "Annual Prospects",
    },
    {
      percentage: 50,
      name: "Annual Potential",
    },
    {
      percentage: 60,
      name: "Annual Patients",
    },
  ];

  const chartDatas = [
    {
      data: {
        labels: ["Women", "Men", "Total"],
        datasets: [
          {
            labelHead: "Potential Audience Size",
            backgroundColor: "rgb(46,157,190)",
            borderColor: "rgb(255, 99, 132)",
            data: [5000, 6000, 5100],
          },
        ],
      },
      desc: `Estimated Daily Audience
             size - 1.6K - 4.8K people`,
    },
    {
      data: {
        labels: ["Top 5%", "5%-10%", "10%-15%", "15%-20%"],
        datasets: [
          {
            labelHead: "Average Household Income",
            backgroundColor: "rgb(46,157,190)",
            borderColor: "rgb(255, 99, 132)",
            data: [4500, 5600, 4600, 5700],
          },
        ],
      },
      desc:
        "This is a breakdown of the average household income based on publicly availableon Targeted Area",
    },
    {
      data: {
        labels: ["Skin", "Wrinkle", "Face", "Body"],
        datasets: [
          {
            labelHead: "Targeted Audience Interests",
            backgroundColor: "rgb(46,157,190)",
            borderColor: "rgb(255, 99, 132)",
            data: [4500, 5600, 4600, 4600],
          },
        ],
      },
      desc:
        "This is a breakdow of people who have expressed in service related to Tempsure",
    },
  ];

  return (
    <Base>
      <div className="mycontainer">
        <div className="row">
          <div className="col-md-3 col-12 my-1">
            <input
              type="text"
              className="form-control"
              placeholder="Search place, address, pincode"
              className="rounded10 border border-primary p-2 w-100 no-focus-border"
            />
          </div>
          <div className="col-md-3 col-12 my-1">
            <select className="btn rounded10 border border-primary w-100 py-2">
              <option value="volvo">Medical Center dropDown</option>
            </select>
          </div>
          <div className="col-md-3 col-12 my-1">
            <select className="btn rounded10 border border-primary w-100 py-2">
              <option value="volvo">Treatment Center dropDown</option>
            </select>
          </div>
          <div className="col-md-3 col-12 my-1">
            <select className="btn rounded10 border border-primary w-100 py-2">
              <option value="volvo">Medical Type dropDown</option>
            </select>
          </div>
        </div>
        <h3 className="mt-4">
          <b>Laser Liposuction / Fat Transfer</b>
        </h3>
        <hr />
        <span className="text-muted">Overview</span>
        <div className="mt-4 border bg-white rounded10 p-4 p-md-5 shadow">
          <div className="float-right">{dottedDropDown()}</div>
          <table className="table">
            <thead className="text-primary ">
              <tr>
                <th scope="col">Demographic</th>
                <th scope="col">Zipcode</th>
                <th scope="col">Market</th>
                <th scope="col" className="text-dark">
                  Market Variables
                </th>
              </tr>
            </thead>
            <tbody>
              {tableDatas.map((tableData, index) => (
                <tr key={index}>
                  <td scope="row">{tableData.demography}</td>
                  <td>{tableData.zipcode}</td>
                  <td>{tableData.market}</td>
                  <td>
                    <b className="font-raleway">
                      {!!tableData.marketVariable &&
                        tableData.marketVariable.desc}
                    </b>
                    <br />
                    {!!tableData.marketVariable && (
                      <input
                        type="range"
                        className="form-range w-100 text-danger"
                        min="0"
                        max="100"
                        value={tableData.marketVariable.data}
                        onChange={() => console.log("changed")}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row mt-4">
          {annualCarddata.map((data, index) => (
            <div
              className="col-md-6 col-lg-4 my-1 col-12 shadow mx-auto rounded10 bg-white"
              key={index}
              style={{ maxWidth: "400px" }}
            >
              <div className="p-2 row  m-1">
                <div className="w-100">
                  <div className="float-right">{dottedDropDown()}</div>
                </div>
                <div className="col-6">
                  {circularProgregessBar(data.percentage)}
                </div>
                <div className="col-6 align-middle">
                  <h3 className="mt-20p ml-4 text-left">
                    <b>{data.name}</b>
                  </h3>
                  <br />
                  <h5 className="ml-15p text-darkorange">
                    {data.percentage}% <i class="fa fa-caret-down"></i>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row bg-primary mt-4 mx-3 border rounded10 px-4 shadow">
          <div className="col-12 col-md-6 p-2 py-4">
            <Map />
          </div>
          <div className="col-12 col-md-6 p-2 py-4">
            <Map />
          </div>
        </div>

        <div className="row mt-3 rounded">
          {chartDatas.map((chartData, index) => (
            <div
              className="col-12 col-lg-5 bg-white mx-auto  rounded10  border my-5 shadow "
              key={index}
            >
              <div className="mt-2 float-right">{dottedDropDown()}</div>
              <div className="text-center text-primary py-4">
                <b style={{ fontSize: "3vmin" }}>
                  {chartDatas[index].data.datasets[0].labelHead}
                </b>
              </div>

              <br />
              <div className="pt-4 pb-2">{Chart(chartData.data)}</div>
              <p className="text-darkorange ml-5 text-justify">
                <b>{chartData.desc}</b>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Base>
  );
}

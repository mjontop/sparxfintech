import React from "react";
import { Dropdown } from "react-bootstrap";
import "../styles.css";
import { API } from "../backend";
import Map from "./Map";
import Chart from "./Chart";
import Base from "./Base";

const circularProgregessBar = (percentage) => (
  <div className="row">
    <div className="col-12 col-md-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-md-2">
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
              <div className="progress-value ml-4">
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
  <Dropdown>
    <Dropdown.Toggle
      variant=""
      id="dropdown-basic"
      style={{ fontSize: "32px", lineHeight:'0.5px', fontWeight: '1000' }}
    >
      . . .
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default function Home() {
  console.log("API IS", API);
  const tableDatas = [
    {
      demography: "Population",
      zipcode: "322382",
      market: "741258",
      marketVariable: {
        desc: "adfa",
        data: 70,
      },
    },
    {
      demography: "Ropulfgsdfgation",
      zipcode: "325345382",
      market: "74124558",
      marketVariable: {
        desc: "avdfasdagadfa",
        data: 90,
      },
    },
    {
      demography: "Mdgakfdsajkpulation",
      zipcode: "324332452382",
      market: "7414523258",
      marketVariable: {
        desc: "adfgsafdfa",
        data: 30,
      },
    },
    {
      demography: "Tadfjalkjdfopulation",
      zipcode: "3243542382",
      market: "741245258",
      marketVariable: {
        desc: "adasdfasdfa",
        data: 200,
      },
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
            label: "Potential Audience Size",
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
            label: "Average Household Income",
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
        labels: [
          "Skin Tightening",
          "Wrinkle reduction",
          "Face Tightening",
          "Body Conturing",
        ],
        datasets: [
          {
            label: "Targeted Audience Interests",
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
          <div className="col-md-3 col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Search place, address, pincode"
              className="rounded10 border border-primary p-2 w-100"
            />
          </div>
          <div className="col-md-3 col-12">
            <select className="btn rounded10 border border-primary w-100 py-2">
              <option value="volvo">Medical Center dropDown</option>
            </select>
          </div>
          <div className="col-md-3 col-12">
            <select className="btn rounded10 border border-primary w-100 py-2">
              <option value="volvo">Treatment Center dropDown</option>
            </select>
          </div>
          <div className="col-md-3 col-12">
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
        <div className="mt-4 border bg-white rounded10 p-4 p-md-5">
          <table className="table">
            <thead className="text-primary ">
              <tr>
                <th scope="col">Demographic</th>
                <th scope="col">Zipcode</th>
                <th scope="col">Market</th>
                <th scope="col">Market Variables</th>
              </tr>
            </thead>
            <tbody>
              {tableDatas.map((tableData) => (
                <tr>
                  <td scope="row">{tableData.demography}</td>
                  <td>{tableData.zipcode}</td>
                  <td>{tableData.market}</td>
                  <td>
                    {tableData.marketVariable.desc} <br />
                    <input
                      type="range"
                      className="form-range w-100"
                      min="0"
                      max="100"
                      value={tableData.marketVariable.data}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row mt-4">
          {annualCarddata.map((data) => (
            <div className="col-md-3 col-12 shadow mx-auto rounded10 bg-white">
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
                  <h5 className="ml-15p">{data.percentage}%</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row bg-primary mt-3 rounded">
          <div className="col-12 col-md-6 p-2 py-4">
            <Map />
          </div>
          <div className="col-12 col-md-6 p-2 py-4">
            <Map />
          </div>
        </div>
        <div className="row mt-3 rounded">
          {chartDatas.map((chartData) => (
            <div className="col-12 col-md-5 bg-white mx-auto  rounded10  border my-1 shadow ">
              <div className="mt-2 float-right">{dottedDropDown()}</div>
              <div className="pt-4 pb-2">{Chart(chartData.data)} </div>
              <h4 className="text-warning ml-5">{chartData.desc}</h4>
            </div>
          ))}
        </div>
      </div>
    </Base>
  );
}

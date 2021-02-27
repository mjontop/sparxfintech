import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";

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
  return (
    <Base title="Home Page">
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
        <div className="mt-4 border border-dark rounded p-4 p-md-5">
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
                    {tableData.marketVariable.desc}
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${tableData.marketVariable.data}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Base>
  );
}

import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";

export default function Home() {
  console.log("API IS", API);

  return (
    <Base title="Home Page">
      <div className="mycontainer">
        <div className="row">
          <div className="col-md-3 col-12">
            <input
              type="text"
              class="form-control"
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
      </div>
    </Base>
  );
}

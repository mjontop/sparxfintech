import React from "react";

const Base = ({ children }) => (
  <>
    <div
      className="row shadow p-3  bg-white rounded"
     
    >
      <div className="col-md-2 col-12 text-md-center">
        <img
          src="http://myvds.in/design/assets/images/v1126_50.png"
          width={50}
        />
      </div>
      <div className="col-md-10 col-12 py-3">
        <b>Laser Liposuction / Fat Transfer</b>
        <div className="float-right">
          <img
            src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
            alt=""
            width={50}
            className=" mr-4"
          />
          <span>Ramon Ridwan</span>
          <i
            className="fa fa-bell ml-4"
            aria-hidden="true"
            style={{ fontSize: "32px", lineHeight: "1px" }}
          ></i>
        </div>
      </div>
    </div>
    <div>
      <div className="row pb-3 ">
        <div className="col-md-2 right-shadow pt-5 screen-sm-hidden">
          <button className="btn btn-primary btn-block rounded text-left py-3 hide-2x">
            Overview
          </button>
          <button className="btn btn-primary btn-block rounded text-left py-3 hide-2x">
            Logout
          </button>
        </div>
        <div className=" col-12  col-md-10 pt-5">{children}</div>
      </div>
    </div>
  </>
);

export default Base;

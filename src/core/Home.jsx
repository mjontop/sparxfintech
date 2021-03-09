import React from "react";
import "../styles.css";
import Map from "./Map";
import Chart from "./Chart";
import Base from "./Base";
import Slider from "@material-ui/core/Slider";
import { getZipData } from "./helper/coreapicalls";

const circularProgregessBar = (percentage, value, annualData) => {
  return (
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
                    {parseFloat(
                      annualData[Object.keys(annualData)[value]]
                    ).toFixed(2)}
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
};

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

const dropdownData = {
  ALMA: [
    {
      "Accent Prime": [
        "Body Contouring",
        "body contouring",
        "body sculpting",
        "fat removal",
        "weight loss",
        "fat reduction",
        "noninvasive fat reduction",
        "noninvasive body contouring",
        "non-surgical fat reduction",
        "non-surgical body contouring",
        "no downtime fat reduction",
        "laser body contouring",
        "skin tightening",
        "treatment for sagging skin",
        "treatment for loose skin",
        "cellulite reduction",
        "rf body contouring",
        "ultrasound body contouring",
      ],
    },
    {
      "Alma Q": [
        "laser resurfacing",
        "laser skin treatments",
        "stretch mark removal",
        "skin rejuvenation",
        "skin resurfacing",
        "anti-aging treatment",
        "skin tightening",
        "laser skin resurfacing",
        "acne scar reduction",
        "scar reduction",
        "treatment for brown spots",
        "treatment for redness",
        "rosacea treatment",
        "sun damage treatment",
        "facial vein treatment",
        "leg vein treatment",
        "tattoo removal",
        "laser facial",
        "scar removal",
        "acne removal",
        "photo facial",
        "laser tattoo removal",
      ],
    },
    {
      BeautiFill: [
        "liposuction",
        "laser lipo",
        "fat transfer",
        "fat grafting",
        "laser skin treatments",
        "skin rejuvenation",
      ],
      "FemiLift Pixel": [
        "feminine dryness",
        "womans health",
        "feminine tightening",
        "feminine looseness",
        "feminine atrophy",
        "treatment for urinary incontinence",
        "treatment for stress urinary incontinence",
        "bladder leakage",
        "painful intercourse",
        "frequent uti",
        "hormone free treatment",
        "non-surgical feminine rejuvenation",
        "non-surgical feminine tightening",
        "no downtime feminine rejuvenation",
        "menopause relief",
      ],
      "Harmony XL Pro": [],
      Soprano: [],
      VascuLife: [],
    },
  ],
  BTL: [
    {
      Emsculpt: [
        "body contouring",
        "body sculpting",
        "muscle building",
        "noninvasive body contouring",
        "non-surgical body contouring",
        "skin tightening",
        "butt contouring",
        "abdominal contouring",
        "leg contouring",
        "arm contouring",
        "calves contouring",
      ],
    },
    {
      EmsculptNeo: [
        "body contouring",
        "body sculpting",
        "treatment for lose skin",
        "noninvasive body contouring",
        "non-surgical body contouring",
        "treatment for sagging skin",
        "butt contouring",
        "abdominal contouring",
        "leg contouring",
        "arm contouring",
        "calves contouring",
        "fat removal",
        "weight loss",
        "fat reduction",
        "noninvasive fat reduction",
        "no downtime fat reduction",
      ],
    },
    {
      Emsella: [
        "treatment for urinary incontinence",
        "treatment for stress urinary incontinence",
        "bladder leakage",
        "womans health",
        "frequent uti",
        "hormone free treatment",
        "non-surgical feminine rejuvenation",
        "no downtime feminine rejuvenation",
        "menopause relief",
      ],
    },
    {
      Emtone: [
        "body sculpting",
        "noninvasive body contouring",
        "non-surgical body contouring",
        "no downtime fat reduction",
        "skin tightening",
        "treatment for sagging skin",
        "treatment for lose skin",
        "cellulite reduction",
      ],
    },
    {
      "Exilis Ultra": [
        "skin revitalization",
        "body tightening",
        "laser skin treatments",
        "laser facial",
        "skin rejuvenation",
        "anti-aging treatment",
        "skin tightening",
        "laser skin resurfacing",
        "wrinkle reduction",
        "loose skin",
        "sagging skin",
        "no downtime skin resurfacing",
      ],
    },
    {
      Vanquish: [
        "body contouring",
        "body sculpting",
        "fat removal",
        "weight loss",
        "fat reduction",
        "noninvasive fat reduction",
        "noninvasive body contouring",
        "non-surgical fat reduction",
        "non-surgical body contouring",
        "no downtime fat reduction",
        "RF body contouring",
        "leg vein treatment",
      ],
    },
  ],
  CYNOSURE: [
    {
      "Elite+/Elite iQ	": [
        "laser hair removal",
        "laser resurfacing",
        "laser skin treatments",
        "stretch mark removal",
        "skin rejuvenation",
        "skin resurfacing",
        "anti-aging treatment",
        "skin tightening",
        "laser skin resurfacing",
        "treatment for brown spots",
        "treatment for redness",
        "rosacea treatment",
        "sun damage treatment",
        "facial vein treatment",
        "leg vein treatment",
      ],
    },
    {
      ICON: [
        "laser hair removal",
        "laser resurfacing",
        "laser skin treatments",
        "stretch mark removal",
        "skin rejuvenation",
        "skin resurfacing",
        "anti-aging treatment",
        "skin tightening",
        "laser skin resurfacing",
        "acne scar reduction",
      ],
    },
  ],
};
export default function Home() {
  const tableDatas = {
    zip: "623",
    country: "US",
    approximate_latitude: "18.08",
    approximate_longitude: "-67.14",
    population_count: 43061,
    total_male_population: 20603,
    total_female_population: 22458,
    pop_under_10: 5319,
    pop_20_to_29: 4868,
    pop_30_to_39: 6096,
    pop_40_to_49: 5740,
    pop_50_to_59: 4889,
    pop_60_to_69: 5047,
    pop_70_to_79: 3215,
    pop_80_plus: 1702,
  };

  const [annualData, setAnnualData] = React.useState({});
  const [zipcodeData, setZipcodeData] = React.useState({});

  const [sliderData, setSliderData] = React.useState({
    radius: 10,
    avgpat: [20, 50],
    prospacts: 20,
  });

  const handleSliderChange = (name, value) => (event, value) => {
    event.preventDefault();
    if (value < 11) return;
    setSliderData({ ...sliderData, [name]: value });
    if (value < 80) {
      setZipcodeData({
        ...zipcodeData,
        population_count: zipcodeData[`pop_${value}_to_${value + 9}`],
      });

      return;
    }
    setZipcodeData({ ...zipcodeData, population_count: 4868 });
  };

  const handleZipChange = (name) => (event) => {
    event.preventDefault();
    setZipcodeData({ ...zipcodeData, zip: event.target.value });
  };
  const handleSubmit = () => {
    getZipData(zipcodeData.zip)
      .then(({ data }) => {
        setZipcodeData(data);
        console.log({ zipcodeData });
        setAnnualData({
          prospects: data.population_count * 0.005,
          potential: data.population_count * 0.005 * 0.2,
          patients: data.population_count * 0.005 * 0.2 * 5500,
        });
      })
      .catch((err) => console.log("Error", err));
  };

  const [dropDownDataOP, setDropDownDataOP] = React.useState({
    comp: "",
    type: "",
    keywords: "",
    buttonStatus: false,
    showStats: false,
  });

  const handleChange = (name) => (event) => {
    event.preventDefault();
    setDropDownDataOP({ ...dropDownDataOP, [name]: event.target.value });
    if (dropDownDataOP.comp !== "" && dropDownDataOP.type !== "") {
      setDropDownDataOP({ ...dropDownDataOP, buttonStatus: true });
      handleSubmit();
    }
  };

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
        "This is a breakdown of the average household income based on publicly available on Targeted Area",
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
        "This is a breakdow of people who have expressed in service related to Tempsure/ Flexsure",
    },
  ];

  const tableDataBottom = [
    { keywords: "Laser Skin Tightening", avg: "12345678" },
    { keywords: "Face Tightening", avg: "12345678" },
    { keywords: "Laser Skin Tightening", avg: "12345678" },
    { keywords: "Skin Tightening Facial", avg: "12345678" },
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
              onChange={handleZipChange("zip")}
            />
          </div>
          <div className="col-md-3 col-12 my-1">
            <select
              className="btn rounded10 border border-primary w-100 py-2"
              onChange={handleChange("comp")}
            >
              <option value="none">Laser company</option>
              {Object.keys(dropdownData).map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
          </div>
          <div className="col-md-3 col-12 my-1">
            <select
              className="btn rounded10 border border-primary w-100 py-2"
              onChange={handleChange("type")}
            >
              <option value="">Laser Type</option>
              {dropDownDataOP["comp"] !== "" &&
                dropdownData[dropDownDataOP["comp"]].map((data) => (
                  <option value={Object.keys(data)}>{Object.keys(data)}</option>
                ))}
            </select>
          </div>
          <div className="col-md-3 col-12 my-1">
            <select
              className="btn rounded10 border border-primary w-100 py-2"
              onClick={handleChange("keywords")}
            >
              <option value="">Keywords</option>
              {dropDownDataOP["type"] !== "" &&
                dropdownData[dropDownDataOP["comp"]].map((data, index) => {
                  if (Object.keys(data)[0] === dropDownDataOP["type"]) {
                    return Object.values(data)[0].map((d) => (
                      <option value={d}>{d}</option>
                    ));
                  }
                })}
            </select>
          </div>
        </div>
        <div className="text-center">
          <button
            className="btn buttonBlue rounded10  my-2 text-white"
            disabled={!dropDownDataOP.buttonStatus}
            onClick={(e) => {
              e.preventDefault();
              setDropDownDataOP({
                ...dropDownDataOP,
                showStats: !dropDownDataOP.showStats,
              });
            }}
          >
            {!dropDownDataOP.showStats ? "Show" : "Hide"} Stats
          </button>
        </div>

        {dropDownDataOP.showStats && (
          <>
            <h3 className="mt-4">
              <b>
                {dropDownDataOP.comp} / {dropDownDataOP.type}
              </b>
            </h3>
            <hr />
            <span className="text-muted">Overview</span>
            <div className="mt-4 border bg-white rounded10 p-4 p-md-5 shadow">
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
                  <tr>
                    <td scope="row">Population</td>
                    <td scope="row">{zipcodeData.zip}</td>
                    <td scope="row">{zipcodeData["population_count"]}</td>
                    <td>
                      <b className="font-raleway">
                        {sliderData.radius} Miles radius from Zipcode
                      </b>
                      <Slider
                        value={sliderData.radius}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        onChange={handleSliderChange("radius")}
                        step={10}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">Female</td>
                    <td scope="row">{zipcodeData.zip}</td>
                    <td scope="row">
                      {zipcodeData["total_female_population"]}
                    </td>
                    <td>
                      <b className="font-raleway ">
                        ${sliderData.avgpat[0]}-{sliderData.avgpat[1]} Avg
                        Patients
                      </b>
                      <Slider
                        value={sliderData.avgpat}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        onChange={handleSliderChange("avgpat")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">Male</td>
                    <td scope="row">{zipcodeData.zip}</td>

                    <td scope="row">{zipcodeData["total_male_population"]}</td>
                    <td>
                      <b className="font-raleway ">
                        {sliderData.prospacts} prospacts Covered
                      </b>
                      <Slider
                        value={sliderData.prospacts}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        onChange={handleSliderChange("prospacts")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">Average Income </td>
                    <td scope="row">{zipcodeData.zip}</td>

                    <td scope="row">
                      ${Math.floor(Math.random() * 100000 + 1)}
                    </td>
                  </tr>
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
                    <div className="w-100"></div>
                    <div className="col-6">
                      {circularProgregessBar(
                        data.percentage,
                        index,
                        annualData
                      )}
                    </div>
                    <div className="col-6 align-middle">
                      <h3 className="mt-20p ml-4 text-left">
                        <b>{data.name}</b>
                      </h3>
                      <br />
                      <h5 className="ml-15p text-darkorange">
                        {data.percentage}% <i className="fa fa-caret-down"></i>
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
              <div
                className="col-12 col-md-6 p-2 py-4"
                style={{ left: "24px" }}
              >
                <Map />
              </div>
            </div>

            <div className="row mt-3 rounded">
              <>
                <div className="col-12 col-lg-5 bg-white mx-auto  rounded10  border my-5 shadow ">
                  <div className="text-center text-primary py-4">
                    <b style={{ fontSize: "3vmin" }}>Potential Audience Size</b>
                  </div>
                  <br />
                  <div className="pt-4 pb-2">
                    {Chart({
                      labels: ["Women", "Men", "Total"],
                      datasets: [
                        {
                          labelHead: "Potential Audience Size",
                          backgroundColor: "rgb(46,157,190)",
                          borderColor: "rgb(255, 99, 132)",
                          data: [
                            zipcodeData["total_female_population"],
                            zipcodeData["total_male_population"],
                            zipcodeData["population_count"],
                          ],
                        },
                      ],
                    })}
                  </div>
                  <p className="text-darkorange ml-5 text-justify">
                    Estimated Daily Audience size - 1.6K - 4.8K people
                  </p>
                </div>
              </>
              {chartDatas.map((chartData, index) => (
                <div
                  className="col-12 col-lg-5 bg-white mx-auto  rounded10  border my-5 shadow "
                  key={index}
                >
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

            <div className="mt-4 border bg-white rounded10 p-4 p-md-5 shadow container">
              <h3 className="text-primary text-center w-100">
                Search Volume-Tempsure + Flexsure
              </h3>
              <table className="table">
                <thead>
                  <h3 className="text-primary ">Tempsure/ Flexsure</h3>
                  <tr>
                    <th scope="col" className="text-dark">
                      Keyword
                    </th>
                    <th scope="col" className="text-dark">
                      Avg Searches
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableDataBottom.map((tableData, index) => (
                    <tr key={index}>
                      <td scope="row">{tableData.keywords}</td>
                      <td>{tableData.avg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </Base>
  );
}

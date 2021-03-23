import Axios from "axios";
import { API } from "../../backend";

export const getZipData = async (zip) => {
  if (!zip) {
    return {
      data: {
        zip: "Invalid Zip",
      },
    };
  }
  try {
    const { data } = await Axios.get(`${API}/zipcode/${zip}`);
    if (data.error === "Invalid Zipcode")
      return {
        data: {
          zip: "Invalid Zipcode",
          approximate_latitude: "NA",
          approximate_longitude: "NA",
          population_count: "NA",
          total_male_population: "NA",
          total_female_population: "NA",
          median_household_income: "NA",
        },
      };
    data["populationActual"] = data.population_count;
    data["populationActualMen"] = data.total_male_population;
    data["populationActualWomen"] = data.total_female_population;
    data["avgIncomeActual"] = data.median_household_income;
    let [
      popListToRad,
      popListToRadMale,
      popListToRadFemale,
      popAvgImcomeList
    ] = await getPopulationInRaduis(data.zip);
   
    return {
      success: true,
      data,
      popList: { popListToRad, popListToRadMale, popListToRadFemale, popAvgImcomeList },
    };
  } catch (ex) {
    return { succes: false };
  }
};

export const getPopulationInRaduis = async (zip) => {
  if (!zip) {
    return;
  }
  try {
    let popListToRad = [];
    let popListToRadMale = [];
    let popListToRadFemale = [];
    let popAvgImcomeList = [];
    for (let i = 1; i <= 10; i += 1) {
      console.log(i);
      const URL = `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=${zip}&minimumradius=0&maximumradius=${
        i * 5
      }&country=ALL&key=BI7LVJ1MF5TOZGAOF67Q`;
      const { data } = await Axios.get(URL);
      const { DataList } = data;
      const zipCodeList = DataList.map((d) => d.Code);
      let popList = zipCodeList.map(async (zip) => {
        const { data } = await Axios.get(`${API}/zipcode/${zip}`);
        return data.population_count;
      });

      let maleList = zipCodeList.map(async (zip) => {
        const { data } = await Axios.get(`${API}/zipcode/${zip}`);
        return data.total_male_population;
      });

      let feMaleList = zipCodeList.map(async (zip) => {
        const { data } = await Axios.get(`${API}/zipcode/${zip}`);
        return data.total_female_population;
      });

      let avgIncomeList = zipCodeList.map(async (zip) => {
        const { data } = await Axios.get(`${API}/zipcode/${zip}`);
        return data.median_household_income;
      });

      let popsNum = await Promise.all(popList).then((pops) => {
        return pops;
      });
      let popsNumMale = await Promise.all(maleList).then((pops) => {
        return pops;
      });
      let popsNumFemale = await Promise.all(feMaleList).then((pops) => {
        return pops;
      });
      let avgIncome = await Promise.all(avgIncomeList).then((pops) => {
        return pops;
      });

      popsNum = popsNum.reduce((total, num) => {
        if (num === "NA") {
          num = 0;
        }
        return total + num;
      });


      popsNumMale = popsNumMale.reduce((total, num) => {
        if (num === "NA") {
          num = 0;
        }
        return total + num;
      });

      popsNumFemale = popsNumFemale.reduce((total, num) => {
        if (num === "NA") {
          num = 0;
        }
        return total + num;
      });

      avgIncome = avgIncome.reduce((total, num) => {
        if (num === "NA") {
          num = 0;
        }
        return total + num;
      });

      popListToRad = [...popListToRad, popsNum];
      popListToRadMale = [...popListToRadMale, popsNumMale];
      popListToRadFemale = [...popListToRadFemale, popsNumFemale];
      popAvgImcomeList = [...popAvgImcomeList, avgIncome];
    }
    return [popListToRad, popListToRadMale, popListToRadFemale, popAvgImcomeList];
  } catch (ex) {
    console.log("Error old ", ex);
  }
};

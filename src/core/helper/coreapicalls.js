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
    let popListToRad = await getPopulationInRaduis(data.zip);
    console.log(popListToRad);
    return { success: false, data, popListToRad };
  } catch (ex) {
    return { succes: false };
  }
};

export const getPopulationInRaduis = async (zip) => {
  if (!zip) {
    return;
  }
  try {
    let popListToRad = []
    for (let i = 1; i <= 10; i += 1) {
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
      let popsNum = await Promise.all(popList).then((pops) => {
        return pops;
      });
     popsNum = popsNum.reduce((total, num)=> {
      if(num === 'NA'){
        num = 0
      }   
      return  total+num
    })
     popListToRad = [...popListToRad, popsNum]
    }
    return popListToRad
  } catch (ex) {
    console.log("Error ", ex);
  }
};

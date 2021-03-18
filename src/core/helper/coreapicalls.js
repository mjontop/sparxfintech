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
    return { success: false, data };
  } catch (ex) {
    return { succes: false };
  }
};

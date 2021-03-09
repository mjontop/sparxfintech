import Axios from "axios";
import { API } from "../../backend";

export const getZipData = async (zip) => {
  try {
    const { data } = await Axios.get(`${API}/zipcode/${zip}`);
    return { success: false, data };
  } catch (ex) {
    return { succes: false };
  }
};

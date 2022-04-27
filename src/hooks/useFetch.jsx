import axios from "axios";

const API_ENDPOINT = "http://www.omdbapi.com/?apikey=93638ea3";

export const useFetch = async (keyword = "harry poter") => {
  let response = await axios.get(`${API_ENDPOINT}&s=${keyword}`);
  console.log(response, "data");
};

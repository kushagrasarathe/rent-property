import axios from "axios";

export const baseURL = "https://bayut.p.rapidapi.com/";

export const fetchData = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      "X-RapidAPI-Key": "34ca990222msh5e51d9541d739c5p1e261ejsn6a5cec2b7797",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};

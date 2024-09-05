const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7456ed951fmsh599a910798f7111p1f123djsn6561d467f017",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchVideoApi = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

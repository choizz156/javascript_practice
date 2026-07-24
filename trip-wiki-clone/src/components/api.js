const API_URL = "https://trip-wiki-api.vercel.app/";

export const requestCities = async () => {
  try {
    const res = await fetch(`${API_URL}`);

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

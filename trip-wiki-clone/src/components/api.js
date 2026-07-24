const API_URL = "https://trip-wiki-api.vercel.app/";

export const requestCities = async (region) => {

  const target = (!region || region === "All") ? "" : region;
  try {
    const res = await fetch(`${API_URL}${target}?start=0`);

    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

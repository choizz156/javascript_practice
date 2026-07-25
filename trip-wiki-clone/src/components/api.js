const API_URL = "https://trip-wiki-api.vercel.app/";

export const requestCities = async (region, sortBy, searchWord) => {
  const target = !region || region === "All" ? "" : region;
  try {
    let url = `${API_URL}${target}?start=0`;
  
    if (sortBy) {
      url += `&sort=${sortBy}`;
    }
 
    if (searchWord) {
      url += `&search=${searchWord}`;
    }

    const res = await fetch(url);

    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const requestCityDetail = async (cityId) => {
  try {
    const res = await fetch(`${API_URL}city/${cityId}`);

    if(res.ok){
      const data = await res.json();
      return data.cityDetail;
    }
  } catch (error) {
    console.log(error); 
  }
}
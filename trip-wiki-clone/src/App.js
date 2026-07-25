import { requestCities, requestCityDetail } from "./components/api.js";
import Header from "./components/Header.js";
import RegionList from "./components/RegionList.js";
import CityList from "./components/CityList.js";
import CityDetail from "./components/CityDetails.js";

export default function App($app) {
  let state = {
    currentPage: "/",
    region: "All",
    cities: [],
    sortBy: "total",
    searchWord: "",
    cityDetail: null,
  };

  const render = () => {
    const { currentPage, cities, sortBy, searchWord } = state;

    $app.innerHTML = "";

    Header({
      $app,
      initState: { currentPage, sortBy, searchWord },
      handleSortChange: async (newSort) => {
        state.sortBy = newSort;
        state.cities = await requestCities(
          state.region,
          state.sortBy,
          state.searchWord,
        );
        render();
      },
      handleSearch: async (newSearch) => {
        state.searchWord = newSearch;
        state.cities = await requestCities(
          state.region,
          state.sortBy,
          state.searchWord,
        );
        render();
      },
    });

    if (!currentPage.includes("/city/")) {
      RegionList({
        $app,
        initState: state.region,
        handleRegion: async (region) => {
          history.pushState(null, null, `/${region}`);
          state.region = region;
          state.cities = await requestCities(state.region);
          render();
        },
      });

      CityList({
        $app,
        initState: cities,
        handleItemClick: async (id) => {
          history.pushState(null, null, `/city/${id}`);
          state.currentPage = `/city/${id}`;
          state.cityDetail = await requestCityDetail(id);
          render();
        },
      });
    } else {
      CityDetail({ $app, initState: state.cityDetail });
    }
  };

  $app.addEventListener("click", (e) => {
    if (e.target.className === "nav-btn") {
      const path = e.target.dataset.path;

      // [마법의 주문] 브라우저 주소창을 path로 쓱 바꿉니다! (절대 새로고침 안 됨)
      history.pushState(null, null, path);
      state.currentPage = path;

      render();
    }
  });

  // 4. 사용자가 브라우저 '뒤로 가기/앞으로 가기'를 눌렀을 때 화면을 다시 그려주는 센서(popstate)
  window.addEventListener("popstate", () => {
    state.currentPage = window.location.pathname;
    render();
  });

  const init = async () => {
    const citiesData = await requestCities();
    state.cities = citiesData;
    render();
  };

  init();
}

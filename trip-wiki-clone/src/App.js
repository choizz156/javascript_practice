import { requestCities } from "./components/api.js";
import Header from "./components/Header.js";
import RegionList from "./components/RegionList.js";
import CityList from "./components/CityList.js";

export default function App($app) {
  let state = {
    currentPage: "/",
    region: "All",
    cities: [],
  };

  const render = () => {
    const { currentPage, cities } = state;

    $app.innerHTML = "";

    Header({ $app, initState: { currentPage } });
    RegionList({
      $app,
      initState: {},
      handleRegion: async (region) => {
        history.pushState(null, null, `/${region}`);
        state.region = region;
        render();
      },
    });
    CityList({ $app, initState: cities });
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

export default function RegionList({ $app, initState }) {
  let state = initState;

  const render = () => {
    $app.innerHTML += `<nav><h2>여기엔 지역 탭이 들어갑니다</h2></nav>`;
  };

  render();
}

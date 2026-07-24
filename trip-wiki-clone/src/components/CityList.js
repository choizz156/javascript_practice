export default function CityList ({ $app, initState }) {
  let state = initState;

  const render = () => {
    $app.innerHTML += `<main><p>여기엔 여행지 리스트가 쫙 뜹니다</p></main>`;
  };

  render();
}

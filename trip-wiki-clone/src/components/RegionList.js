export default function RegionList({ $app, initState, handleRegion }) {
  
  let state = initState;

  const regionList = [
    "🚀 All",
    "🌏 Asia",
    "🕌 Middle-East",
    "🇪🇺 Europe",
    "💃 Latin-America",
    "🐘 Africa",
    "🏈 North-America",
    "🏄 Oceania",
  ];

  const render = () => {
    const regionButtons = regionList
      .map((elm) => {
        const regionId = elm.split(" ")[1];
        const isClicked =
          state === regionId || (!state && regionId === "All") ? "clicked" : "";

        return `<div id="${regionId}" class="region-btn ${isClicked}">${elm}</div>`;
      })
      .join("");

    $app.insertAdjacentHTML("beforeend", `
      <nav id="regionNav" class="region-list">
        ${regionButtons}
      </nav>
    `);

    // ⭐️ $app 전체가 아니라, 방금 만든 네비게이션(regionNav)에만 센서를 답니다.
    // 이렇게 하면 화면이 다시 그려질 때 예전 센서는 깔끔하게 삭제되어 중복 실행을 막아줍니다!
    document.getElementById("regionNav").addEventListener("click", (e) => {
      if (e.target.classList.contains("region-btn")) {
        const selectionRegion = e.target.id;
        if (handleRegion) {
          handleRegion(selectionRegion);
        }
      }
    });
  };

  render();
}

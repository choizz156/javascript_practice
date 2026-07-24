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

    $app.innerHTML += `
      <nav class="region-list">
        ${regionButtons}
      </nav>
    `;
  };


  $app.addEventListener("click", (e) => {
    if (e.target.classList.contains("region-btn")) {
      const selectionRegion = e.target.id;
      if (handleRegion) {
        handleRegion(selectionRegion);
      }
    }
  });


  render();
}

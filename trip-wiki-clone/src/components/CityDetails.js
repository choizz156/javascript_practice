export default function CityDetail({ $app, initState }) {
  let state = initState;

  const render = () => {
    if (!state) return;
    const { image, city, region, country, info } = state;

    $app.insertAdjacentHTML(
      "beforeend",
      `
      <main class="city-detail">
        <div class="detail-header">
          <img src="${image}" alt="${city}" />
          <div class="detail-title">
            <h2>${city}</h2>
            <p>${region} / ${country}</p>
          </div>
        </div>
        
        <div class="detail-scores">
          <div class="score-item"><span>💰 Cost</span> <span>${info.cost} 점</span></div>
          <div class="score-item"><span>🎉 Fun</span> <span>${info.fun} 점</span></div>
          <div class="score-item"><span>👮 Safety</span> <span>${info.safety} 점</span></div>
          <div class="score-item"><span>🌐 Internet</span> <span>${info.internet} 점</span></div>
          <div class="score-item"><span>💨 Air</span> <span>${info.air} 점</span></div>
          <div class="score-item"><span>🍔 Food</span> <span>${info.food} 점</span></div>
        </div>
      </main>
      `,
    );
  };

  render();
}

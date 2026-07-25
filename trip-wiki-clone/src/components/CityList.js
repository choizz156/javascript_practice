export default function CityList({ $app, initState, handleItemClick }) {
  let state = initState;
  const { cities } = state;
  const render = () => {
    $app.insertAdjacentHTML(
      "beforeend",
      ` <main>
                <!-- 3. 그리드(Grid) 디자인을 위해 클래스 이름을 하나 붙여줍니다 -->
                <div class="city-grid" id="cityGrid">
                   ${cities
                     .map(
                       (city) => `
                      <div class="city-card" id="${city.id}">
                        <img src="${city.image}" alt="${city.city}" />
                        <div class="city-info">
                          <h3>${city.city}</h3>
                          <p>${city.region}</p>
                        </div>
                      </div>
                      `,
                     )
                     .join("")} 
                </div>
            </main>`,
    );
      // ⭐️ 3. 화면을 그린 직후에 카드가 아닌 전체 그리드(cityGrid)에 센서를 답니다!
    document.getElementById("cityGrid").addEventListener("click", (e) => {
      // 마우스가 클릭한 곳(e.target)에서부터 가장 가까운(closest) ".city-card"를 찾습니다
      const clickedCard = e.target.closest(".city-card");

      if (clickedCard) {
        handleItemClick(clickedCard.id);
      }
    });
  };

  render();
}

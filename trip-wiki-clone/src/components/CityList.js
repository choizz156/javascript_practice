export default function CityList({ $app, initState }) {
  let state = initState;
  const { cities } = state;
  const render = () => {
    $app.innerHTML += ` <main>
                <!-- 3. 그리드(Grid) 디자인을 위해 클래스 이름을 하나 붙여줍니다 -->
                <div class="city-grid">
                   ${cities
                     .map(
                       (city) => `
                      <div class="city-card">
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
            </main>`;
  };

  render();
}

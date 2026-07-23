const $app = document.querySelector("#app");

function CityList($app) {
  let state = [
    { name: "Seoul", score: 4.8 },
    { name: "Paris", score: 4.7 },
    { name: "Tokyo", score: 4.5 },
  ];

  const render = () => {
    const listItems = state
      .map((item) => `<li> ${item.name}(${item.score})</li>`)
      .join("");

    $app.innerHTML = `
    <div>추천 여행지</div>
    <ul>
      ${listItems}
    </ul>
    <button id="update-btn">서울 점수 올리기!</button>
    `;
  };

  $app.addEventListener("click", (e) => {
    if (e.target.id === "update-btn") {
      state[0].score += 0.1;
      render();
    }
  });

  render();
}

CityList($app)

// const $div = document.createElement("div");
// $div.textContent = "추천 여행지df";

// const $ul = document.createElement("ul");

// const $li1 = document.createElement("li");
// $li1.textContent = "Seoul (⭐️ 4.8)";
// const $li2 = document.createElement("li");
// $li2.textContent = "Paris (⭐️ 4.7)";

// $ul.appendChild($li1);
// $ul.appendChild($li2);
// $app.appendChild($div)
// $app.appendChild($ul)

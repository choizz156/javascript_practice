const $app = document.querySelector("#app");

function CityList($app) {
  let state = [
    { name: "Seoul", score: 4.8 },
    { name: "Paris", score: 4.7 },
    { name: "Tokyo", score: 4.5 },
  ];

  const render = () => {
    const listItems = state.map((item) => CityItem(item)).join("");

    $app.innerHTML = `
    <div>추천 여행지</div>
    <ul>
      ${listItems}
    </ul>
    <form id="add-form">
      <input type="text" id="new-city" placeholder="새 여행지 이름" />
      <button type="submit">추가하기</button>
    </form>
    `;
  };

  $app.addEventListener("click", (e) => {
    //  e.target.classList.contains("like-btn")
    if (e.target.className === "like-btn") {
      const clickedName = e.target.dataset.name;
      const city = state.find((item) => item.name === clickedName);
      city.score = +(city.score + 0.1).toFixed(1); // 부동소수
      render();
    }
  });

  $app.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.id === "add-form") {
      const inputValue = document.querySelector("#new-city").value;
      if (inputValue.trim() !== "") {
        state.push({ name: inputValue, score: 0 });
        render();
      }
    }
  });

  render();
}

//컴포넌트는 함수도 대문자로 쓴다.
function CityItem(item) {
  return `<li> ${item.name}(${item.score})</li>
     <button class="like-btn" data-name="${item.name}">좋아요!!</button>`;
}

//클로져 적용
CityList($app);

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

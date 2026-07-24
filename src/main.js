const $app = document.querySelector("#app");

/**
 * [부모 컴포넌트] CityList
 * - 클로저(Closure)를 활용한 함수형 컴포넌트입니다.
 * - 내부의 state(상태)는 외부에서 접근할 수 없으며, 오직 내부 이벤트를 통해서만 변경됩니다.
 */
function CityList($app) {
  // 1. 상태 (State): 화면에 그려질 핵심 데이터
  // 데이터가 변하면 화면도 다시 그려져야 합니다. (반응성, Reactivity)
  let state = [
    { name: "Seoul", score: 4.8 },
    { name: "Paris", score: 4.7 },
    { name: "Tokyo", score: 4.5 },
  ];

  // 2. 화면 그리기 (Render)
  // 상태(state)를 기반으로 HTML 문자열을 만들어 화면에 덮어씌우는 역할
  const render = () => {
    // 배열 데이터를 순회하며 하위 컴포넌트(CityItem)에게 데이터(Props)를 전달해 HTML 덩어리를 생성
    const listItems = state.map((item) => CityItem(item)).join("");

    // 백틱(`)을 활용한 템플릿 리터럴로 직관적인 HTML 작성 (Vue의 템플릿과 유사)
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

  // 3. 이벤트 위임 (Event Delegation)
  // 하위 요소(버튼들)에 일일이 이벤트를 달지 않고, 부모($app)에서 한 번에 이벤트를 캐치합니다.
  $app.addEventListener("click", (e) => {
    // 클릭된 요소가 '좋아요' 버튼일 때만 동작
    if (e.target.className === "like-btn") {
      const clickedName = e.target.dataset.name; // data-name 속성 읽기
      const city = state.find((item) => item.name === clickedName);
      
      // 부동소수점 오류 방지를 위해 toFixed(1) 사용 후 다시 숫자(+)로 변환
      city.score = +(city.score + 0.1).toFixed(1); 
      
      render(); // 데이터가 변경되었으니 화면을 갱신!
    }
  });

  // 4. 새로운 폼 추가 이벤트
  $app.addEventListener("submit", (e) => {
    e.preventDefault(); // 폼 제출 시 브라우저가 새로고침되는 기본 동작을 막음 (매우 중요)
    
    if (e.target.id === "add-form") {
      const inputValue = document.querySelector("#new-city").value;
      if (inputValue.trim() !== "") {
        // state에 새 데이터를 넣고 화면 갱신
        state.push({ name: inputValue, score: 0 });
        render(); 
      }
    }
  });

  // 5. 최초 호출 시 렌더링을 한 번 실행하여 초기 화면을 띄움
  render();
}

/**
 * [자식 컴포넌트] CityItem
 * - 컴포넌트(UI 조각) 역할을 하는 함수이므로 첫 글자를 대문자로 작성합니다. (PascalCase 관례)
 * - 부모로부터 item 데이터를 전달받아(Props) HTML 문자열을 뱉어냅니다.
 */
function CityItem(item) {
  return `<li> ${item.name}(${item.score})</li>
     <button class="like-btn" data-name="${item.name}">좋아요!!</button>`;
}

// 최종적으로 루트 요소($app)를 넘기며 앱 실행!
// (new 없이 일반 함수로 호출하여 내부 로직들을 세팅합니다. - 클로저 적용)
CityList($app);

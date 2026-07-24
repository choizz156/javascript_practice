export default function App($app) {
  let state = {
    currentPage: "/",
  };
  const render = () => {
    $app.innerHTML = `
            <div>
                <h1>Trip Wiki 에 오신 것을 환영합니다!</h1>
                <h2>현재 주소는: ${state.currentPage} 입니다.</h2>

                <button class="nav-btn" data-path="/seoul">서울로 가기</button>
                <button class="nav-btn" data-path="/jeju">제주로 가기</button>
            </div>
        `;
  };

  $app.addEventListener("click", (e) => {
    if (e.target.className === "nav-btn") {
      const path = e.target.dataset.path;

      // [마법의 주문] 브라우저 주소창을 path로 쓱 바꿉니다! (절대 새로고침 안 됨)
      history.pushState(null, null, path);

      state.currentPage = path;
      render();
    }
  });

  window.addEventListener("popstate", () => {
    state.currentPage = window.location.pathname;
    render();
  });

  render();
}

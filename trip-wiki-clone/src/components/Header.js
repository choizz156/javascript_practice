export default function Header({ $app, initState }) {
  let state = initState;

  const render = () => {
    $app.innerHTML += `<header><h1>Trip Wiki 헤더입니다</h1></header>`;
  };

  render();
}

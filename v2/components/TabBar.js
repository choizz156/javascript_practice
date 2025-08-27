export default function TabBar({$app, initialState, onClick}) {

  this.state = initialState;
  this.$target = document.createElement('div');
  this.$target.className = 'tab-bar';
  $app.appendChild(this.$target);

  this.onClick = onClick;
  this.template = () => {
    return `<div id="all">전체</div>
       <div id="penguin">펭귄</div><div id="koala">코알라</div><div id="panda">판다</div>`;
  }

  this.render = () => {
    this.$target.innerHTML = this.template();

    let $currTap = document.getElementById(this.state);
    $currTap ? $currTap.className = 'clicked' : '';

    const $tabBar = this.$target.querySelectorAll('div');
    $tabBar.forEach((elm) => {
      elm.addEventListener('click', () => {
        this.onClick(elm.id);
      });
    })
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
};


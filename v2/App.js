import TabBar from './components/TabBar.js';
import Content from './components/Content.js';
import {request} from './components/Api.js'

export default function App($app) {


  this.state = {
    currentTab: window.location.pathname.replace('/v2/', '') || 'all',
    photos: [],
  };

  const tabBar = new TabBar({
    $app,
    initialState: '',
    onClick: async (name) => {
      history.pushState(null, `${name} 사진`, `/v2/${name}`)
      this.updateContent(name);
    }
  });
  const content = new Content({$app, initialState: []});

  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };

  this.updateContent = async (tabName) => {
    console.log(tabName);
    const currentTab = tabName === 'all' ? '' : tabName;
    const photos = await request(currentTab);
    this.setState({
      ...this.state,
      currentTab: tabName,
      photos: photos,
    });
  }
  window.addEventListener('popstate', () => {
    this.updateContent(window.location.pathname.replace('/v2/', '') || 'all');
  });

  const init = async () => {
    this.updateContent(this.state.currentTab);
  }

  init();
}
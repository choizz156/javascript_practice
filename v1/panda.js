const API_URL = 'https://animal-api-two.vercel.app/';
const $content = document.querySelector('div.content');
let template = [];

const getData = async (name) => {
  let res = await fetch(`${API_URL}${name}`);
  try {
    if (res) {
      let data = await res.json();
      data.photos.forEach((elm) => {
        template.push(`<img src="${elm.url}"/>`);
        $content.innerHTML = template
      })
    }
  } catch (error) {
    console.log(error);
  }
};

getData('panda');
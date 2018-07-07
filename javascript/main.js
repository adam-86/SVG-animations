const svgContainer = document.querySelector('.svg-container');

const animation = bodymovin.loadAnimation({
  container: svgContainer,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
});

const svgContainer2 = document.querySelector('.svg-container-2');

const animation2 = bodymovin.loadAnimation({
  container: svgContainer2,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'spinner.json'
});

const svgContainer3 = document.querySelector('.svg-container-3');

const animation3 = bodymovin.loadAnimation({
  container: svgContainer3,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'fish.json'
});

const svgContainer4 = document.querySelector('.svg-container-4');

const animation4 = bodymovin.loadAnimation({
  container: svgContainer4,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'spinner-2.json'
});

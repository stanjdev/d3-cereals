import cerealsTop5 from './js/cerealsTop5.js';
import cerealTopContent from './js/cerealTopContent.js';

async function handleData() {
  const data = await d3.csv('cereal.csv');
  cerealsTop5(data);
  cerealTopContent(data);
};

handleData();

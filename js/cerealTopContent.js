import drawTopContent from './draw/drawTopContent.js';

export default function cerealTopContent(data) {
  const sortedByRating = data.sort((a, b) => b.rating - a.rating);
  const topCereal = sortedByRating.shift();
  const content = [
    {name: 'protein', value: Number(topCereal.protein)},
    {name: 'fat', value: Number(topCereal.fat)},
    {name: 'fiber', value: Number(topCereal.fiber)},
    {name: 'carbo', value: Number(topCereal.carbo)},
    {name: 'sugars', value: Number(topCereal.sugars)},
  ];
  drawTopContent(content);
};


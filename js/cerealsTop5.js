import drawTop5 from './draw/drawTop5.js';

export default function cerealsTop5(data) {
  const sortedByRating = data.sort((a, b) => b.rating - a.rating);
  const top5 = sortedByRating.slice(0, 5);
  drawTop5(top5);
};

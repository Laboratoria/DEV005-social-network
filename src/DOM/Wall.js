import { WallTemplate } from '../templates/wallTemplate.js';

export const Wall = () => {
  const div = document.createElement('div');
  div.innerHTML = WallTemplate;
  return div;
};

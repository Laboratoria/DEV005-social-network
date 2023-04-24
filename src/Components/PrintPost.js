export const printPost = (info) => {
  const p = document.createElement('p');
  p.textContent = info.text;
  return p;
};

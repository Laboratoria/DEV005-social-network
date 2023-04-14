function error() {
  const section = document.createElement('section');
  const img = document.createElement('img')

  img.innerHTML = `
  <img src="https://ouch-cdn2.icons8.com/fw27uy16PJ2XpAN2TXRuFg1uSS6nK5O0HDAzTNwEjbE/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDI5/L2VjYTRiOTVlLWNm/MWUtNDIwMS1iYTAy/LWNlNGNhYTY0MGIz/Yy5wbmc.png">
  alt="error404" ` 

  section.appendChild(img)
  return section;

}

export default error;
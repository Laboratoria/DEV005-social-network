const error = (navigateTo) => {
  const diverror = document.createElement('div');
  diverror.className = 'diverror';
  const imgerror = document.createElement('div');
  imgerror.className = 'imgerror';
  const btnerror = document.createElement('button');
  btnerror.className = 'btnerror';
  const infoerror = document.createElement('div');
  infoerror.className = 'infoerror';

  img.innerHTML = `
  <img src="https://ouch-cdn2.icons8.com/fw27uy16PJ2XpAN2TXRuFg1uSS6nK5O0HDAzTNwEjbE/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDI5/L2VjYTRiOTVlLWNm/MWUtNDIwMS1iYTAy/LWNlNGNhYTY0MGIz/Yy5wbmc.png">
  alt="error404" ` 

  section.appendChild(img)
  return section;

  diverror.append(imgerror, infoerror);
  infoerror.append(messageerror, othermessage, btnerror);
  return diverror;
};

export default error;
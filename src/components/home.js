function home(navigateTo){
  const home_div = document.createElement('div');
  home_div.className = 'home_div';
  const img_home = document.createElement('div');
  img_home.className = 'img_home';
  const buttons_div = document.createElement('div');
  buttons_div.className = 'buttons_div';
  //? botón de email
  const button_email = document.createElement('button');
  button_email.className = 'button_email';
  const icon_email = document.createElement('div');
  icon_email.className = 'icon_email';
  //? botón de google
  const button_google = document.createElement('button');
  button_google.className = 'button_google';
  const icon_google = document.createElement('div');
  icon_google.className = 'icon_google'
  //? botón de twitter
  const button_twitter = document.createElement('button');
  button_twitter.className = 'button_twitter';
  const icon_twitter = document.createElement('div');
  icon_twitter.className = 'icon_twitter'
  //? botón de github
  const button_github = document.createElement('button');
  button_github.className = 'button_github';
  const icon_github = document.createElement('div');
  icon_github.className = 'icon_github'
  //? mensaje
  const mensaje_home = document.createElement('span');
  mensaje_home.className = 'mensaje_home'


  button_email.textContent = 'Continuar con Email';
  button_google.textContent = 'Continuar con Google';
  button_twitter.textContent = 'Continuar con Twitter';
  button_github.textContent = 'Continuar con Github';
  mensaje_home.innerHTML =  ` ¿No tienes una cuenta?
  <strong>Regístrate</strong>`

  home_div.append( img_home, buttons_div, mensaje_home);
  buttons_div.append(button_email, button_google, button_twitter, button_github)
  button_email.appendChild(icon_email)
  button_google.appendChild(icon_google)
  button_twitter.appendChild(icon_twitter)
  button_github.appendChild(icon_github)
  return home_div;
}

export default home;
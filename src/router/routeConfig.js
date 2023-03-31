import ROUTERS from './routers'

const route = (event) => {
  event = event || window.event; // si el evento no existe toma la variable global window
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  locationHandler();
};


const locationHandler = async () => {
  let location = window.location.pathname; //  NOMBRE DE LA PAGINA ACTUAL
  // SI NO HAY UN PATH VA AL HOME
  if (location.length == 0) {
      location ="/";
  }
  const route = ROUTERS[location] || ROUTERS["404"];
  const html = await fetch(route.template).then((response) => response.text());
  document.getElementById("content").innerHTML = html;
  document.title = route.title;
  route.js.map((file) =>
    import(file || "/main.js")
  )

};

window.onpopstate = locationHandler;
window.route = route;
locationHandler();
export const WallTemplate = `

<div class ="wall-template">
    <header class= "wall-header">
      <h1 id="wall-tittle">Sister Voyage</h1>
      <button id="btn-out" class="singOut">Salir</button>
    </header>
    <label for="text" class="cPost">
      <textarea id="iPost" name="textarea" rows="10" cols="50" placeholder="Cuentanos sobre tu viaje..."></textarea>
    </label>
    <button id="btn-post" class="publish">Publicar</button>
    <p id='errorMsj' class='wallErrorMsj'></p>
    <div class="posts"></div>
    <div class="pointsSelec" <FontAwesomeIcon icon="fa-solid fa-ellipsis-stroke-vertical"/>></div>
</div>`;

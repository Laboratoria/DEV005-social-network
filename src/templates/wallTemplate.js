export const WallTemplate = `

<div class ="wall-template">
    <header class= "wall-header">
      <h1 id="wall-tittle">Sister Voyage</h1>
      <button id="btn-out" class="singOut">Salir</button>
    </header>
    <label for="text" class="cPost">
      <textarea id="iPost" name="textarea" rows="10" cols="50" placeholder="Cuentanos sobre tu viaje..."></textarea>
    </label>
    <button id="btn-post" class="publish btn-class">Publicar</button>
    <p id='errorMsj' class='wallErrorMsj'></p>
    <div class="posts"></div>
    <div class="modal-content">
    <p id="answer">¿Segura que quieres eliminar esta publicación?</p>
    <button id="btn-ok" class="publish btn-class">Confirmar</button>
    <button id="btn-cancel" class="publish btn-class">Cancelar</button>
    </div>
</div>`;

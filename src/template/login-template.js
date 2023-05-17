export const loginTemplate = `
<div class="title-login">
  <div class="img-login">
    <img src="../img/Laboratoria-social-network.png">
  </div>
  <div class="title-login-one">
    <h1>Book Reviews<h1>
  </div>
  <div class="text-login">
    <p>Come and recommend us your books!</p>
  </div>
</div>

<div class="form-login">
  <form class="box-form">
      <label class="text-right" for="username" >Username</label>
      <input type="email" name="username" id="username">
      <label class="text-right" for="password" >Password</label>
      <input type="password" name="password" id="password" >
      <label id="statusLogin" class="status-login"></label>
      <button class="buuton-log" id="buuton-log">Log in
      </button>
  </form>
  <div class="box-login-run">
    <figure class="btn-google"><button class="btn-direct"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/250px-Octicons-mark-github.svg.png"></button></figure>
    <figure class="btn-github"><button  class="btn-direct" id="loginGogleBtn"><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"></button></figure>
  </div>
  <div class="create-account-login"><button  id="create-accoun">create new account</button></div>
</div>
`;

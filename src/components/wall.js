// import { collection, addDoc } from 'firebase/firestore';

function wall(navigateTo) {
  const sectionWall = document.createElement('section');
  sectionWall.id = 'wall-section';
  const welcomeMsg = document.createElement('h2');
  welcomeMsg.textContent = '¡Bienvenida a KittyBook!';
  const post = document.createElement('textarea');
  post.id = 'textPosts';
  const btnPost = document.createElement('button');
  btnPost.id = 'btn-posts';
  btnPost.type = 'submit';
  btnPost.textContent = 'Publicar';
  btnPost.disabled = true;

  btnPost.addEventListener('onkeypress', () => {
    const postText = post.value;

    if (postText === '') {
      btnPost.disabled = true;
    } else {
      btnPost.disabled = false;
    }
  });
  // const msg = document.createElement('p');
  // msg.textContent = 'Este sitio está en construcción. Esperamos verte pronto';

  // const kittyImage = document.createElement('img');
  // kittyImage.src = '/images/working-cat.png';
  // kittyImage.alt = 'Working kitty';
  // kittyImage.width = 350;
  // kittyImage.height = 270;

  // const docRef = await addDoc(collection(db, "cities"), {
  //   name: "Tokyo",
  //   country: "Japan"
  // });

  const btnReturnH = document.createElement('button');
  btnReturnH.className = 'return';
  btnReturnH.textContent = 'Volver a inicio';
  btnReturnH.addEventListener('click', () => {
    navigateTo('/');
  });

  sectionWall.append(
    welcomeMsg,
    post,
    btnPost,
    // msg,
    btnReturnH,
    //  kittyImage
  );

  return sectionWall;
}

export default wall;

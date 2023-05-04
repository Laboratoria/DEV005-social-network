import wall, {
  likeAPost,
  saveAPost,
  deleteAPost,
  editAPost,
  createModal,
  navigateToLoginAfterLogout,
}
  from '../src/components/wall.js';

describe('likeAPost', () => {
  it('Is a function', () => {
    expect(typeof likeAPost).toBe('function');
  });
  it('Returns a function', () => {
    // data de prueba
    const postId = 1;
    const numLikes = '';
    const heartLike = '';
    // ejecutamos el sujeto y obtenemos el retorno
    const returnedFunction = likeAPost(postId, numLikes, heartLike);
    // validamos que el retorno sea satisfactorio
    expect(typeof returnedFunction).toBe('function');
  });
});

describe('saveAPost', () => {
  it('Is a function', () => {
    expect(typeof saveAPost).toBe('function');
  });
});

describe('deleteAPost', () => {
  it('Is a function', () => {
    expect(typeof deleteAPost).toBe('function');
  });
  it('Returns a function', () => {
    // ejecutamos el sujeto y obtenemos el retorno
    const returnedFunction = deleteAPost();
    // validamos que el retorno sea satisfactorio
    expect(typeof returnedFunction).toBe('function');
  });
});
describe('editAPost', () => {
  it('Is a function', () => {
    expect(typeof editAPost).toBe('function');
  });
  it('Returns a function', () => {
    // data de prueba
    const postId = 1;
    const btnEdit = 'div';
    // ejecutamos el sujeto y obtenemos el retorno
    const returnedFunction = editAPost(postId, btnEdit);
    // validamos que el retorno sea satisfactorio
    expect(typeof returnedFunction).toBe('function');
  });
});
describe('createModal', () => {
  it('Is a function', () => {
    expect(typeof createModal).toBe('function');
  });
  it('Returns a function', () => {
    // data de prueba
    const postId = 1;
    const btnEdit = 'div';
    const containerEachPost = 'div';
    // ejecutamos el sujeto y obtenemos el retorno
    const returnedFunction = createModal(postId, btnEdit, containerEachPost);
    // validamos que el retorno sea satisfactorio
    expect(typeof returnedFunction).toBe('function');
  });
});
describe('navigateToLoginAfterLogout', () => {
  it('Is a function', () => {
    expect(typeof navigateToLoginAfterLogout).toBe('function');
  });
  it('Returns a function', () => {
    // data de prueba
    const navigateTo = jest.fn();
    // ejecutamos el sujeto y obtenemos el retorno
    const returnedFunction = navigateToLoginAfterLogout(navigateTo);
    // validamos que el retorno sea satisfactorio
    expect(typeof returnedFunction).toBe('function');
  });
});
describe('wall', () => {
  it('snapshot of wall', () => {
    const DOM = document.createElement('div');
    DOM.append(wall());
    expect(DOM).toMatchSnapshot();
  });
  it('is a function', () => {
    expect(typeof wall).toBe('function');
  });
  it('has a button', () => {
    const DOM = document.createElement('div');
    DOM.append(wall());
    const haveAButton = DOM.querySelector('btn-post');
    // espero que haveAButton no sea undefined
    expect(haveAButton).not.toBe('undefined');
  });
  it('has a form', () => {
    const DOM = document.createElement('form');
    DOM.append(wall());
    const formPost = DOM.querySelector('form-post');
    // espero que formPost exista
    expect(formPost).not.toBe('undefined');
  });
});

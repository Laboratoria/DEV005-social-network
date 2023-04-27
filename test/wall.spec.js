import {
  likeAPost,
  saveAPost,
  deleteAPost,
  editAPost,
  createModal,
  navigateToLoginAfterLogout,
}
  from '../src/components/wall.js';

// import { getOnePost } from '../src/lib/posting';
describe('likeAPost', () => {
  it('Is a function', () => {
    expect(typeof likeAPost).toBe('function');
  });
  it('Returns a function', () => {
    // data de prueba
    const postId = -1;
    const numLikes = [];
    const heartLike = {};
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
  it('Returns a function', () => {
    // ejecutamos el sujeto y obtenemos el retorno
    const returnedFunction = saveAPost();
    // validamos que el retorno sea satisfactorio
    expect(typeof returnedFunction).toBe('function');
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
    const postId = -1;
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
    const postId = -1;
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

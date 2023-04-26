import { likeAPost } from '../src/components/wall';
import { getOnePost } from '../src/lib/posting';

// describe('likeAPost', () => {
//   it('Is a function', () => {
//     expect(typeof likeAPost).toBe('function');
//   });
//   jest.mock('../src/lib/posting.js', () => ({
//     getOnePost: jest.fn(),
//   }));
//   const postIdMock = '123456789';
//   // Crear un objeto de evento simulado para el submit del formulario
//   const eventMock = {
//     preventDefault: jest.fn(),
//   };

//   it('should call getOnePost with postId', async () => {
//     const handleLikeAPost = likeAPost(postIdMock);
//     await handleLikeAPost(eventMock);
//     expect(getOnePost).toHaveBeenCalledWith(postIdMock);
//   });
// });

// Mock de la función getOnePost
jest.mock('../src/lib/posting.js', () => ({
  getOnePost: jest.fn(),
}));

describe('likeAPost', () => {
  let numLikes;
  let heartLike;

  beforeEach(() => {
    // Crear los elementos de prueba
    numLikes = document.createElement('span');
    heartLike = document.createElement('button');
  });

  afterEach(() => {
    // Limpiar los mocks después de cada prueba
    jest.clearAllMocks();
  });

  it('should call getOnePost with postId', async () => {
    const postId = 'abc123';
    const handleLikeAPost = likeAPost(postId, numLikes, heartLike);
    const event = { preventDefault: jest.fn() };

    // Llamar a la función handleLikeAPost
    await handleLikeAPost(event);

    // Verificar que getOnePost fue llamada con postId
    expect(getOnePost).toHaveBeenCalledWith(postId);
  });
});

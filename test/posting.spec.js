import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { savePost } from '../src/lib/posting.js';

// Mocks de las dependencias
jest.mock('firebase/auth');
jest.mock('firebase/firestore');
describe('savePost', () => {
  it('should save post', async () => {
  // Crear objetos ficticios para simular el comportamiento de las dependencias
    const textPost = { value: 'Test post' };
    const email = 'test@example.com';
    const mockAuth = { currentUser: { email } };
    const mockCollection = { id: 'posts' };
    const mockDoc = { id: 'mockDocId' };

    // Configurar los mocks
    getAuth.mockReturnValue(mockAuth);
    collection.mockReturnValue(mockCollection);
    addDoc.mockResolvedValue(mockDoc);

    // Llamar a la función savePost
    await savePost(textPost);

    // Verificar si las dependencias se llamaron correctamente
    expect(getAuth).toHaveBeenCalledTimes(1);
    expect(collection).toHaveBeenCalledWith(getFirestore(), 'posts');
    expect(addDoc).toHaveBeenCalledWith(mockCollection, {
      text: textPost.value,
      author: email,
      likes: [],
    });
  });
});

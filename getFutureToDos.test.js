import { getFutureToDos } from './getFutureToDos';

describe('getFutureToDos', () => {
  const fakeApi = { fetchToDos: jest.fn() };

  afterEach(() => {
    fakeApi.fetchToDos.mockReset();
  });

  test('api returns only future todos', async () => {
    // Given
    fakeApi.fetchToDos.mockResolvedValue([
      { task: 'Make bed', due: new Date(2009, 5, 5) },
      { task: 'Clean room', due: new Date(3000, 5, 5) }
    ]);

  // When (ACT) (When a user does this action)
    const actual = await getFutureToDos(fakeApi);

  // Then (ASSERT) (Expect this to work)
    expect(actual).toEqual([
      { task: 'Clean room', due: new Date(3000, 5, 5) }
    ]);
  });

  test('that [an empty array] is returned when todos are in the past', async () => {
    // Given
    fakeApi.fetchToDos.mockResolvedValue([
      { task: 'Make bed', due: new Date(2009, 5, 5) },
      { task: 'Clean room', due: new Date(2010, 5, 5) }
    ]);

  // When (ACT) (When a user does this action)
    const actual = await getFutureToDos(fakeApi);

  // Then (ASSERT) (Expect this to work)
    expect(actual).toEqual([]);
  });

  test('that [] is returned when theres no todos', async () => {
    fakeApi.fetchToDos.mockResolvedValue([]);

  // When (ACT) (When a user does this action)
    const actual = await getFutureToDos(fakeApi);

  // Then (ASSERT) (Expect this to work)
    expect(actual).toEqual([]);
  });

  test('that the functions rejects if the API throws an error', async () => {
    fakeApi.fetchToDos.mockImplementation(() => )
    
    // When (ACT) (When a user does this action)
    const actual = await getFutureToDos(fakeApi);

  // Then (ASSERT) (Expect this to work)
    expect(actual).toThrow();
  });
});
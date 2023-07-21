const getFutureToDos = async function (api) {
  const todos = await api.fetchToDos();
  return todos.filter((todo) => todo.due > new Date());
};

export { getFutureToDos };
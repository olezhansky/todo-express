// const getTodos = () => {
//   return fetch('https://jsonplaceholder.typicode.com/todos?_limit=5').then(
//     (response) => response.json()
//   );
// };

// export default getTodos;

const getTodos = () => {
  return fetch('http://localhost:4000/api/todos').then((response) =>
    response.json()
  );
};

export default getTodos;

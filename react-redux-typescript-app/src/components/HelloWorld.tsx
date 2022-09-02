// functional component

/// function declaration
// export function HelloWorld() {
//     return <h1>Hello, World!</h1>;
// }

// function expression
// export const HelloWorld = function() {
//     return <h1>Hello, World!</h1>;
// };

// arrow function
// named export
export const HelloWorld = () => {
  // React.createElement('div', null,
  //   React.createElement('h1', null, 'Hello, World!'),
  //   React.createElement('span', null, 'test'));
  return <>
    <h1>Hello, World!</h1>
    <span>test</span>
  </>;
};

// default export
// export default HelloWorld;
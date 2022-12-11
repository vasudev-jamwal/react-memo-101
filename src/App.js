import React from "react";

export function App(props) {
  const [a, setA] = React.useState({ key: 0 });

  const incrementA = () => setA({ key: a.key + 1 });

  const firstA = React.useMemo(() => a, []);
  const refreshedA = React.useMemo(() => a, [a]);

  const print = React.useCallback(() => console.log(a), []);

  // This one is always reffering to the state that the first render,
  // it has closure over that instance

  const updateMemo = React.useCallback(() => setA({ key: a.key + 1 }), [setA]);

  const updateMemoUsingFunction = React.useCallback(
    () => setA((a) => ({ key: a.key + 1 })),
    [setA]
  );

  return (
    <div className="App">
      <h1>Hello React.</h1>
      <p>{`${a.key} ${firstA.key} ${refreshedA.key}`}</p>
      <button
        onClick={() => {
          incrementA();
        }}
      >
        Click1
      </button>
      <button
        onClick={() => {
          print();
        }}
      >
        Click2
      </button>
      <button
        onClick={() => {
          updateMemo();
        }}
      >
        Click3
      </button>
      <button
        onClick={() => {
          updateMemoUsingFunction();
        }}
      >
        Click3
      </button>
    </div>
  );
}

// Log to console
console.log("Hello console");

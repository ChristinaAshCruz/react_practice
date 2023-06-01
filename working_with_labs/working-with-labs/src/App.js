import { useState, useEffect } from "react";
import "./App.css";

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
};

const App = () => {
  // const name = null;
  const [counter, setCounter] = useState(0);

  // a useEffect takes in 2 parameters
  useEffect(() => {
    // this allows us to control an effect
    // everything in the first paramater happens onLoad
    // setCounter(100);
    alert("You've changed the counter to " + counter);
  }, [
    // everything here happens after Load
    counter,
  ]);

  return (
    <div className="App">
      <Person name={"Johnny"} lastName={"Doe"} age={50} />
      {/* for your event, add your callback function inside the brackets */}
      {/* with your callback function, you can now manipulate your counter variable */}
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
};

export default App;

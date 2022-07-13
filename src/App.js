import { useState, useEffect } from "react";
import Box from "./box";
import "./App.css";

const App = () => {
  const [user, setUser] = useState("Steve");

  // const useState = (initialVal) => {
  //   let state = initialVal;

  //   const setState = (newVal) => {
  //     state = newVal;
  //   }

  //   return [state, setState];
  // }

  return (
    <div className="App">
      <Box name={user} />
      <Box name="Gary" />
      <Box name="Clive" />
      <Box name="Kevin" />
      <input onChange={(event) => setUser(event.target.value)} />
      {user && <Box name="Tony" />}
      {user ? <Box name="Jeff" /> : <Box name="Not Jeff" />}

      {/* line 25 is an if statement while line 26 is an if else statement */}
    </div>
  );
};

export default App;

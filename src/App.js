import { useState, useEffect } from "react";
import Box from "./box";
import "./App.css";

const App = () => {
  const [user, setUser] = useState("Steve");
  const [photos, setPhotos] = useState([]);

  const arr = [{ name: "Steve" }, { name: "Gary" }, { name: "Tony" }];

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
  };

  useEffect(() => {
    fetchImages();
  }, [user]); //every time user's value changes, useEffect will run again

  // for(let i = 0; i < arr.length;) i++) {
  //   console.log(arr[i]);
  // };

  // arr.map((item, index) => {
  //   console.log(item.name)
  // })
  // code on line 21 to 22 will achieve the same thing as code on line 25 to 26
  // the later code allows us to take objects that are similar i.e same structure
  // but different values then feed them into our functional componemts.

  // const useState = (initialVal) => {
  //   let state = initialVal;

  //   const setState = (newVal) => {
  //     state = newVal;
  //   }

  //   return [state, setState];
  // }

  return (
    <div className="App">
      {photos.map((item, index) => {
        return (
          <div>
            <h2>item.author</h2>
            <img src={item.download_url} />
          </div>
        );
      })}
      {/* <Box name={user} />
      {arr.map((item, i) => {
        return (
          <div>
            <Box name={item.name} />
          </div>
        );
      })}
      <input onChange={(event) => setUser(event.target.value)} />
      {user && <Box name="Tony" />}
      {user ? <Box name="Jeff" /> : <Box name="Not Jeff" />} */}
    </div>
  );
};

export default App;

import { useState, useEffect } from "react";
import Image from "./components/image";
import SignOrLog from "./components/signOrLog";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
  };

  useEffect(() => {
    fetchImages();
  }, []); //every time user's value changes, useEffect will run again

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
      <SignOrLog setter={setUser} />
      <h1>{user}</h1>
      {photos.map((item, i) => {
        return <Image key={i} author={item.author} url={item.download_url} />;
      })}
    </div>
  );
};

export default App;

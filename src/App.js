import React from "react";
import "./App.css";
import MyComp from "./components/MyComp";

function App() {
  function onClickHandle() {
    console.log("I am clicked");
  }
  return (
    <div className="App">
      <header className="App-header">
        <MyComp
          onClick={onClickHandle}
          str="Hi"
          obj={{ name: "john"}}
        ></MyComp>
      </header>
    </div>
  );
}

export default App;

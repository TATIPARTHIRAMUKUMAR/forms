import { useState } from "react";
import "./App.css";
import background from "./Assets/background.jpg";
import Form from "./Components/Form";

function App() {
  const [showthankyou,setshowthankyou]=useState(true)
  return (
    <div className="App">
      {showthankyou ? (
        <>
      <div className="AppHeader">
        <div className="AppHeaderText">March 27,2023</div>
      </div>
      <div
        className="AppBody"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Form setshowthankyou={setshowthankyou}/>
      </div>
      </>
      ):(
        <div className="text1">Thank you for submission!</div>
      )}
    </div>
  );
}

export default App;

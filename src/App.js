import "./App.css";
import background from "./Assets/background.jpg";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <div className="AppHeader">
        <div className="AppHeaderText">March 27,2023</div>
      </div>
      <div
        className="AppBody"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Form />
      </div>
    </div>
  );
}

export default App;

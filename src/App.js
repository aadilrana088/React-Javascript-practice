import "./App.css"
import Display from "./components/Display";
import UseCallback from "./components/UseCallback";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";
import UseState from "./components/UseState";
const App = () => {
    return <div className="App">
      <UseState />
      <UseEffect />
      <Display />
      <UseCallback />
      <UseReducer />
    </div>;
};

export default App;

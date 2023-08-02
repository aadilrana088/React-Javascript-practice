import "./App.css";
import BetaApp from "./beta/BetaApp";
// import Display from "./components/Display";
// import UseCallback from "./components/UseCallback";
// import UseEffect from "./components/UseEffect";
// import UseReducer from "./components/UseReducer";
// import UseState from "./components/UseState";
const App = () => {
    return (
        <div className="App">
            {/* <div className="normal">
                <UseState />
                <UseEffect />
                <Display />
                <UseCallback />
                <UseReducer />
            </div> */}
            <div className="beta">
              <BetaApp />
            </div>
        </div>
    );
};

export default App;

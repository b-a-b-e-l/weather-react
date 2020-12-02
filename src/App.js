import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather</h1>
      </header>
      <div className="contains-weather">
        <Weather />
      </div>
    </div>
  );
}

export default App;

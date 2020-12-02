import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather</h1>
      </header>
      <body>
        <div className="contains-weather">
          <Weather />
        </div>
      </body>
      <footer>
        <a href="https://github.com/b-a-b-e-l/weather-react">
          Open Source Code
        </a>{" "}
        by Belén Bednarski{" "}
      </footer>
    </div>
  );
}

export default App;

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="intro-title">How's the weather in...</h1>
        </header>

        <div className="contains-weather">
          <Weather />
        </div>

        <footer>
          <p className="footer-link">
            <a
              href="https://github.com/b-a-b-e-l/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Source Code{" "}
            </a>
            by Belén Bednarski
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

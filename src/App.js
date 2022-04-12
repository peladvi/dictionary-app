import "./App.css";
import Search from "./Search.js";
import background from "./nature.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <section style={{ background: `url(${background})` }}>
          <Search />
        </section>
        <footer>
          <a
            href="https://github.com/peladvi/dictionary-app"
            rel="noreferrer"
            target="_blank"
          >
            Open-source code
          </a>
          , by Paula Ladwiniec
        </footer>
      </div>
    </div>
  );
}

export default App;

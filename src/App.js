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
          Coded by{" "}
          <a href="https://github.com/peladvi/dictionary-app">
            Paula Ladwiniec
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

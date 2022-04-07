import "./App.css";
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <section>
          <header className="App-header">Hello from Dictionary 🙋‍♀️</header>
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

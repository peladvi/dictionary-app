import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  let [keyword, setKeyword] = useState("nature");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function showKeword() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchFor(event) {
    event.preventDefault();
    showKeword();
  }

  function handleSubmit(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    showKeword();
  }
  if (loaded) {
    return (
      <div className="Search">
        {" "}
        <section>
          <form onSubmit={searchFor}>
            <input type="search" onChange={handleSubmit} />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function searchFor(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      {" "}
      <form onSubmit={searchFor}>
        <input type="search" onChange={handleSubmit} />
      </form>
      <Results results={results} />
    </div>
  );
}

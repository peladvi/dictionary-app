import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Search() {
  let [keyword, setKeyword] = useState("summit");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePhotos(response) {
    setPhotos(response.data.photos);
  }
  function showKeword() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000012bbc8ccf266e4a1ea192374d67a159a2";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePhotos);
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
          <p> Type any word you like</p>
          <form onSubmit={searchFor}>
            <input
              type="search"
              onChange={handleSubmit}
              defaultValue="summit"
            />{" "}
          </form>
          <small>suggested words: lake, forest, nature, leaf etc. </small>
        </section>
        <Photos photos={photos} />
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

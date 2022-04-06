import React, { useState } from "react";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleSubmit(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      {" "}
      <form onSubmit={search}>
        <input type="search" onChange={handleSubmit} />
      </form>
    </div>
  );
}

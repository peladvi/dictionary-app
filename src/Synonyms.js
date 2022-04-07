import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <ul key={index}>{synonym}</ul>;
        })}
      </div>
    );
  } else {
    return null;
  }
}

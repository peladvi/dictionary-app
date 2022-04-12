import React from "react";
import "./Phonetic.css";
import icon from "./headphones.svg";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        {props.phonetic.text}
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <img src={icon} className="icon" alt="listen" />
        </a>
      </div>
    );
  } else {
    return <div className="Phonetic">{props.phonetic.text}</div>;
  }
}

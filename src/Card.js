import React from "react";
import "./Card.sass"

function Card(props) {
  return (
    <div className="card">
      <p>{props.Name}</p>
      <p>{props.Released.slice(0, 4)}</p>
      <p>{props.Platform}</p>
      <span>
        {props.Remastered.isRemastered ? (
          <a href={props.Remastered.Link} target="_blank" rel="noreferrer">Remaster</a>
        ) : null}
      </span>
      <p>{props.isPurchased ? `purchased: Yes` : null}</p>
    </div>
  );
}

export default Card;

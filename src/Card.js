import React from "react";

function Card(props) {
  return (
    <div>
      <p>{props.Name}</p>
      <p>{props.Released.slice(0, 4)}</p>
      <p>{props.Platform}</p>
      <span>
        {props.Remastered.isRemastered ? (
          <a href={props.Remastered.Link}>Remaster</a>
        ) : null}
      </span>
      <p>{props.isPurchased ? `purchased: Yes` : null}</p>
    </div>
  );
}

export default Card;

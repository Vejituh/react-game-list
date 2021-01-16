import React from "react";
import "./Card.sass";

function Card(props) {
    function isPurchased() {
        return props.isPurchased? "rest-content purchased-width" : "rest-content full-width"
    }

  return (
    <div className="card">
      {props.isPurchased ? (
        <div className="purchased">
          <span></span>
        </div>
      ) : null}
      <div className={isPurchased()}>
        <p>{props.Name}</p>
        <div>
          <p>{props.Released.slice(0, 4)}</p>
          <p>{props.Platform}</p>
        </div>
        <span>
          {props.Remastered.isRemastered ? (
            <a href={props.Remastered.Link} target="_blank" rel="noreferrer">
              Remaster
            </a>
          ) : null}
        </span>
      </div>
    </div>
  );
}

export default Card;

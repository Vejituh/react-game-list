import React, { useState, useEffect } from "react";
import Card from "./Card";

function Input(props) {
  const [name, setName] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    function loop() {
      const gamesList = Object.entries(props);
      if (name.length > 0) {
        setGames("");
        for (let game of gamesList) {
          if (game[1].Name.toLowerCase().includes(name.toLowerCase())) {
            setGames((oldGames) => [...oldGames, game]);
          }
        }
      } else {
        setGames(gamesList);
      }
    }
    loop();
  }, [name, props]);

  function handleChange(e) {
    let value = e.target.value;
    setName(value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={name}></input>
      {games.length > 0
        ? games.map((game) => {
            return (
              <div key={game[0]}>
                <Card {...game[1]} />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Input;

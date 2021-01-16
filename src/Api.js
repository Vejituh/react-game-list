import React, { useState, useEffect } from "react";
import Input from "./Input"
import "./Api.sass"

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      const response = await fetch(
        "https://raw.githubusercontent.com/rafaelg1402/react-game-list/main/games.json"
      );
      const fetchedGames = await response.json(response);
      sortGames(fetchedGames);
      setData(fetchedGames);
    }
    fetchGames();
  }, []);

  const sortGames = (object) => {
    let cmp = function (a, b) {
      if (a > b) return +1;
      if (a < b) return -1;
      return 0;
    };
    object.sort((a, b) => {
      return cmp(a.Released, b.Released) || cmp(a.Name, b.Name);
    });
  };

  return <div className="container">
      <Input {...data}/>
  </div>
}

export default Api;

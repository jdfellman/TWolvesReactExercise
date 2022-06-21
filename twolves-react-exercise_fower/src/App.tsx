import React, {useState, useEffect} from 'react';
import { Box } from "@fower/react";
import { styled }  from "@fower/styled"

const Input = styled("input");

interface Player {
  id: number;
  name: {
      first: string; //optional in case we ever get a player like Nene again
      last: string;
  };
  stats: {
      gamesPlayed: number;
      points: number;
      rebounds: number;
      assists: number;
  };
  vitals: {
      height: string;
      weight: number;
      age: number;
      yearsPro: number;
      country: "USA";
      jerseyNumber: number;
      position: string
  }
}

function App() {
  const[filter, setFilter] = useState("");
  const [allPlayers, setAllPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetch('/players.json')
      .then (resp => 
        resp.json()
      )
      .then ((players: Player[]) => setAllPlayers(players))
  }, []);

  const lcFilterText = filter.toLocaleLowerCase();
  const players = allPlayers.filter(({name: {first}}) =>
    first.toLowerCase().includes(lcFilterText)
  ).slice(0,30);

  //retrun template
  return (
    <Box p-10 maxW-1200 m="auto">
      <Input
        p-5 
        text4XL 
        border-1 
        rounded 
        borderGray500 
        w="100%" 
        value={filter}
        onChange={(evt) => setFilter(evt.target.value)}
      /> 
      <Box>
        {players.map((player) =>(
          <Box key={player.id}>{player.name.first}</Box>
        ))}
      </Box>
      </Box>
  )
}

export default App;

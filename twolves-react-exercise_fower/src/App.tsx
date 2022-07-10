import React, {useCallback, useEffect} from 'react';
import { Box } from "@fower/react";
import { styled}  from "@fower/styled"

import usePlayer from './usePlayer';
import { count } from 'console';
import { Player } from './model/Player';
const Input = styled("input");

function App() {
  
  const{filter, setFilter, players} = usePlayer()

  useEffect(()=> {
    console.log('setFilter changed');
  }, [setFilter]);

  const onSetFilter = useCallback((evt: any) => setFilter(evt.target.value),[setFilter,])

  //retrun template
  return (

    <Box p-10 maxW-1200 m="auto">
     Search
      <Input
        p-5 
        text4XL 
        border-1 
        rounded 
        borderGray500  
        w="100%" 
        value={filter}
        onChange={onSetFilter}
      /> 
      <Box grid gridTemplateColumns-2--md ridTemplateColumns-1--sm gap-10 mt-10>
        {players.map((player) =>(
          <Box key={player.id} 
            p-10 
            border-1 
            borderBlueGray500 
            rounded
            grid
            gridTemplateColumns-2
            gap-10
          >
            <Box as='img' src= {`/player-staff-images/${player.name.first.toLowerCase()}_${player.name.last.toLowerCase()}.png`} width="100%"></Box>
            <Box>
               <Box textLG fontBold>{player.name.first} {player.name.last} | {`#${player.vitals.jerseyNumber}`}</Box>
              <Box border-1 rounded borderBlack grid gridTemplateColumns-2 gap-10 mt-10 >
                {Object.keys(player.stats).map(k=> (
                  <React.Fragment key = {k} >
                    <Box fontBold ml-5>
                      {k}
                    </Box>
                    <Box>
                      {player.stats[k as keyof Player["stats"]]}
                    </Box>
                  </React.Fragment>
               
                ))}
              </Box>
            </Box>
            </Box>
        ))}
      </Box>
      </Box>
  )
}

export default App;

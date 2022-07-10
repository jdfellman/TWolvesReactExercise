import { useEffect, useState, useMemo} from "react";
import { Player } from "./model/Player";

export default function usePlayer(): {
    players: Player[]
    filter: string;
    setFilter: (filter: string | ((filter: string) => string)) => void
  } {
    const [filter, setFilter] = useState("");
    const[allPlayers, setAllPlayers] = useState<Player[]>([]);

    useEffect(() => {
        fetch('/players.json')
            .then (resp => resp.json())
            .then ((players: Player[]) => setAllPlayers(players))
    }, []);

    const players = useMemo(()=>{
        const lcFilter = filter.toLocaleLowerCase();
        return allPlayers.filter(({name: {first}}) =>
            first.toLowerCase().includes(lcFilter)
        ).slice(0,30);
    }, [filter, allPlayers])


  return {
    players,
    filter,
    setFilter
  }
}
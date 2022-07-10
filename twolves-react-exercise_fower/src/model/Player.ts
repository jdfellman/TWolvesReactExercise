export interface Player {
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
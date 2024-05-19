import { players } from "../../assets/data/players"
import PlayerCard from "./PlayerCard"

const PlayerList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-[30px] lg:mt-[50px]">
            {players.map((player) => (
                <PlayerCard key={player.id} player={player} />
            ))}
        </div>
    )
}

export default PlayerList
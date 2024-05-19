/* eslint-disable no-unused-vars */
import PlayerCard from "../../components/Players/PlayerCard.jsx";
import { players } from "../../assets/data/players.js";
import {BiSearch} from "react-icons/bi";

const Players = () => {
  return(
    <>
    <section className="py-12 bg-whiteColor">
      <div className="container text-center">
        <h2 className="heading">Find Best Players</h2>
        <div className="relative max-w-[570px] mx-auto bg-gray-200 h-[60px] mt-[2rem] rounded-md flex items-center justify-between border border-gray-300">
          <BiSearch className="ml-6 text-[1.5rem] text-black"/>
          <input type="search" className="py-4 pl-6 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-gray-400" placeholder="Search Players" />
          <button className="bg-primaryColor text-white px-8 py-4 right-0 absolute  rounded-r-md mt-0"><span className="text-[19px] text-[700]">Search</span></button>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
      <div className="flex flex-wrap justify-center gap-6">
            {players.map((player) => (
                <PlayerCard key={player.id} player={player} />
            ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Players;
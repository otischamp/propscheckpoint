import Player from "./Player.js";
import PlayerData from "./players.json";

export default function PlayerList () {
{/* //////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  MAP FUNCTION /////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}




    let profileData = PlayerData.map(el => {
        return <Player 
                    playerName = {el.name}
                    playerTeam = {el.team}
                    playerNation = {el.nation}
                    playerNumber = {el.number}
                    playerAge = {el.age}
                    playerImg = {el.imgURL}
        />
    })


{/* //////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  RETURN SECTION /////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}

return(
    <div className='row p-3 flex d-flex flex-row' style={{ justifyContent: 'space-between' }}>
    {profileData}
    </div>
)
   
    

}
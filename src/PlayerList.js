import Player from "./Player.js";
import PlayerData from "./players.json";

export default function PlayerList () {
    
return(
    <div className='row p-3 flex d-flex flex-row' style={{ justifyContent: 'space-between' }}>
    
    <Player name={PlayerData.player1.name} team={PlayerData.player1.team} nationality={PlayerData.player1.nationality} age={PlayerData.player1.age} shirtNumber={PlayerData.player1.shirtNumber} imgUrl={PlayerData.player1.imgUrl}/>
    
    <Player name={PlayerData.player3.name} team={PlayerData.player2.team} nationality={PlayerData.player2.nationality} age={PlayerData.player2.age} shirtNumber={PlayerData.player2.shirtNumber} imgUrl={PlayerData.player2.imgUrl}/>
    
    <Player name={PlayerData.player3.name} team={PlayerData.player3.team} nationality={PlayerData.player3.nationality} age={PlayerData.player3.age} shirtNumber={PlayerData.player3.shirtNumber} imgUrl={PlayerData.player3.imgUrl}/>
    
    <Player name={PlayerData.player4.name} team={PlayerData.player4.team} nationality={PlayerData.player4.nationality} age={PlayerData.player4.age} shirtNumber={PlayerData.player4.shirtNumber} imgUrl={PlayerData.player4.imgUrl}/>
    
    </div>
)
   
    

}
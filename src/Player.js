import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default function Player ({playerName, playerTeam, playerNation, playerNumber, playerAge, playerImg}) {
    return (
        
        
        <Card className='bg-danger' style={{ width: '18rem' }}>
        <Card.Body className='bg-success'>
          <Card.Title>{playerName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Team: {playerTeam}</Card.Subtitle>
          <Card.Text>
          Nationality: {playerNation}<br/>
          Shirt Number: {playerNumber}<br/>
          Age: {playerAge}
          </Card.Text>
          <img src={playerImg} style={{width:"100%"}}></img>
          </Card.Body>
      </Card>
        
        
    )

}
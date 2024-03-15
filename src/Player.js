import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default function Player (props) {
    return (
        
        
        <Card className='bg-danger' style={{ width: '18rem' }}>
        <Card.Body className='bg-success'>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Team: {props.team}</Card.Subtitle>
          <Card.Text>
          Nationality: {props.nationality}<br/>
          Shirt Number: {props.shirtNumber}<br/>
          Age: {props.age}
          </Card.Text>
          <img src={props.imgUrl} style={{width:"100%"}}></img>
          </Card.Body>
      </Card>
        
        
    )

}
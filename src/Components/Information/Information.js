import React from 'react';
//import { Button, Card } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAd } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Information.css';

const Information = (props) => {

    const {image, name, email, salary} = props.players;

    const  handleAddPlayer = props.handleAddPlayer;


    return (
        <div className="p-3 player-information ">
            <Card className="d-grid gap-1" style={{color: 'black', width: '18rem'}}>
                <Card.Img src={image}/>
                <Card.Body>
                    <Card.Title>
                    {name}
                    </Card.Title>
                    <Card.Title>
                    Email: {email}
                    </Card.Title>
                    <Card.Text>
                    Salary: {salary}
                    </Card.Text>
                    <Button variant="primary" className="main-btn" 
                    onClick = {() => handleAddPlayer(props.players)}>
                    <FontAwesomeIcon icon={faAd} /> Player</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Information;
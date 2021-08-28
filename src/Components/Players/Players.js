import React from 'react';
import './Players.css';
import Cart from '../Cart/Cart';
import Information from '../Information/Information';
import { useState } from 'react';
import { useEffect } from 'react';
import playerFakeData from '../../Data/fakeData.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const Players = () => {

    const [player, setPlayer] = useState([]);

    useEffect(()=>{
        setPlayer(playerFakeData);
        console.log(playerFakeData);
    }, []);

    const [cart, setCart] = useState([]);

    const handleAddPlayer = (player) =>{
        const newCart = [...cart, player];
        setCart(newCart);
    }

    return (
        <div className="player-container">
            <div className="information-container card-group">
            {
                player.map(playerFakeData => <Information
                handleAddPlayer ={handleAddPlayer}
                players = {playerFakeData}
                ></Information>)
                
            }
            </div>
            <div className="cart-container">
                <h2>Rangpur Riders</h2>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Players;
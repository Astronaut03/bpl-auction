import React from 'react';

const Cart = (props) => {

    const cart = props.cart;
    
    
    const nameList = cart.reduce( (list, players) => [...list, players.name], []);

    const totalSalary = cart.reduce((sum, players) => sum + players.salary, 0)

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3>Purchase List</h3>
            <p>Squads: {cart.length}</p>
            <ul>
            {
                nameList.map( (m, idx) => <li key ={idx}>{m}</li>)
            }
            </ul>
            <h5>Total wages: {formatNumber(totalSalary)}</h5>
        </div>
    );
};

export default Cart;
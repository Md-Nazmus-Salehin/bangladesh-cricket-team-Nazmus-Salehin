import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        totalSalary = totalSalary + player.salary;
    }
    
    return (
        <div>
            <h6 className="text-center">total salary : {totalSalary}</h6>
        </div>
    );
};

export default Cart;
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './SuperCoin.css';

const SuperCoin = () => {
    const [superCoins, setSuperCoins] = useState(0); // Initialize with a default value, e.g
    
    // Get cart items from Redux store
    const cartItems = useSelector(state => state.cart.cartItems); // Get cart items globally
    
    // Calculate total amount
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    
    // Update superCoins whenever totalAmount changes
    useEffect(() => {
        if (totalAmount < 100) {
        setSuperCoins(0);
        } else if (totalAmount >= 100 && totalAmount < 200) {
        setSuperCoins(10);
        } else if (totalAmount >= 200 && totalAmount < 300) {
        setSuperCoins(20);
        } else {
        setSuperCoins(30);
        }
    }, [totalAmount]);

    return(
        <div className="super-coins" style={{textAlign:'center'}}>
            <h2 className="super-coins-title">Super Coins</h2>
            <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
        </div>

    );
};

export default SuperCoin;
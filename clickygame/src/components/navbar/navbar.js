import React, { Component } from "react";
import "./navbar.css";

const Navbar = props => {
    return (
        <div className="navbar">
            <div className="">{props.title}</div>
            <div><img className="logo" src={props.logo} /></div>
            <div className="wins-losses"><p>{props.wins}</p><p>|</p><p>{props.losses}</p></div>
            <div className=""><button onClick={() => props.newGame}>New Game</button></div>
        </div>
    )
}

export default Navbar;
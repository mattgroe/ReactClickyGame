import React, { Component } from "react";
import './cards.css';

const Cards = props => {
    return (
        <div className="card" id={props.id} onClick={() => props.checkWin(props.id)}>
            <img className="card-img-top" src={props.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                </div>
        </div>
    )
}


export default Cards;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css';

const Player = (props) => {
    const { name, salary, shirt, image } = props.player;
    const handleAddClub = props.handleAddClub;

    return (
        <div className="text-center d-inline-flex">
            <div className="player mx-3 shadow-lg p-3 mb-5 bg-body rounded">
                <h4>{name}</h4>
                <img className="image" src={image} alt="" />
                <p><small>shirt no: {shirt}</small></p>
                <p>salary: {salary}</p>
                
                <button className="main-button" onClick={() => handleAddClub(props.player)}> <FontAwesomeIcon icon={faPlus} />  Add Club</button>
            </div>
        </div>
    );
};

export default Player;
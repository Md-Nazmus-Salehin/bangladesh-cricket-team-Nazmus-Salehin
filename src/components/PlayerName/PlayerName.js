import React from 'react';

const PlayerName = (props) => {
    const playerName = props.playerName;
    let AddedPlayer = [];
    for (let i = 0; i < playerName.length; i++) {
        const player = playerName[i];
        AddedPlayer = AddedPlayer +  '    ' + player.name;
    }
    return (
        <div>
            <h2 className="text-center">Selected player : ( {playerName.length} )</h2>
            <p className="text-center">Player name : {AddedPlayer}</p>
        </div>
    );
};

export default PlayerName;
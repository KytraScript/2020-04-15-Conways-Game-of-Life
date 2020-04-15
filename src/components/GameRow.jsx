import React, {useState, useEffect} from 'react';
import GameSquare from './GameSquare.jsx';

const GameRow = (props) => {

    let { rowState } = props;

    return (
        <div className={'game-row'}>
            {rowState.map( (item, index) => {
                return <GameSquare squareState={item} key={index}/>
            })}
        </div>
    );
};

export default GameRow;

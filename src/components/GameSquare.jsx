import React, {useState, useEffect} from 'react';

const GameSquare = (props) => {

    let { squareState } = props;

    return (
        <div className={squareState ? 'square alive' : 'square dead'}>

        </div>
    );
};

export default GameSquare;

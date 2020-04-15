import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import GameRow from './components/GameRow.jsx';

const dumbRow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const App = () => {

    let startingBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    const assessBoard = (board) => {
        let nextBoard = new Array(startingBoard.length).fill(0);
        const len = board.length;

        nextBoard = nextBoard.map( () => []);

        console.log(nextBoard);

        for(let i = 0; i < len; i++){
            const prevRow = board[i - 1] || dumbRow;
            const nextRow = board[i + 1] || dumbRow;
            const currRow = board[i];

            for(let j = 0; j < len; j++){

                let aliveAdj = 0;
                aliveAdj += prevRow[j - 1] || 0;
                aliveAdj += prevRow[j] || 0;
                aliveAdj += prevRow[j + 1] || 0;
                aliveAdj += currRow[j - 1] || 0;
                aliveAdj += currRow[j + 1] || 0;
                aliveAdj += nextRow[j - 1] || 0;
                aliveAdj += nextRow[j] || 0;
                aliveAdj += nextRow[j + 1] || 0;

                if(currRow[j]){
                    if(aliveAdj > 3 || aliveAdj < 2){
                        nextBoard[i][j] = 0;
                    } else {
                        nextBoard[i][j] = 1;
                    }
                } else {
                    if(aliveAdj === 3){
                        nextBoard[i][j] = 1
                    } else {
                        nextBoard[i][j] = 0
                    }
                }
            }
        }
        //console.log(nextBoard);
        return nextBoard;
    };



    const [gameState, changeGameState] = useState(startingBoard);
    const [gameEngine] = useState({});

    useEffect( () => {
        gameEngine.x = setTimeout( () => {
            changeGameState(assessBoard(gameState));
        }, 300)
    }, [gameState]);

    return (
        <div className={'game-board'}>
            {gameState.map( (item, index) => {
                return <GameRow rowState={item} key={index}/>
            })}
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

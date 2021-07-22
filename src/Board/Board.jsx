import React, {useState} from 'react';
import './Board.css';

/*
    SETTINGS
*/

const BOARD_SIZE = 15;

const Board = () => {
    const [board, setBoard] = useState(createBoard(BOARD_SIZE));

    return (
        <div>
            <h1>Score: </h1>
            <div className="board">
                {
                    board.map((row, rowIdx) => (
                        <div key={rowIdx} className="row">
                            {
                                row.map((cellValue, cellIdx) => {
                                    return <div key={cellIdx} className="cell"></div>
                                })
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

/*
    - Create a 2d array
    - Each cell will have a value starting from 1
*/
const createBoard = (BOARD_SIZE) => {
    let counter = 1;
    const board = [];

    for (let row = 0; row < BOARD_SIZE; row++) {
        const currentRow = [];
        for (let col = 0; col < BOARD_SIZE; col++) {
            currentRow.push(counter);
            counter++;
        }
        board.push(currentRow);
    }
    console.log(board)
    return board;
};

export default Board;

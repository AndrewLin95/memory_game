import React from 'react';

const Score = ( props ) => {
    const { curScore, bestScore } = props;

    return(
        <div>
            <div>Current Score: {curScore}</div>
            <div>Best Score: {bestScore}</div>
        </div>
    )
}


export default Score;
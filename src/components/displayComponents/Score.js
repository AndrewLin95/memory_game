import React from 'react';

const Score = ( props ) => {
    const { curScore, bestScore } = props;

    return(
        <div id='score'>
            <div id='curScore'>Current Score: {curScore}</div>
            <div id='bestScore'>Best Score: {bestScore}</div>
        </div>
    )
}


export default Score;
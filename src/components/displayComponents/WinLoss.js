import React from 'react';

const WinLoss = (props) => {
    const { win, loss, acknowledgeResult } = props; 

    const renderWinLoss = () =>{
        if (win === 1){
            return(
                <div className='winLoss' onClick={acknowledgeResult}>
                    <div className='winLossText'>
                        <div>Congrats! You win!!</div>
                        <div>Click Anywhere To Reset</div>
                    </div>
                </div>
            )
        } else if (loss === 1){
            return(
                <div className='winLoss' onClick={acknowledgeResult}>
                    <div className='winLossText'>
                        <div>Oops, You Lost!</div>
                        <div>Click Anywhere To Reset</div>
                    </div>
                </div>
            )
        }
    }

    return (
        renderWinLoss()
    )
}

export default WinLoss;
import React from 'react';

const GenerateCards = ( { cards, handlePlayerAction } ) => {

    return (
        <div id='cardPage'>
            {Object.entries(cards).map(([key]) => {
                return (
                    <div key={key} id={key} className='cardDiv' onClick={()=>{handlePlayerAction(key)}}>test</div>
                )
            })
            }
        </div>
    )

}

export default GenerateCards;
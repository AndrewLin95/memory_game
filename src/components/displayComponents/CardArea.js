import React from 'react';

const GenerateCards = ( { cards, handlePlayerAction } ) => {

    return (
        <div id='cardPage'>
            {cards.map((cards) => {
                return (
                    <div key={cards.key} id={cards.key} className='cardDiv' onClick={()=>{handlePlayerAction(cards.key)}}>test {cards.key} {cards.memory}</div>
                )
            })
            }
        </div>
    )

}

export default GenerateCards;
import React from 'react';

const GenerateCards = ( { cards, handlePlayerAction } ) => {

    return (
        <div id='cardPage'>
            {cards.map((cards) => {
                return (
                    <div key={cards.key} id={cards.key} className='cardDiv' onClick={()=>{handlePlayerAction(cards.key)}}>
                        <img src={require(`../../images/${cards.image}.png`)} alt="card visual" width={"100%"} height={"auto"}/>
                    </div>
                )
            })
            }
        </div>
    )

}

export default GenerateCards;
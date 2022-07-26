import React from 'react';

const GenerateCards = ( { cards } ) => {

    return (
        <div id='cardPage'>
            {Object.entries(cards).map((key) => {
                return (
                    <div key={key} className='cardDiv'>test</div>
                )
            })
            }
        </div>
    )

}

export default GenerateCards;
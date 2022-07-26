import React from 'react';

const GenerateCards = ( { cards } ) => {

    return (
        <div id='cardPage'>
            {Object.entries(cards).map(() => {
                return (
                    <div className='cardDiv'>test</div>
                )
            })
            }
        </div>
    )

}

export default GenerateCards;
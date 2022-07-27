import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import GenerateCards from './displayComponents/CardArea';
import SelectDifficulty from './displayComponents/SelectDifficulty';

const Display = () => {
    const [cards, setCards] = useState({});

    const [score, setScore] = useState();

    let difficulty = 4;
    const updateDifficulty = (value) => {
        difficulty = value;
        createCardObject();
    }

    const createCardObject = () => {
        let i = 0;
        let cardObject = {}
        while (i < difficulty){
            let uniqueKey = uniqid();
            cardObject[uniqueKey] = {
                image: `Test ${uniqueKey}`,
                memory: 0,
            };
            i++;
        }
        setCards(cardObject);
        console.log(cardObject);
    }
    
  /*
    1) check win
        1.1) if memory is all 1, update the wins counter
    2) check memory
        2.1) if memory is 0
            2.1.1) update current score + shuffle cards
        2.2) if memory is 1
            2.2.1) display loss + button to confirm loss which restarts board
  */

    const shuffleCards = () => {
        let tempCards = cards;

    }

    const handlePlayerAction = (id) => {
        let tempCards = cards;
        tempCards[id]['memory']++;
        console.log(tempCards);
        setCards(tempCards)
    }

    return(
        <div>
            <GenerateCards cards={cards} handlePlayerAction={handlePlayerAction}/>
            <SelectDifficulty updateDifficulty={updateDifficulty}/>
        </div>
    )
};


export default Display;
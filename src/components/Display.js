import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import GenerateCards from './displayComponents/GenerateCards';
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
    

    return(
        <div>
            <GenerateCards cards={cards}/>
            <SelectDifficulty updateDifficulty={updateDifficulty}/>
        </div>
    )
};


export default Display;
import React, { useState } from 'react';
import uniqid from 'uniqid';
import GenerateCards from './displayComponents/GenerateCards';
import SelectDifficulty from './displayComponents/SelectDifficulty';

const Display = () => {

    const [cards, setCards] = useState({
        card1: 'one',
        card2: 'two',
        card3: 'three',
        card4: 'four'
    });

    const [score, setScore] = useState();



    return(
        <div>
            <GenerateCards cards={cards}/>
            <SelectDifficulty/>
        </div>
    )
};


export default Display;
import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import GenerateCards from './displayComponents/CardArea';
import SelectDifficulty from './displayComponents/SelectDifficulty';

const Display = () => {
    const [cards, setCards] = useState([]);

    const [score, setScore] = useState();

    let difficulty = 4;
    const updateDifficulty = (value) => {
        difficulty = value;
        createCardArray();
    }

    const createCardArray = () => {
        let i = 0;
        let cardArray = []
        while (i < difficulty){
            let uniqueKey = uniqid();
            cardArray[i] = {
                key: uniqueKey,
                image: `test ${i}`,
                memory: 0
            }
            i++;
        }
        setCards(cardArray);
        console.log(cardArray);
    }

    useEffect(() => {
        const loadCards = () => {
            setCards(shuffleCards(cards));
        }
        loadCards();
        console.log('test');
    }, [cards])

  /*
    1) check win
        1.1) if memory is all 1, update the wins counter
    2) check memory
        2.1) if memory is 0
            2.1.1) update current score + shuffle cards
        2.2) if memory is 1
            2.2.1) display loss + button to confirm loss which restarts board
  */

    const shuffleCards = (tempCards) => {
        let currentIndex = tempCards.length, randomIndex;

        while (currentIndex !== 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [tempCards[currentIndex], tempCards[randomIndex]] = [tempCards[randomIndex], tempCards[currentIndex]];
        }
        return tempCards;
    }

    const handlePlayerAction = (uniqueID) => {
        let tempCards = cards;
        tempCards[tempCards.findIndex((array)=> array.key === uniqueID)]['memory']++;
        setCards(tempCards);
        console.log(cards);
    }

    return(
        <div>
            <GenerateCards cards={cards} handlePlayerAction={handlePlayerAction}/>
            <SelectDifficulty updateDifficulty={updateDifficulty}/>
            <button>Test</button>
        </div>
    )
};


export default Display;
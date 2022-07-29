import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import GenerateCards from './displayComponents/CardArea';
import SelectDifficulty from './displayComponents/SelectDifficulty';
import Score from './displayComponents/Score';

const Display = () => {
    const [cards, setCards] = useState([]);
    const [curScore, setCurScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [difficulty, setDifficulty] = useState();

    const updateDifficulty = (value) => {
        setDifficulty(value);
        setCurScore(0);
        createCardArray(value);
    }

    const createCardArray = (size) => {
        let i = 0;
        let cardArray = []
        while (i < size){
            let uniqueKey = uniqid();
            cardArray[i] = {
                key: uniqueKey,
                image: i,
                memory: 0
            }
            i++;
        }
        setCards(shuffleCards(cardArray));
        console.log(cardArray);
    }

    useEffect(() => {
        updateDifficulty(4);
        console.log('useEffect');
    }, [])

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
    
        if (tempCards[tempCards.findIndex((array)=> array.key === uniqueID)].memory === 1){
            if (curScore > bestScore){
                setBestScore(curScore);
            } 
            resetBoard();
        } else if (tempCards[tempCards.findIndex((array)=> array.key === uniqueID)].memory === 0){
            tempCards[tempCards.findIndex((array)=> array.key === uniqueID)]['memory']++;
            setCards(shuffleCards(tempCards));
            setCurScore(curScore + 1);
        }
    }

    const checkWin = () => {
        if (curScore === difficulty){
            setBestScore(curScore);
            resetBoard();
        }
    }

    useEffect(() => {
        checkWin();
    }, [curScore, difficulty])

    const resetBoard = () => {
        createCardArray(difficulty);
        setCurScore(0);
    }

    return(
        <div id='mainPage'>
            <Score curScore={curScore} bestScore={bestScore}/>
            <GenerateCards cards={cards} handlePlayerAction={handlePlayerAction}/>
            <SelectDifficulty updateDifficulty={updateDifficulty}/>
        </div>
    )
};


export default Display;
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import GenerateCards from './displayComponents/GenerateCards';
import SelectDifficulty from './displayComponents/SelectDifficulty';
import Score from './displayComponents/Score';
import WinLoss from './displayComponents/WinLoss';
import Instructions from './displayComponents/Instructions';

const Display = () => {
    const [cards, setCards] = useState([]);
    const [curScore, setCurScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [difficulty, setDifficulty] = useState();
    const [win, setWin] = useState(0);
    const [loss, setLoss] = useState(0);
    const [instruction, setInstruction] = useState(1);

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
    }, [updateDifficulty])

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
            setLoss(1);
        } else if (tempCards[tempCards.findIndex((array)=> array.key === uniqueID)].memory === 0){
            tempCards[tempCards.findIndex((array)=> array.key === uniqueID)]['memory']++;
            setCards(shuffleCards(tempCards));
            setCurScore(curScore + 1);
        }
    }

    const checkWin = () => {
        if (curScore === difficulty){
            setBestScore(curScore);
            setWin(1);
        }
    }

    useEffect(() => {
        checkWin();
    }, [checkWin, curScore, difficulty])

    const resetBoard = () => {
        createCardArray(difficulty);
        setCurScore(0);
    }

    const acknowledgeResult = () => {
        setWin(0);
        setLoss(0);
        resetBoard();
    }

    const acknowledgeInstructions = () => {
        setInstruction(0);
    }

    return(
        <div id='mainPage'>
            <Score curScore={curScore} bestScore={bestScore}/>
            <Instructions instruction={instruction} acknowledgeInstructions={acknowledgeInstructions}/>
            <WinLoss win={win} loss={loss} acknowledgeResult={acknowledgeResult}/>
            <GenerateCards cards={cards} handlePlayerAction={handlePlayerAction}/>
            <SelectDifficulty updateDifficulty={updateDifficulty}/>
        </div>
    )
};


export default Display;
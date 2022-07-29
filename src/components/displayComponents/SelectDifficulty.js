import React from 'react';

const SelectDifficulty = ( {updateDifficulty} ) => {
    return(
        <div id='difficulty'>
            <div>Choose your Difficulty:</div>
            <select onChange={(e)=>{updateDifficulty(parseInt(e.target.value))}}>
                <option value={4}>Easy</option>
                <option value={8}>Medium</option>
                <option value={16}>Hard</option>
            </select>
        </div>
    )
}

export default SelectDifficulty;
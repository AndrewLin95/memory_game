import React from 'react';

const SelectDifficulty = () => {
    return(
        <div>
            <div>Choose your Difficulty:</div>
            <select>
                <option value="4">Easy</option>
                <option value="8">Medium</option>
                <option value="16">Hard</option>
            </select>
        </div>
    )
}

export default SelectDifficulty;
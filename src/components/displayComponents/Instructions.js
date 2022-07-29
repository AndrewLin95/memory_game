import React from "react";

const Instructions = (props) => {
    const { instruction, acknowledgeInstructions } = props;

    const renderInstructions = () => {
        if (instruction === 1){
            return(
                <div className="instructions" onClick={acknowledgeInstructions}>
                    <div className="instructionText">
                        <div className="title">Instructions:</div>
                        <div>Choose wisely! If you choose a card you chose previously, you lose!</div>
                        <div>Click to Begin!</div>
                    </div>
                </div>
            )
        }
    }

    return (
        renderInstructions()
    )
}

export default Instructions;
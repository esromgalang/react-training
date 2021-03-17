import React from 'react';

const Conditional = () => {

    //const value = true;

    const returnValue = () => {
        
        let randomNumber = Math.floor(Math.random() * 10);

        console.log(randomNumber)

        if (randomNumber > 5){
            return true;
        }else {
            return false;
        }
        
    }

    return(
        <div>
            {
                returnValue() ? 'I am true' : 'I am false'
            }
        </div>
    )
}

export default Conditional;
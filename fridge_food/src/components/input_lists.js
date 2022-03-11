import React from 'react';

function UserInputs({ input }){
    // This component generates a list of items that have been input by the user and displays them in an unordered list
    return (
        <>  
            <p>Items Available</p>
            <ul>
                {
                    input.map((item) => <li>{item}</li>)
                }
            </ul>
        </>
    );
}

export default UserInputs
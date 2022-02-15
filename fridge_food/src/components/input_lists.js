import React, { useState } from 'react';

function UserInputs({ input }){
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
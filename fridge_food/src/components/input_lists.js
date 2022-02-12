import React, { useState } from 'react';

function UserInputs({ input }){
    return (
        <>  
            <ul>
                {
                    input.map((item) => <li>{item}</li>)
                }
            </ul>
        </>
    );
}

export default UserInputs
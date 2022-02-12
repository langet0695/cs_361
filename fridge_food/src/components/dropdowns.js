import React, { useState } from 'react';

function DropDown({ input }){
    return (
        <>  
            <select size="5" multiple>
                {
                    input.map((item, key) => <option value={key}>{item}</option>)
                }
            </select>
        </>
    );
}

export default DropDown
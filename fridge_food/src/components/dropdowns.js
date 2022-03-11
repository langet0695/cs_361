import React from 'react';

function DropDown({ input, addInput }){
    // This component generates the select fields for a form dropdown based on ingredients prvoided by the input_items.js file
    return (
        <>  
            <select size="5" multiple onChange={e => addInput(e.target.value)}>
                {
                    input.map((item, key) => <option value={item} >{item}</option>)
                }
            </select>
        </>
    );
}

export default DropDown
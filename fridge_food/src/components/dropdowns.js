import React from 'react';

function DropDown({ input, addInput }){
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
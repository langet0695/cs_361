import React, { useState } from 'react';

function ReipeCard({ input }){

    return (
        <>  
            <div class="recipe_box">
                Ingredients{input['ingredients'].reduce((a, b) => a + ', ' + b, '')}
                {/* <p>Instructions: {input['instructions'].map((item, key) => <p>{item}</p>)}</p> */}
                <ol>Instructions: {input['instructions'].map((item, key) => <li>{item}</li>)}</ol>
            </div>
        </>
    );
}

export default ReipeCard
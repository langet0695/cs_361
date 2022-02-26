import React, { useState } from 'react';

function ReipeCardTest({ input }){

    return (
        <>  
            <div class="recipe_box">
                Recipe: <a href={input['link']}>{input['name']}</a>

                {/* Ingredients{input['ingredients'].reduce((a, b) => a + ', ' + b, '')} */}
                <ol>Ingredients: {input['ingredientLines'].map((item, key) => <li>{item}</li>)}</ol>
            </div>
        </>
    );
}

export default ReipeCardTest
import React, { useState } from 'react';

function RecipeDetails({ input, updateCard, value }){

    return (
        <>  
            <div class="recipe_center">
                <b>Recipe: {input['name']}</b>
                <br></br>
                <br></br>
                <ol>Ingredients: {input['ingredientLines'].map((item, key) => <li>{item}</li>)}</ol>
                <b><a href={input['link']}>Recipe Instructions</a></b>
                <br></br>
                <button type="button" onClick={e => updateCard(value)}>Return to Input</button>
            </div>
        </>
    );
}

export default RecipeDetails
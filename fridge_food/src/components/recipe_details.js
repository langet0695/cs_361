import React, { useState } from 'react';

function RecipeDetails({ input }){

    return (
        <>  
            <div class="recipe_center">
                Recipe: {input['name']}
                <br></br>
                Image
                <br></br>
                <ol>Ingredients: {input['ingredientLines'].map((item, key) => <li>{item}</li>)}</ol>
                <b><a href={input['link']}>Recipe Instructions</a></b>
            </div>
        </>
    );
}

export default RecipeDetails
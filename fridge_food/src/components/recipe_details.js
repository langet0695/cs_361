import React from 'react';

function RecipeDetails({ input, updateCard, value }){
    // This component contains the jsx / html to dynamically build a visual containing the ingredients and a link to the recipe provided to the user.
    return (
        <>  
            <div class="recipe_center">
                <b>Recipe: {input['name']}</b>
                <br></br>
                <br></br>
                {/* The line below uses the javascript map function to create an ordered list of ingredients that are presented to the user */}
                <ol>Ingredients: {input['ingredientLines'].map((item, key) => <li>{item}</li>)}</ol>
                <b><a href={input['link']}>Recipe Instructions</a></b>
                <br></br>
                <button type="button" onClick={e => updateCard(value)}>Return to Input</button>
            </div>
        </>
    );
}

export default RecipeDetails
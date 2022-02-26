import React, { useState } from 'react';

function ReipeCardTest({ input }){

    return (
        <>  
            <div class="recipe_box">
                Recipe: {input['name']}
                <br></br>
                IMAGE
                <br></br>
                <a href={input['link']}>Learn More</a>
                <ol>Ingredients: {input['ingredientLines'].map((item, key) => <li>{item}</li>)}</ol>
            </div>
        </>
    );
}

export default ReipeCardTest
import React, { useState } from 'react';

function ReipeCard({ input }){

    return (
        <>  
            <div class="recipe_box">
                Recipe: {input['name']}
                <br></br>
                Image
                <br></br>
                <a href={input['link']}>Learn More</a>
                <ol>Ingredients: {input['ingredientLines'].map((item, key) => <li>{item}</li>)}</ol>
            </div>
        </>
    );
}

export default ReipeCard
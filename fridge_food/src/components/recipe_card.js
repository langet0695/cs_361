import React, { useState } from 'react';

function ReipeCard({ input, updateCard, value }){

    return (
        <>  
            <div class="recipe_box">
                Recipe: {input['name']}
                <br></br>
                Image
                <br></br>
                {/* <a href={input['link']}>Learn More</a> */}
                <button type="button" onClick={e => updateCard(value)}>Learn More</button>
                {/* <ol>Ingredients: {input['ingredientLines'].map((item, key) => <li>{item}</li>)}</ol> */}
            </div>
        </>
    );
}

export default ReipeCard
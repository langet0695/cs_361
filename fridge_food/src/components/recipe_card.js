import React, { useState } from 'react';

function ReipeCard({ input, updateCard, value, img }){

    return (
        <>  
            <div class="recipe_box">
                Recipe: {input['name']}
                <br></br>
                Image
                <br></br>
                <img src={img} width="75" height="60"></img>
                <br></br>
                {/* <a href={input['link']}>Learn More</a> */}
                <button type="button" onClick={e => updateCard(value)}>Learn More</button>
                {/* <ol>Ingredients: {input['ingredientLines'].map((item, key) => <li>{item}</li>)}</ol> */}
            </div>
        </>
    );
}

export default ReipeCard
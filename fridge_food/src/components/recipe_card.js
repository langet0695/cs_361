import React from 'react';

function ReipeCard({ input, updateCard, value, img }){

    return (
        <>  
            <div class="recipe_box">
                Recipe: {input['name']}
                <br></br>
                Image
                <br></br>
                <img src={img} width="75" height="60" alt=" " ></img>
                <br></br>
                <button type="button" onClick={e => updateCard(value)}>Learn More</button>
            </div>
        </>
    );
}

export default ReipeCard
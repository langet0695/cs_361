import React from 'react';

function ReipeCard({ input, updateCard, value, img }){
    // This component builds the content that is populated into the 3 recipe cards at the bottom of the browser page of the user.
    return (
        <>  
            {/* The following conditional operator displays a blank div if the recipe search service hasn't been used yet. */}
            { (input['name'] === 'TMP') ? <div></div>                  
                                        : <div class="recipe_box">
                                              Recipe: {input['name']}
                                              <br></br>
                                              Image
                                              <br></br>
                                              <img src={img} width="75" height="60" alt=" " ></img>
                                              <br></br>
                                              <button type="button" onClick={e => updateCard(value)}>Learn More</button>
                                          </div> }
        </>
    );
}

export default ReipeCard
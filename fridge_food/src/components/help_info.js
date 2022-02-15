import React from 'react';
import { FaRegWindowClose } from "react-icons/fa";

function Help( {showHelp, updateHelp} ){

    return (
        <>  
            <div >
                <div class="indent">
                    <h1>
                        <FaRegWindowClose onClick={updateHelp}/>
                        How to Use:
                    </h1>
                    <p>
                        Input into the app what you have available to cook with.
                        <p class="indent">
                            + Pantry - These are the dry goods you have (e.g flour, rice, beans...)
                            <br></br>
                            + Spices - These are the seasonings and other flavoring you have (e.g. Paprika or Salt)
                            <br></br>
                            + Fridge - Any item stored in your fridge or freezer.
                            <br></br>
                            + Utensils - Any cooking implements in your kitchen that can be used.
                        </p>
                        After "Calculate Recipe" is selected the machine will query a search service and return 3 recipes you can cook with what is available in your kitchen! If you don't have a necessary ingreident you cannot cook the recipe.
                    </p>
                    <p>
                        Placeholder
                    </p>
                </div>
            </div> 
        </>
    );
}

export default Help
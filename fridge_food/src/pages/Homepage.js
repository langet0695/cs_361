import React, { useState } from 'react';
import { FaRegQuestionCircle } from "react-icons/fa";
import InputList from '../components/input_lists';
import RecipeCard from '../components/recipe_card';
import HelpInfo from '../components/help_info';
import InputModule from '../components/input_module';
import ItemInput from '../data/input_items.js';
import RecipeDetails from '../components/recipe_details';

function Homepage() {
    // This Homepage component is used to generate the ui and interaction mechanisms of the main web landing page users will be directed to.
    const [Recipes, setRecipes] = useState({'recipes':[{'name':'TMP', 'ingredientLines':['TMP_Ingredient'], 'link': 'google.com'}, 
                                                       {'name':'TMP', 'ingredientLines':['TMP_Ingredient'], 'link': 'google.com'}, 
                                                       {'name':'TMP', 'ingredientLines':['TMP_Ingredient'], 'link': 'google.com'}]});
    const [Image_1, setImageOne] = useState('tmp')
    const [Image_2, setImageTwo] = useState('tmp')
    const [Image_3, setImageThree] = useState('tmp')
    const [userInput, setInput] = useState([])
    const [textInput, setTextInput] = useState('')
    const [showHelp, setHelp] = useState('False')
    const [showCard, setCard] = useState('Input')
    
    const loadImageUrl = async (call, callback) => {
        // This constant is leveraged by the loadData constant as a helper method to concurrently access the image search service for all 3 recipes at the same time.
        let response = await fetch(call);
        let url = await response.text();
        return callback(url);
    }

    const loadData = async () => {
        // This constant calls both the recipe search service and image search service to update the page with the latest information based on a users input.
        const response = await fetch(`https://fathomless-taiga-44243.herokuapp.com/?ingredients=${userInput}`);
        const data = await response.json();
        let prom1 =loadImageUrl(`https://cs361-image-service.herokuapp.com/photo/${data['recipes'][0]['name']}`, setImageOne);
        let prom2 =loadImageUrl(`https://cs361-image-service.herokuapp.com/photo/${data['recipes'][1]['name']}`, setImageTwo);
        let prom3 =loadImageUrl(`https://cs361-image-service.herokuapp.com/photo/${data['recipes'][2]['name']}`, setImageThree);
        await Promise.all([prom1, prom2, prom3]);
        setRecipes(data);
    }

    function updateTextInput(input){
        setTextInput(input)
    }

    function addInput(input){
        const newInput = userInput.slice()
        newInput.push(input)
        setInput(newInput)
    }

    function updateHelp(){
        (showHelp === "False") ? setHelp("True") : setHelp("False")
    }

    function updateCard(val){
        // This function is used to mange the interaction between a user and the recipe cards "learn more" button.
        if(showCard !== "Input"){
            if(showCard === 0 & val !== 0){setCard(val)}
            else if(showCard === 1 & val !== 1){setCard(val)}
            else if(showCard === 2 & val !== 2){setCard(val)}
            else{setCard("Input")}
        }
        else {
            setCard(val)
        }
    }

    function calcRecipes() {
        loadData();
    }

    return (
        <>
            <div class="information_container">
            </div>
            <div class="center_container">
                {/* The following 3 lines in this div contains conditional operator with a nested conditional operator that are used to determine if the HelpInfo, InputModule or RecipeDetails
                component should be diplayed in the center of the users browser. */}
                { (showHelp === "True") ? <HelpInfo updateHelp={updateHelp} ></HelpInfo> 
                                        : (showCard === "Input") ? <InputModule Input_items={ItemInput} addInput={addInput} updateTextInput={updateTextInput} calcRecipes={calcRecipes} textInput={textInput}></InputModule> 
                                                                 : <RecipeDetails input={Recipes['recipes'][showCard]} updateCard={updateCard} value={showCard}></RecipeDetails> }
                <div>
                    {/* This div contains a series of 3 conditional operators that are used to show or hide the RecipeCard components based on if the user is viewing the help window. 
                    When the recipe card is displayed it is populated with data from the Recipes state variable which is hard coded to positions 1, 2 and 3 in an array that is updated by
                    the product and image search services. */}
                    <div>
                        { (showHelp === "True") ? <div></div> 
                                                : <RecipeCard input={Recipes['recipes'][0]} updateCard={updateCard} value={0} img={Image_1}></RecipeCard>}
                    </div>
                    <div>
                        { (showHelp === "True") ? <div></div> 
                                                : <RecipeCard input={Recipes['recipes'][1]} updateCard={updateCard} value={1} img={Image_2}></RecipeCard>}
                    </div>
                    <div>
                        { (showHelp === "True") ? <div></div> 
                                                : <RecipeCard input={Recipes['recipes'][2]} updateCard={updateCard} value={2} img={Image_3}></RecipeCard>}
                    </div>
                </div>
            </div>
            <div class="information_container">
                {/* Container used to display the help button and user input on the right hand side of the users browser window. */}
                <table class="toolbar">
                    <tr>
                        <th><FaRegQuestionCircle onClick={updateHelp}/></th>
                    </tr>
                </table>
                <p>
                    <InputList input={userInput}></InputList>
                </p>
            </div>
        </>
    );
}

export default Homepage


 

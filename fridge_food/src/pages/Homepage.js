import React, { useState } from 'react';
import { FaRegQuestionCircle } from "react-icons/fa";
import InputList from '../components/input_lists';
import RecipeCard from '../components/recipe_card';
import HelpInfo from '../components/help_info';
import InputModule from '../components/input_module';
import ItemInput from '../data/input_items.js';
import RecipeDetails from '../components/recipe_details';

function Homepage() {
    const [Recipes, setRecipes] = useState({'recipes':[{'name':'TMP_1', 'ingredientLines':['TMP_Ingredient'], 'link': 'google.com'}, 
                                                       {'name':'TMP_2', 'ingredientLines':['TMP_Ingredient'], 'link': 'google.com'}, 
                                                       {'name':'TMP_3', 'ingredientLines':['TMP_Ingredient'], 'link': 'google.com'}]});
    const [Image_1, setImageOne] = useState('tmp')
    const [Image_2, setImageTwo] = useState('tmp')
    const [Image_3, setImageThree] = useState('tmp')
    const [userInput, setInput] = useState([])
    const [textInput, setTextInput] = useState('')
    const [showHelp, setHelp] = useState('False')
    const [showCard, setCard] = useState('Input')
    
    const loadImageUrl = async (call, callback) => {
        let response = await fetch(call);
        let url = await response.text();
        return callback(url);
    }

    const loadData = async () => {
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
                { (showHelp === "True") ? <HelpInfo updateHelp={updateHelp} ></HelpInfo> 
                                        : (showCard === "Input") ? <InputModule Input_items={ItemInput} addInput={addInput} updateTextInput={updateTextInput} calcRecipes={calcRecipes} textInput={textInput}></InputModule> 
                                                                 : <RecipeDetails input={Recipes['recipes'][showCard]} updateCard={updateCard} value={showCard}></RecipeDetails> }
                <div>
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


 

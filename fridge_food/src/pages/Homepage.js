import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRandom, FaSearch, FaShareAlt, FaRegQuestionCircle } from "react-icons/fa";
import DropDown from '../components/dropdowns';
import InputList from '../components/input_lists';
import RecipeCard from '../components/recipe_card';
import HelpInfo from '../components/help_info';
import RecipeCardTest from '../components/r_c_test';
import InputModule from '../components/input_module';
import ItemInput from '../data/input_items.js';
import RecipeDetails from '../components/recipe_details';

//
//THIS PAGE IS FOR TESTING ONLY
//

function Homepage({ Input_items, User_inputs, PossibleRecipes }) {
    const [Recipes, setRecipes] = useState({'recipes':[{'name':'TMP_1', 'ingredientLines':['TMP_Ingredient'], 'link': 'google.com'}, {'name':'TMP_2', 'ingredientLines':['TMP_Ingredient'], 'link': 'google.com'}, {'name':'TMP_3', 'ingredientLines':['TMP_Ingredient'], 'link': 'google.com'}]});
    const [Image_1, setImageOne] = useState('tmp')
    const [Image_2, setImageTwo] = useState('tmp')
    const [Image_3, setImageThree] = useState('tmp')
    const [userInput, setInput] = useState([])
    const [textInput, setTextInput] = useState('')
    const [showHelp, setHelp] = useState('False')
    const [showCard, setCard] = useState('Input')
    
    const loadData = async () => {
        // const response = await fetch("https://fathomless-taiga-44243.herokuapp.com/?ingredients='milk','cheese'");
        const response = await fetch(`https://fathomless-taiga-44243.herokuapp.com/?ingredients=${userInput}`);
        const data = await response.json();
        console.log(data['recipes'][0]['name'])
        const img_1 = await fetch(`https://cs361-image-service.herokuapp.com/photo/apple`);
        await fetch(`https://cs361-image-service.herokuapp.com/photo/${data['recipes'][0]['name']}`).then((resp)=>{ return resp.text() }).then((text)=>{setImageOne(text); })
        await fetch(`https://cs361-image-service.herokuapp.com/photo/${data['recipes'][1]['name']}`).then((resp)=>{ return resp.text() }).then((text)=>{setImageTwo(text); })
        await fetch(`https://cs361-image-service.herokuapp.com/photo/${data['recipes'][2]['name']}`).then((resp)=>{ return resp.text() }).then((text)=>{setImageThree(text); })
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
        console.log(val)
        if(showCard != "Input"){
            if(showCard === 0 & val != 0){setCard(val)}
            else if(showCard === 1 & val != 1){setCard(val)}
            else if(showCard === 2 & val != 2){setCard(val)}
            else{setCard("Input")}
        }
        else {
            setCard(val)
        }
    }

    function calcRecipes() {
        loadData();
    }

    // useEffect(() => {
    //     loadData();
    // }, [] );

    return (
        <>
            <div class="information_container">
            </div>
            <div class="center_container">
                { (showHelp === "True") ? <HelpInfo showHelp={showHelp} updateHelp={updateHelp} ></HelpInfo> : (showCard === "Input") ? <InputModule Input_items={ItemInput} addInput={addInput} updateTextInput={updateTextInput} calcRecipes={calcRecipes} textInput={textInput}></InputModule> : <RecipeDetails input={Recipes['recipes'][showCard]} updateCard={updateCard} value={showCard}></RecipeDetails> }
                <div>
                    <div>
                        { (showHelp === "True") ? <div></div> : <RecipeCard input={Recipes['recipes'][0]} updateCard={updateCard} value={0} img={Image_1}></RecipeCard>}
                    </div>
                    <div>
                        { (showHelp === "True") ? <div></div> : <RecipeCard input={Recipes['recipes'][1]} updateCard={updateCard} value={1} img={Image_2}></RecipeCard>}
                    </div>
                    <div>
                        { (showHelp === "True") ? <div></div> : <RecipeCard input={Recipes['recipes'][2]} updateCard={updateCard} value={2} img={Image_3}></RecipeCard>}
                    </div>
                </div>
            </div>
            <div class="information_container">
                <table class="toolbar">
                    <tr>
                        <th><FaRegQuestionCircle onClick={updateHelp}/></th>
                        {/* <th><FaSearch/></th>
                        <th><FaShareAlt/></th> */}
                    </tr>
                </table>
                <p>
                    <InputList input={userInput}></InputList>
                    {/* {( (showHelp === "True") ? <HelpInfo showHelp={showHelp} updateHelp={updateHelp} ></HelpInfo> : <InputList input={userInput}></InputList>)} */}
                </p>
            </div>
        </>
    );
}

export default Homepage


 

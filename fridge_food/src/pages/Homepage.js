import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRandom, FaSearch, FaShareAlt, FaRegQuestionCircle } from "react-icons/fa";
import DropDown from '../components/dropdowns';
import InputList from '../components/input_lists';
import RecipeCard from '../components/recipe_card';
import HelpInfo from '../components/help_info';

//
//THIS PAGE IS FOR TESTING ONLY
//

function Homepage({ Input_items, User_inputs, PossibleRecipes }) {
    const [Recipes, setRecipes] = useState([]);
    const [userInput, setInput] = useState([])
    const [textInput, setTextInput] = useState('')
    const [showHelp, setHelp] = useState('False')
    const [suggestedRecipes, setSuggestedRecipes] = useState(['TBD', 'TBD', 'TBD'])
    
    const loadData = async () => {
        // const response = await fetch("https://fathomless-taiga-44243.herokuapp.com/?ingredients='milk','cheese'");
        const response = await fetch(`https://fathomless-taiga-44243.herokuapp.com/?ingredients=${userInput}`);
        const data = await response.json();
        console.log(data['recipes'][0])
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

    function calcRecipes(){
        const tmp_recipes = suggestedRecipes.slice()
        tmp_recipes.splice(0, 1, 'hamburger') 
        tmp_recipes.splice(1, 1, 'bread') 
        tmp_recipes.splice(2, 1, 'None') 
        setSuggestedRecipes(tmp_recipes)
        loadData();
    }

    useEffect(() => {
        loadData();
    }, [] );

    return (
        <>
            <div class="information_container">
                Column for recipe list
            </div>
            <div class="center_container">
                <div class="information_center" id="intro">
                    <p class="center">
                        <p class="intro">
                            Welcome to the Fridge to Recipe Machine!
                        </p>
                    </p>
                </div>
                <div class="information_center">
                    <div class="center_inputs">
                        <div>
                            <form >
                                <label for="text_input">Tell us, what is in your fridge...</label>
                                <input type="text" id="text_input" name="text_input" onChange={e => updateTextInput(e.target.value)}></input>
                                <button type="button" onClick={e => addInput(textInput)}>Add Input</button><br></br>
                            </form>
                            <form>
                                <label for="drop_downs">or select from the following:</label><br></br>
                                <center>
                                    <table>
                                        <tr>
                                            <th><label for="pantry">Pantry</label></th>
                                            <th><label for="spices">Spices</label></th>
                                            <th><label for="fridge">Fridge</label></th>
                                            <th><label for="utensils">Utensils</label></th>
                                        </tr>
                                        <tr>
                                            <th>
                                                <DropDown input={Input_items['pantry']} addInput={addInput}></DropDown>
                                            </th>
                                            <th>
                                                <DropDown input={Input_items['spices']} addInput={addInput}></DropDown>
                                            </th>
                                            <th>
                                                <DropDown input={Input_items['fridge']} addInput={addInput}></DropDown>
                                            </th>
                                            <th>
                                                <DropDown input={Input_items['utensils']} addInput={addInput}></DropDown>
                                            </th>
                                        </tr>
                                    </table>
                                    <br></br>
                                    <button type="button" onClick={e => calcRecipes()}>Calculate Recipes</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    {/* {Recipes['recipes'][0]['name']} */}
                    <RecipeCard input={PossibleRecipes[suggestedRecipes[0]]}></RecipeCard>
                    <RecipeCard input={PossibleRecipes[suggestedRecipes[1]]}></RecipeCard>
                    <RecipeCard input={PossibleRecipes[suggestedRecipes[2]]}></RecipeCard>
                </div>
            </div>
            <div class="information_container">
                <table class="toolbar">
                    <tr>
                        <th><FaRegQuestionCircle onClick={updateHelp}/></th>
                        <th><FaSearch/></th>
                        <th><FaShareAlt/></th>
                    </tr>
                </table>
                <p>
                    {( (showHelp === "True") ? <HelpInfo showHelp={showHelp} updateHelp={updateHelp} ></HelpInfo> : <InputList input={userInput}></InputList>)}
                </p>
            </div>
        </>
    );
}

export default Homepage


 

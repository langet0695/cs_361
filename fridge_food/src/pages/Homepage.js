import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaRandom, FaSearch, FaShareAlt, FaRegQuestionCircle } from "react-icons/fa";
import DropDown from '../components/dropdowns';
import InputList from '../components/input_lists';
import RecipeCard from '../components/recipe_card';


//
//THIS PAGE IS FOR TESTING ONLY
//

function Homepage({ Input_items, User_inputs, PossibleRecipes }) {

    const [userInput, setInput] = useState([])
    const [textInput, setTextInput] = useState('')
    const [suggestedRecipes, setSuggestedRecipes] = useState(['TBD', 'TBD', 'TBD'])
    
    function updateTextInput(input){
        setTextInput(input)
    }

    function addInput(input){
        const newInput = userInput.slice()
        newInput.push(input)
        setInput(newInput)
    }

    function calcRecipes(){
        const tmp_recipes = suggestedRecipes.slice()
        tmp_recipes.splice(0, 1, 'hamburger') 
        tmp_recipes.splice(1, 1, 'bread') 
        tmp_recipes.splice(2, 1, 'None') 
        setSuggestedRecipes(tmp_recipes)
    }

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
                    <RecipeCard input={PossibleRecipes[suggestedRecipes[0]]}></RecipeCard>
                    <RecipeCard input={PossibleRecipes[suggestedRecipes[1]]}></RecipeCard>
                    <RecipeCard input={PossibleRecipes[suggestedRecipes[2]]}></RecipeCard>
                </div>
            </div>
            <div class="information_container">
                <table class="toolbar">
                    <tr>
                        <th><FaRegQuestionCircle/></th>
                        <th><FaSearch/></th>
                        <th><FaShareAlt/></th>
                    </tr>
                </table>
                <p>
                    Items Available
                    <InputList input={userInput}></InputList>
                </p>
            </div>
        </>
    );
}

export default Homepage


 

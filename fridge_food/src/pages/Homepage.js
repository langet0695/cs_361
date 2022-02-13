import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaRandom, FaSearch, FaShareAlt, FaRegQuestionCircle } from "react-icons/fa";
import DropDown from '../components/dropdowns';
import InputList from '../components/input_lists';
import RecipeCard from '../components/recipe_card';

//
//THIS PAGE IS FOR TESTING ONLY
//

function Homepage({ Input_items, User_inputs }) {

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
                            <form>
                                <label for="text_input">Tell us, what is in your fridge...</label>
                                <input type="text" id="text_input" name="text_input"></input>
                                <input type="submit"></input><br></br>
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
                                                <DropDown input={Input_items['pantry']}></DropDown>
                                            </th>
                                            <th>
                                                <DropDown input={Input_items['spices']}></DropDown>
                                            </th>
                                            <th>
                                                <DropDown input={Input_items['fridge']}></DropDown>
                                            </th>
                                            <th>
                                                <DropDown input={Input_items['utensils']}></DropDown>
                                            </th>
                                        </tr>
                                    </table>
                                    <br></br>
                                    <input type="submit"></input>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <RecipeCard input="TMP"></RecipeCard>
                    <RecipeCard input="TMP"></RecipeCard>
                    <RecipeCard input="TMP"></RecipeCard>
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
                    <InputList input={User_inputs}></InputList>
                </p>
            </div>
        </>
    );
}

export default Homepage


 

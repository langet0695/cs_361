import DropDown from '../components/dropdowns';

function input_module( {Input_items, addInput, updateTextInput, calcRecipes, textInput} ){

    return(
        <>
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
        </>
    );
}

export default input_module
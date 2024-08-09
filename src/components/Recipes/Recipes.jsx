import React, {useState} from 'react';

import {useUnit} from 'effector-react';
import {RecipesItemList} from '../RecipesItemList';
import {Dots} from '../Dots/';
import {
    $calories,
    $data,
    $input,
    propsAccepted,
    caloriesChanges,
    inputChanges,
} from "./model.js";
import {fetchUserReposFx} from "../../api/index.js";
import {HealthMenu} from "../HealthMenu/index.js";
import * as styled from "./styled.js";



export const Recipes = () => {
    const [display, setDisplay] = useState(null);
    const input = useUnit($input);
    const calories = useUnit($calories);
    let data = useUnit($data);
    const isLoading = useUnit(fetchUserReposFx.pending);
    const toggleDisplayAllergies = () => {
        setDisplay(prev => prev === "allergies" ? null : "allergies");
    }
    const toggleDisplayDiets = () => {
        setDisplay(prev => prev === "diets" ? null : "diets");
    }

    const allergiesMenuItems = ["Celery-free", "Crustacean-free", "Dairy-free", "Egg-free", "Fish-free", "Gluten-free", "Lupine-free", "Mustard-free", "Peanut-free", "Sesame-free", "Shellfish-free", "Soy-free", "Tree-nut-free", "Wheat-free"]
    const dietsMenuItems = ["Alcohol-free", "Balanced", "High-Fiber", "High-Protein", "Keto", "Kidney friendly", "Kosher", "Low-Carb", "Low-Fat", "Low-Potassium", "Low-Sodium", "No oil added", "No-Sugar", "Paleo", "Pescatarian", "Pork-free", "Red meat-free", "Sugar-Conscious", "Vegan", "Vegetarian"]

    return (
        <>
            <styled.Wrapper>
                <styled.allergyButton onClick={toggleDisplayAllergies}>Allergies</styled.allergyButton>
                <styled.allergyButton onClick={toggleDisplayDiets}>Diets</styled.allergyButton>
                <styled.input
                    className="input"
                    type="text"
                    placeholder={"Find recipes"}
                    value={input}
                    onChange={(item) => inputChanges(item.target.value)}
                />
                <styled.input
                    className="input"
                    type="number"
                    placeholder="Calories"
                    value={calories}
                    onChange={(item) => caloriesChanges(item.target.value)}
                />
                <styled.allergyButton onClick={() => propsAccepted()}>Search with properties</styled.allergyButton>
            </styled.Wrapper>
            <HealthMenu allergiesMenuItems={allergiesMenuItems} dietsMenuItems={dietsMenuItems} display={display} />
            {isLoading ? data = '' : null}
            {data !== "" ? <RecipesItemList data={data}></RecipesItemList> : null}
            {isLoading ? <Dots/> : null}
        </>
    );
};
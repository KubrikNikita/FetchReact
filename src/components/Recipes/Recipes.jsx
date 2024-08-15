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
import {allergiesMenuItems, dietsMenuItems} from "../HealthMenu/model.js";



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
            <HealthMenu display={display}/>
            {isLoading ? data = '' : null}
            {data !== "" ? <RecipesItemList data={data}></RecipesItemList> : null}
            {isLoading ? <Dots/> : null}
        </>
    );
};
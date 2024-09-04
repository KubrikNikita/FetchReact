import React, {useState} from 'react';

import {useUnit} from 'effector-react';
import {RecipesItemList} from '../RecipesItemList/index.ts';
import {Dots} from '../Dots/index.ts';
import {
    $calories,
    $data,
    $input,
    propsAccepted,
    caloriesChanges,
    inputChanges,
} from "./model.ts";
import {fetchUserReposFx} from "../../api/index.ts";
import {HealthMenu} from "../HealthMenu/index.ts";
import * as styled from "./styled.ts";




export const Recipes = () => {
    const [display, setDisplay] = useState('');
    const input = useUnit($input);
    const calories = useUnit($calories);
    const data = useUnit($data);
    const isLoading = useUnit(fetchUserReposFx.pending);
    const toggleDisplayAllergies = () => {
        setDisplay(prev => prev === "allergies" ? '' : "allergies");
    }
    const toggleDisplayDiets = () => {
        setDisplay(prev => prev === "diets" ? '' : "diets");

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

            
            {(data && !isLoading)  ? <RecipesItemList data={data}></RecipesItemList> : null}
            {isLoading ? <Dots/> : null}
        </>
    );
};
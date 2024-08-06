import React from 'react';

import {useUnit} from 'effector-react';
import {RecipesItemList} from '../RecipesItemList';
import {Dots} from '../Dots/';
import {
    $calories,
    $data,
    $input,
    caloriesAccepted,
    caloriesChanges,
    inputChanges,
} from "./model.js";
import {fetchUserReposFx} from "../../api/index.js";


export const Recipes = () => {
    const input = useUnit($input);
    const calories = useUnit($calories);
    const data = useUnit($data);
    return (
        <>
            <input
                className="input"
                type="text"
                value={input}
                onChange={(item) => inputChanges(item.target.value)}
            />
            <input
                className="input"
                type="number"
                placeholder="Calories"
                value={calories}
                onChange={(item) => caloriesChanges(item.target.value)}
            />
            <button onClick={() => caloriesAccepted()}>Учесть калории</button>
            {data !== "" ? <RecipesItemList data={data}></RecipesItemList> : null}
            {useUnit(fetchUserReposFx.pending) ? <Dots/> : null}
        </>
    );
};
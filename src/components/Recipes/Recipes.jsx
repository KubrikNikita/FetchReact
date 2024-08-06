import React, {useEffect} from 'react';
import {createStore, createEvent, createEffect} from 'effector';
import {useStore, useEvent, useUnit} from 'effector-react';
import {RecipesItemList} from '../RecipesItemList';
import {Dots} from '../Dots/';
import {
    $calories,
    $data,
    $input,
    $isLoading, caloriesAccepted,
    caloriesChanges, dataChanges,
    inputChanges,
    startLoading,
    stopLoading
} from "./model.js";


export const Recipes = () => {
    const input = useUnit($input);
    const calories = useUnit($calories);
    const isLoading = useUnit($isLoading);
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
            {isLoading ? <Dots/> : null}
        </>
    );
};
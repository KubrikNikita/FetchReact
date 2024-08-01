import React, {useEffect, useState} from "react";
import {RecipesItemList} from "../RecipesItemList";
import {useDebounce} from "../Hooks/useDebounce.jsx";
import {Dots} from "../Dots/";

export const Recipes = () => {
    const [recipeInputValue, setRecipeInputValue] = useState('');
    const [kcalInputValue, setKcalInputValue] = useState('');
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const link = 'https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&';
    const nameLink = 'q=';
    const calories = '&calories='
    const debounceRecipeInputValue = useDebounce(recipeInputValue);
    useEffect(() => {
        const getRecipes = async () => {
            setIsLoading(true);
            const response = await fetch(`${link}${nameLink}${debounceRecipeInputValue}${kcalInputValue ? calories + kcalInputValue : ""}`);
            const json = await response.json();
            setData(json);
            setIsLoading(false);
        };
        if (debounceRecipeInputValue) {
            getRecipes();
        } else {
            setData(null);
        }
    }, [debounceRecipeInputValue]);
    const handleChange = async () => {
        const response = await fetch(`${link}${nameLink}${debounceRecipeInputValue}${kcalInputValue ? calories + kcalInputValue : ""}`)
        const json = await response.json();
        setData(json);
    }
    return (
        <>
            <input className="input" type="text" value={recipeInputValue}
                   onChange={(item) => setRecipeInputValue(item.target.value)}/>
            <input className="input" type="number" placeholder={"Calories"} value={kcalInputValue}
                   onChange={(item) => setKcalInputValue(item.target.value)}/>
            <button onClick={handleChange}>Учесть калории</button>
            {data !== null ? <RecipesItemList data={data}></RecipesItemList> : null}
            {isLoading ? <Dots/> : null}

        </>
    )
}

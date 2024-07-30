import React, {useEffect, useState} from "react";
import {RecipeItemsList} from "../ItemsList/RecipeItemsList.jsx";
import {useDebounce} from "../Hooks/Hooks.jsx";
import {Dots} from "../Dots/";

export const Recipe = () => {
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const debounceInputValue = useDebounce(inputValue);
    useEffect(() => {
        const getRecipes = async () => {
            setIsLoading(true);
            const link = 'https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&';
            const nameLink = 'q=';
            const response = await fetch(`${link}${nameLink}${inputValue}`);
            const json = await response.json();
            setData(json);
            setIsLoading(false);
        };
        if (debounceInputValue) {
            getRecipes();
        } else {
            setData(null);
        }
    }, [debounceInputValue]);
    return (
        <>
            <input className="input" type="text" value={inputValue}
                   onChange={(item) => setInputValue(item.target.value)}/>
            {data !== null ? <RecipeItemsList data={data}></RecipeItemsList> : null}
            {isLoading ? <Dots/> : null}
        </>
    )
}

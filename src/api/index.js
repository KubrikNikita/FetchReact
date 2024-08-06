import {createEffect} from "effector";
import {dataChanges, startLoading, stopLoading} from "../components/Recipes/model.js";
const link = 'https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&';



export const fetchUserReposFx = createEffect(async ({ q,calories }) => {
    startLoading()
    const response = await fetch(`${link}q=${q}${calories ? `&calories=${calories}`  : ''}`)
    const json = await response.json();
    stopLoading()
    dataChanges(json)

});
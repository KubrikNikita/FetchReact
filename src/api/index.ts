import {createEffect} from "effector";
import {dataChanges} from "../components/Recipes/model.ts";
const link = 'https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&';

export const fetchUserReposFx = createEffect(async ({ q,health,calories, diet }: {q: string, health?: string, calories?: string, diet?: string}) => {
    const response = await fetch(`${link}q=${q}${health ? `&health=${health.toLowerCase().replace(/ /g, "-")}` : ''}${diet ? `&diet=${diet.toLowerCase().replace(/ /g, '-')}` : ''}${calories ? `&calories=${calories}`  : ''}`)
    const json = await response.json();
    dataChanges(json)
});
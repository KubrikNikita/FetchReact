import { ArraysOfRecipes, Hits } from '../../../interfaces/index.ts';
import {RecipesItem} from '../RecipesItem/index.ts';
import {CardsContainer, CardsWrapper} from "../RecipesItem/styled.ts";
import React from "react";

export const RecipesItemList = ({data}: {data: Hits}) => {

    if (data.count === 0) {
        return <h1>Ничего не найдено</h1>
    }
    return (
        <CardsContainer>
            <CardsWrapper>
                {data.hits.map((item: ArraysOfRecipes) => <RecipesItem item={item}/>)}
            </CardsWrapper>
        </CardsContainer>
    )
}

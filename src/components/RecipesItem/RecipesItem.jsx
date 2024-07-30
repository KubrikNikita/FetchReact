import React from 'react';
import { ItemsWrapper, Title, Body } from './styled.js'
export const RecipesItem = ({item}) => {

    return (
        <ItemsWrapper>
            <Title>
                <h1>{item.recipe.label}</h1>
            </Title>
            <Body>
                <p>{item.recipe.healthLabels}</p>
            </Body>
        </ItemsWrapper>
    );
}



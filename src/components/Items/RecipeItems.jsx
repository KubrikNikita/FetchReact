import React from 'react';
import { ItemsWrapper, Titles, Bodies } from './styled.js'
export const RecipeItems = ({title, body}) => {
    return (
        <ItemsWrapper>
            <Titles>
                <h1>{title}</h1>
            </Titles>
            <Bodies>
                <p>{body}</p>
            </Bodies>
        </ItemsWrapper>
    );
}



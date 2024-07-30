import React from 'react';
import styled from 'styled-components';
const ItemsWrapper = styled.div`
display: flex;
font-family: "sans-serif"`
const Titles = styled.section`
width: 50%;`
const Bodies = styled.section`
width: 50%;`
export const Items = ({data}) => {
    console.log(data);
    const getTitle = data.hits.map(item => item.recipe.label)
    const getBody = data.hits.map(item => item.recipe.healthLabels)
    return (
        <ItemsWrapper>
            <Titles>
                {getTitle.map((title) => <h1>{title}</h1>)}
            </Titles>
            <Bodies>
                {getBody.map((body) => <p>{body}</p>)}
            </Bodies>
        </ItemsWrapper>
    );
}


export default Items;
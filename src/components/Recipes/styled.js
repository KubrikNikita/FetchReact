import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;`

export const allergyButton = styled.button`
border: none;
border-radius: 5px;
background-color: lightgray;
color:black;
padding: 5px 10px;
cursor: pointer;
&:hover {
    background-color: dimgray;
}`

export const input = styled.input`
border: 1px solid lightgray;
border-radius: 5px;
padding: 3px;
&::placeholder {
    color: dimgray;
}`


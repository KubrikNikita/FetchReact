import styled from "styled-components";


export interface Props {
    active: boolean;
}
export const menu = styled.div`
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    gap: 10px 10px;
    padding-top: 10px;
    justify-content: center`

export const menuWrapper = styled.nav`;
`
export const menuItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightgray;
    border-radius: 15px;
    padding: 10px 10px;`

export const styledListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 0 5px`

export const checkboxButton = styled.button<Props>`
    cursor: pointer;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${Props => Props.active ? "" : 'url("https://www.iconninja.com/files/880/528/63/to-add-new-plus-create-icon.svg")'};
    border: 1px solid black;
    background-color: ${Props => Props.active ? 'rgb(0, 200, 0)' : 'white'};`



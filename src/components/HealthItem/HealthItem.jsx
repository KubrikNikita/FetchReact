import {addItem, deleteItem} from "../HealthMenu/model.js";
import * as styled from "./styled.js";
import React, {useState} from "react";

export const HealthItem = ({item}) => {
    const [isActive, setActive] = useState(false);
    const toggleActive = () => {
        setActive(prev => !prev)
        !isActive ? addItem(item) : deleteItem(item);
    }
    return (
        <styled.menuItem>
            <styled.styledListItem>
                {item}
                <styled.checkboxButton
                    active={isActive}
                    onClick={() => toggleActive()}>
                    {isActive ? '✔' : ''}
                </styled.checkboxButton>
            </styled.styledListItem>
        </styled.menuItem>
)
}
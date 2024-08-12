import {
    allergiesAddItem,
    allergiesDeleteItem,
    allergiesMenuItems,
    dietsAddItem,
    dietsDeleteItem
} from "./model.js";
import * as styled from "./styled.js";
import React, {useState} from "react";

export const HealthItem = ({item, res, menu}) => {
    const [isActive, setActive] = useState(res);
    const toggleActive = (add, del) => {
        setActive(prev => {
            const newActive = !prev;
            if (newActive) {
                add(item)
            } else {
                del(item)
            }
            return newActive
        })


    }
    return (
        <styled.menuItem>
            <styled.styledListItem>
                {item}
                <styled.checkboxButton
                    active={isActive}
                    onClick={() => menu === allergiesMenuItems ? toggleActive(allergiesAddItem, allergiesDeleteItem) : toggleActive(dietsAddItem, dietsDeleteItem)}>
                    {isActive ? '✔' : ''}
                </styled.checkboxButton>
            </styled.styledListItem>
        </styled.menuItem>
    )
}
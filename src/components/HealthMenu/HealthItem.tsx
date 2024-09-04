import {
    allergiesAddItem,
    allergiesDeleteItem,
    allergiesMenuItems,
    dietsAddItem,
    dietsDeleteItem
} from "./model.ts";
import * as styled from "./styled.ts";
import React, {useState} from "react";

type Props = {item: string, res: boolean, menu: string[]}

export const HealthItem = ({item, res, menu}: Props) => {
    const [isActive, setActive] = useState(res);
    const toggleActive = (add: any, del: any) => {
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
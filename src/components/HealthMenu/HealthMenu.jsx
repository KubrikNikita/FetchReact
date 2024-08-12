import React from 'react';
import * as styled from './styled.js'
import {HealthItem} from "../HealthItem/HealthItem.jsx";
import {$allergiesItemsList, $dietsItemsList, allergiesMenuItems, dietsMenuItems} from "./model.js";
import {useUnit} from "effector-react/effector-react.umd";


export const HealthMenu = ({display}) => {
    const allergiesItemsList = useUnit($allergiesItemsList)
    const dietsItemsList = useUnit($dietsItemsList)
    return (
        <>
            <styled.menuWrapper>
                {display === 'allergies' ?
                    <HealthMenuList menu={allergiesMenuItems} list={allergiesItemsList} />
                    : null}
                {display === 'diets' ?
                    <HealthMenuList menu={dietsMenuItems} list={dietsItemsList} />
                    : null}
            </styled.menuWrapper>
        </>
    )
}

const HealthMenuList = ({menu, list}) => {
    return (
            <styled.menu>
                {menu.map(item => {
                    const res = list.includes(item)
                    return <HealthItem item={item}
                                       res={res}
                                       menu={menu}
                    />;
                })}
            </styled.menu>
    )
};
export default HealthMenu;

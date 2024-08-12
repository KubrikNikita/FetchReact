import React from 'react';
import * as styled from './styled.js'
import {HealthItem} from "./HealthItem.jsx";
import {$allergiesItemsList, $dietsItemsList, allergiesMenuItems, dietsMenuItems} from "./model.js";
import {useUnit} from "effector-react/effector-react.umd";
import {HealthMenuList} from "./HealthMenuList.jsx";


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


export default HealthMenu;

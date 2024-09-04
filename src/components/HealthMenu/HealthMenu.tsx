
import React from 'react';
import * as styled from './styled.ts'
import {$allergiesItemsList, $dietsItemsList, allergiesMenuItems, dietsMenuItems} from "./model.ts";
import {useUnit} from "effector-react/effector-react.umd";
import {HealthMenuList} from "./HealthMenuList.tsx";

type Props  = {
    
}
export const HealthMenu = ({display}: {display: string}) => {
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

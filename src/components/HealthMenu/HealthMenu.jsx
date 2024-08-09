import React from 'react';
import * as styled from './styled.js'
import {HealthItem} from "../HealthItem/HealthItem.jsx";


export const HealthMenu = ({allergiesMenuItems, dietsMenuItems, display}) => {
    return (
        <>
            <styled.menuWrapper>
                {display === 'allergies' ?
                <styled.menu>
                    {allergiesMenuItems.map(item => <HealthItem item={item}/>)}
                </styled.menu>
                    : null}
                {display === 'diets' ?
                <styled.menu>
                    {dietsMenuItems.map(item => <HealthItem item={item}/>)}
                </styled.menu>
                    : null}
            </styled.menuWrapper>
        </>
)
}

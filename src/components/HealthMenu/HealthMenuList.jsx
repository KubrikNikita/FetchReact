import * as styled from "./styled.js";
import {HealthItem} from "./HealthItem.jsx";
import React from "react";

export const HealthMenuList = ({menu, list}) => {
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
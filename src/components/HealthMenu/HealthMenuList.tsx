import * as styled from "./styled.ts";
import {HealthItem} from './HealthItem.tsx';

import React from "react";

export const HealthMenuList = ({menu, list}: {menu: string[], list: string[]}) => {
    return (
        <styled.menu>
            {menu.map((item: any) => {
                const res = list.includes(item)
                return <HealthItem item={item}
                                   res={res}
                                   menu={menu}
                />;
            })}
        </styled.menu>
    )
};
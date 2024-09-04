"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthItem = void 0;
const model_ts_1 = require("./model.ts");
const styled = __importStar(require("./styled.ts"));
const react_1 = __importStar(require("react"));
const HealthItem = ({ item, res, menu }) => {
    const [isActive, setActive] = (0, react_1.useState)(res);
    const toggleActive = (add, del) => {
        setActive(prev => {
            const newActive = !prev;
            if (newActive) {
                add(item);
            }
            else {
                del(item);
            }
            return newActive;
        });
    };
    return (react_1.default.createElement(styled.menuItem, null,
        react_1.default.createElement(styled.styledListItem, null,
            item,
            react_1.default.createElement(styled.checkboxButton, { active: isActive, onClick: () => menu === model_ts_1.allergiesMenuItems ? toggleActive(model_ts_1.allergiesAddItem, model_ts_1.allergiesDeleteItem) : toggleActive(model_ts_1.dietsAddItem, model_ts_1.dietsDeleteItem) }, isActive ? '✔' : ''))));
};
exports.HealthItem = HealthItem;

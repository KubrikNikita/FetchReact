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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthMenu = void 0;
const react_1 = __importDefault(require("react"));
const styled = __importStar(require("./styled.ts"));
const model_ts_1 = require("./model.ts");
const effector_react_umd_1 = require("effector-react/effector-react.umd");
const HealthMenuList_tsx_1 = require("./HealthMenuList.tsx");
const HealthMenu = ({ display }) => {
    const allergiesItemsList = (0, effector_react_umd_1.useUnit)(model_ts_1.$allergiesItemsList);
    const dietsItemsList = (0, effector_react_umd_1.useUnit)(model_ts_1.$dietsItemsList);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styled.menuWrapper, null,
            display === 'allergies' ?
                react_1.default.createElement(HealthMenuList_tsx_1.HealthMenuList, { menu: model_ts_1.allergiesMenuItems, list: allergiesItemsList })
                : null,
            display === 'diets' ?
                react_1.default.createElement(HealthMenuList_tsx_1.HealthMenuList, { menu: model_ts_1.dietsMenuItems, list: dietsItemsList })
                : null)));
};
exports.HealthMenu = HealthMenu;
exports.default = exports.HealthMenu;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkboxButton = exports.styledListItem = exports.menuItem = exports.menuWrapper = exports.menu = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.menu = styled_components_1.default.div `
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    gap: 10px 10px;
    padding-top: 10px;
    justify-content: center`;
exports.menuWrapper = styled_components_1.default.nav `;
`;
exports.menuItem = styled_components_1.default.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightgray;
    border-radius: 15px;
    padding: 10px 10px;`;
exports.styledListItem = styled_components_1.default.li `
    display: flex;
    align-items: center;
    gap: 0 5px`;
exports.checkboxButton = styled_components_1.default.button `
    cursor: pointer;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${Props => Props.active ? "" : 'url("https://www.iconninja.com/files/880/528/63/to-add-new-plus-create-icon.svg")'};
    border: 1px solid black;
    background-color: ${Props => Props.active ? 'rgb(0, 200, 0)' : 'white'};`;

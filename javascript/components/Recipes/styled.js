"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = exports.allergyButton = exports.Wrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Wrapper = styled_components_1.default.div `
display: flex;
justify-content: space-between;
align-items: center;`;
exports.allergyButton = styled_components_1.default.button `
border: none;
border-radius: 5px;
background-color: lightgray;
color:black;
padding: 5px 10px;
cursor: pointer;
&:hover {
    background-color: dimgray;
}`;
exports.input = styled_components_1.default.input `
border: 1px solid lightgray;
border-radius: 5px;
padding: 3px;
&::placeholder {
    color: dimgray;
}`;

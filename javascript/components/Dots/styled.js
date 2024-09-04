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
exports.Dot = exports.StyledDots = exports.bounce = void 0;
const styled_components_1 = __importStar(require("styled-components"));
exports.bounce = (0, styled_components_1.keyframes) ` 0% {
                transform: translate(0px, -10px);
            }

            40% {
                width: 0;
                height: 2px;
                transform: translate(0px, 40px) scale(1.7);
            }

            100% {
                height: 20px;
                transform: translate(0px, -20px);
            }`;
exports.StyledDots = styled_components_1.default.div `
    display: flex;
    gap: 50px;
    padding-top: 50px;
    align-items: center;
    justify-content: center`;
exports.Dot = styled_components_1.default.div `
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 20px;
    transform: translate(0px, -40px);
    animation: ${exports.bounce} 1s infinite;
    &:nth-child(2) {
        animation-delay: 0.2s;
    }
    &:nth-child(3) {
        animation-delay: 0.4s;
    }`;

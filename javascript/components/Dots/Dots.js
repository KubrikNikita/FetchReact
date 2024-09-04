"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dots = void 0;
const react_1 = __importDefault(require("react"));
const styled_ts_1 = require("./styled.ts");
const Dots = () => {
    return (react_1.default.createElement(styled_ts_1.StyledDots, null,
        react_1.default.createElement(styled_ts_1.Dot, null),
        react_1.default.createElement(styled_ts_1.Dot, null),
        react_1.default.createElement(styled_ts_1.Dot, null)));
};
exports.Dots = Dots;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesItemList = void 0;
const index_ts_1 = require("../RecipesItem/index.ts");
const styled_ts_1 = require("../RecipesItem/styled.ts");
const react_1 = __importDefault(require("react"));
const RecipesItemList = ({ data }) => {
    if (data.hits.length === 0) {
        return react_1.default.createElement("h1", null, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E");
    }
    return (react_1.default.createElement(styled_ts_1.CardsContainer, null,
        react_1.default.createElement(styled_ts_1.CardsWrapper, null, data.hits.map((item) => react_1.default.createElement(index_ts_1.RecipesItem, { item: item })))));
};
exports.RecipesItemList = RecipesItemList;

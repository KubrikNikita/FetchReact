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
exports.Recipes = void 0;
const react_1 = __importStar(require("react"));
const effector_react_1 = require("effector-react");
const index_ts_1 = require("../RecipesItemList/index.ts");
const index_ts_2 = require("../Dots/index.ts");
const model_ts_1 = require("./model.ts");
const index_ts_3 = require("../../api/index.ts");
const index_ts_4 = require("../HealthMenu/index.ts");
const styled = __importStar(require("./styled.ts"));
const Recipes = () => {
    const [display, setDisplay] = (0, react_1.useState)('');
    const input = (0, effector_react_1.useUnit)(model_ts_1.$input);
    const calories = (0, effector_react_1.useUnit)(model_ts_1.$calories);
    let data = (0, effector_react_1.useUnit)(model_ts_1.$data);
    const isLoading = (0, effector_react_1.useUnit)(index_ts_3.fetchUserReposFx.pending);
    const toggleDisplayAllergies = () => {
        setDisplay(prev => prev === "allergies" ? '' : "allergies");
    };
    const toggleDisplayDiets = () => {
        setDisplay(prev => prev === "diets" ? '' : "diets");
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styled.Wrapper, null,
            react_1.default.createElement(styled.allergyButton, { onClick: toggleDisplayAllergies }, "Allergies"),
            react_1.default.createElement(styled.allergyButton, { onClick: toggleDisplayDiets }, "Diets"),
            react_1.default.createElement(styled.input, { className: "input", type: "text", placeholder: "Find recipes", value: input, onChange: (item) => (0, model_ts_1.inputChanges)(item.target.value) }),
            react_1.default.createElement(styled.input, { className: "input", type: "number", placeholder: "Calories", value: calories, onChange: (item) => (0, model_ts_1.caloriesChanges)(item.target.value) }),
            react_1.default.createElement(styled.allergyButton, { onClick: () => (0, model_ts_1.propsAccepted)() }, "Search with properties")),
        react_1.default.createElement(index_ts_4.HealthMenu, { display: display }),
        isLoading ? data = '' : null,
        data !== "" ? react_1.default.createElement(index_ts_1.RecipesItemList, { data: data }) : null,
        isLoading ? react_1.default.createElement(index_ts_2.Dots, null) : null));
};
exports.Recipes = Recipes;

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
exports.RecipesItem = void 0;
const react_1 = __importDefault(require("react"));
const styled = __importStar(require("./styled.ts"));
const styled_ts_1 = require("./styled.ts");
const RecipesItem = ({ item }) => {
    const kcal = Math.floor(Number(item.recipe.totalNutrients.ENERC_KCAL.quantity) / Number(item.recipe.yield));
    const protein = Math.floor(item.recipe.totalNutrients.PROCNT.quantity);
    const fat = Math.floor(item.recipe.totalNutrients.FAT.quantity);
    const carb = Math.floor(item.recipe.totalNutrients.CHOCDF.quantity);
    const cholesterol = Math.floor(item.recipe.totalNutrients.CHOLE.quantity);
    const sodium = Math.floor(item.recipe.totalNutrients.NA.quantity);
    const calcium = Math.floor(item.recipe.totalNutrients.CA.quantity);
    const magnesium = Math.floor(item.recipe.totalNutrients.MG.quantity);
    const potassium = Math.floor(item.recipe.totalNutrients.K.quantity);
    const iron = Math.floor(item.recipe.totalNutrients.FE.quantity);
    return (react_1.default.createElement(styled.CardWrapper, null,
        react_1.default.createElement(styled.FirstRow, null,
            react_1.default.createElement(styled.ImageWrapper, null,
                react_1.default.createElement(styled.Image, { width: 150, height: 150, src: item.recipe.image })),
            react_1.default.createElement(styled.ItemsWrapper, null,
                react_1.default.createElement(styled.Title, null,
                    react_1.default.createElement("h1", null, item.recipe.label)),
                react_1.default.createElement(styled.Body, null, item.recipe.healthLabels.map((item) => ` • ${item}`)))),
        react_1.default.createElement(styled.SecondRow, null,
            react_1.default.createElement(styled.FirstColumn, null,
                react_1.default.createElement(styled.Serv, null,
                    item.recipe.yield,
                    " servings"),
                react_1.default.createElement(styled.KcalWrapper, null,
                    react_1.default.createElement(styled.KcalNumber, null, kcal),
                    "kcal")),
            react_1.default.createElement(styled.SecondColumn, null,
                react_1.default.createElement(styled.ProteinFatCardWrapper, null,
                    react_1.default.createElement(styled.Protein, null,
                        react_1.default.createElement(styled.Dot, { color: "#7ACA25" }),
                        react_1.default.createElement(styled.NutrientWrapper, null,
                            react_1.default.createElement(styled.NutrientLabel, null, "PROTEIN"),
                            react_1.default.createElement(styled.NutrientCount, null,
                                protein,
                                " g"))),
                    react_1.default.createElement(styled.Fat, null,
                        react_1.default.createElement(styled.Dot, { color: "#FFBE61" }),
                        react_1.default.createElement(styled.NutrientWrapper, null,
                            react_1.default.createElement(styled.NutrientLabel, null, "FAT"),
                            react_1.default.createElement(styled.NutrientCount, null,
                                fat,
                                " g"))),
                    react_1.default.createElement(styled.Carb, null,
                        react_1.default.createElement(styled.Dot, { color: "#F14647" }),
                        react_1.default.createElement(styled.NutrientWrapper, null,
                            react_1.default.createElement(styled.NutrientLabel, null, "CARB"),
                            react_1.default.createElement(styled.NutrientCount, null,
                                carb,
                                " g"))))),
            react_1.default.createElement(styled.ThirdColumn, null,
                react_1.default.createElement(styled_ts_1.Elements, null,
                    react_1.default.createElement(styled.NutrientWrapper, null,
                        react_1.default.createElement(styled.NutrientLabel, null, "Cholesterol"),
                        react_1.default.createElement(styled.NutrientCount, null,
                            cholesterol,
                            " g")),
                    react_1.default.createElement(styled.NutrientWrapper, null,
                        react_1.default.createElement(styled.NutrientLabel, null, "Sodium"),
                        react_1.default.createElement(styled.NutrientCount, null,
                            sodium,
                            " g")),
                    react_1.default.createElement(styled.NutrientWrapper, null,
                        react_1.default.createElement(styled.NutrientLabel, null, "Calcium"),
                        react_1.default.createElement(styled.NutrientCount, null,
                            calcium,
                            " g")),
                    react_1.default.createElement(styled.NutrientWrapper, null,
                        react_1.default.createElement(styled.NutrientLabel, null, "Magnesium"),
                        react_1.default.createElement(styled.NutrientCount, null,
                            magnesium,
                            " g")),
                    react_1.default.createElement(styled.NutrientWrapper, null,
                        react_1.default.createElement(styled.NutrientLabel, null, "Potassium"),
                        react_1.default.createElement(styled.NutrientCount, null,
                            potassium,
                            " g")),
                    react_1.default.createElement(styled.NutrientWrapper, null,
                        react_1.default.createElement(styled.NutrientLabel, null, "Iron"),
                        react_1.default.createElement(styled.NutrientCount, null,
                            iron,
                            " g")))))));
};
exports.RecipesItem = RecipesItem;

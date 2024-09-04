"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elements = exports.Carb = exports.Fat = exports.NutrientCount = exports.NutrientLabel = exports.NutrientWrapper = exports.Dot = exports.Protein = exports.ProteinFatCardWrapper = exports.KcalWrapper = exports.KcalNumber = exports.Serv = exports.ThirdColumn = exports.SecondColumn = exports.FirstColumn = exports.SecondRow = exports.FirstRow = exports.CardWrapper = exports.CardsWrapper = exports.CardsContainer = exports.Image = exports.ImageWrapper = exports.Body = exports.Title = exports.ItemsWrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ItemsWrapper = styled_components_1.default.div `
    display: flex;
    font-family: "Roboto", sans-serif;
    flex-direction: column;`;
exports.Title = styled_components_1.default.div `
    font-size: 17px;
    color: #444A54;
    font-weight: 600;`;
exports.Body = styled_components_1.default.div `
    font-size: 13px;
    padding: 10px 15px 20px;
    line-height: 21px;
    display: flex;
    `;
exports.ImageWrapper = styled_components_1.default.div `
    padding: 0 12px`;
exports.Image = styled_components_1.default.img `
    margin-left: 15px;`;
exports.CardsContainer = styled_components_1.default.div `
display: flex;
align-items: center;
justify-content: center;
width: 100%;
flex-direction: column;`;
exports.CardsWrapper = styled_components_1.default.div `
display: flex;
align-items: center;
justify-content: center;
width: 70%;
flex-direction: column;`;
exports.CardWrapper = styled_components_1.default.div `
    padding-top: 15px;
    margin-top: 30px;
    box-shadow: 1px 2px 6px #ccc;`;
exports.FirstRow = styled_components_1.default.div `
    display: flex;`;
exports.SecondRow = styled_components_1.default.div `
    display: flex;
    height: 183px;
    background-color: rgb(243, 243, 243);`;
exports.FirstColumn = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    padding: 0 12px;
    width: 33%`;
exports.SecondColumn = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    padding: 0 12px;
    width: 33%`;
exports.ThirdColumn = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    padding: 0 12px;
    width: 33%;`;
exports.Serv = styled_components_1.default.div `
    margin: 15px 0 5px;
`;
exports.KcalNumber = styled_components_1.default.div `
    margin-top: 10px;
    font-size: 30px;
    font-weight: 600;
    color: rgb(68, 74, 84);`;
exports.KcalWrapper = styled_components_1.default.div `
    margin-top: 10px;
    font-size: 13px;
    font-weight: 600;
    color: rgb(68, 74, 84);
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: center;`;
exports.ProteinFatCardWrapper = styled_components_1.default.ul `
    margin: 15px 0`;
exports.Protein = styled_components_1.default.li `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 15px`;
exports.Dot = styled_components_1.default.div `
    width: 10px;
    height: 10px;
    background-color: ${props => props.color};
    border-radius: 20px;
    margin-right: 5px`;
exports.NutrientWrapper = styled_components_1.default.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    `;
exports.NutrientLabel = styled_components_1.default.span `
    font-size: 13px;
    font-weight: 400;`;
exports.NutrientCount = styled_components_1.default.span `
    font-size: 13px;
    font-weight: 600;`;
exports.Fat = styled_components_1.default.li `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 15px`;
exports.Carb = styled_components_1.default.li `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 15px`;
exports.Elements = styled_components_1.default.ul `
    margin: 15px 0;
    display:flex;
    gap: 0 15px;
    flex-direction: column;
    height: 100%;
    justify-content: space-between`;

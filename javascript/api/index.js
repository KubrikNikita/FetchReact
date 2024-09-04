"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserReposFx = void 0;
const effector_1 = require("effector");
const model_ts_1 = require("../components/Recipes/model.ts");
const link = 'https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&';
exports.fetchUserReposFx = (0, effector_1.createEffect)(({ q, health, calories, diet }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${link}q=${q}${health ? `&health=${health.toLowerCase().replace(/ /g, "-")}` : ''}${diet ? `&diet=${diet.toLowerCase().replace(/ /g, '-')}` : ''}${calories ? `&calories=${calories}` : ''}`);
    const json = yield response.json();
    (0, model_ts_1.dataChanges)(json);
}));

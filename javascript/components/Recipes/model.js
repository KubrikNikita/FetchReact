"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$requestData = exports.$debouncedInput = exports.$data = exports.dataChanges = exports.$calories = exports.propsAccepted = exports.caloriesChanges = exports.$input = exports.inputChanges = void 0;
const effector_1 = require("effector");
const index_ts_1 = require("../../api/index.ts");
const patronum_1 = require("patronum");
const model_ts_1 = require("../HealthMenu/model.ts");
exports.inputChanges = (0, effector_1.createEvent)();
exports.$input = (0, effector_1.createStore)('').on(exports.inputChanges, (_, newValue) => newValue);
exports.caloriesChanges = (0, effector_1.createEvent)();
exports.propsAccepted = (0, effector_1.createEvent)();
exports.$calories = (0, effector_1.createStore)('').on(exports.caloriesChanges, (_, newValue) => newValue);
exports.dataChanges = (0, effector_1.createEvent)();
exports.$data = (0, effector_1.createStore)('').on(exports.dataChanges, (_, newValue) => newValue);
exports.$debouncedInput = (0, effector_1.restore)((0, patronum_1.debounce)({
    source: exports.inputChanges,
    timeout: 1000,
}), '');
(0, effector_1.sample)({
    source: exports.$debouncedInput,
    fn: (text) => {
        return {
            q: text
        };
    },
    target: index_ts_1.fetchUserReposFx
});
exports.$requestData = (0, effector_1.combine)({
    q: exports.$debouncedInput,
    calories: exports.$calories,
    health: model_ts_1.$allergiesItemsList,
    diet: model_ts_1.$dietsItemsList,
}, ({ q, calories, health, diet }) => {
    return {
        q,
        calories,
        health: health.join('&health='),
        diet: diet.join('&diet=')
    };
});
(0, effector_1.sample)({
    source: exports.$requestData,
    clock: exports.propsAccepted,
    target: index_ts_1.fetchUserReposFx
});

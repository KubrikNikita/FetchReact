"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dietsMenuItems = exports.allergiesMenuItems = exports.$dietsItemsList = exports.$allergiesItemsList = exports.dietsDeleteItem = exports.dietsAddItem = exports.allergiesDeleteItem = exports.allergiesAddItem = void 0;
const effector_1 = require("effector");
exports.allergiesAddItem = (0, effector_1.createEvent)();
exports.allergiesDeleteItem = (0, effector_1.createEvent)();
exports.dietsAddItem = (0, effector_1.createEvent)();
exports.dietsDeleteItem = (0, effector_1.createEvent)();
exports.$allergiesItemsList = (0, effector_1.createStore)([]).on(exports.allergiesAddItem, (lastValue, newValue) => {
    return [...lastValue, newValue];
}).on(exports.allergiesDeleteItem, (lastValue, newValue) => {
    return lastValue.filter(i => i !== newValue);
});
exports.$dietsItemsList = (0, effector_1.createStore)([]).on(exports.dietsAddItem, (lastValue, newValue) => {
    return [...lastValue, newValue];
}).on(exports.dietsDeleteItem, (lastValue, newValue) => {
    return lastValue.filter(i => i !== newValue);
});
exports.allergiesMenuItems = ["Celery-free", "Crustacean-free", "Dairy-free", "Egg-free", "Fish-free", "Low-sugar", "Low-potassium", "Gluten-free", "Lupine-free", "Mustard-free", "Peanut-free", "Sesame-free", "Shellfish-free", "Soy-free", "Tree-nut-free", "Wheat-free", "Alcohol-free", "Keto friendly", "Kidney friendly", "Kosher", "No oil added", "Paleo", "Pescatarian", "Pork-free", "Red meat-free", "Sugar-Conscious", "Vegan", "Vegetarian"];
exports.dietsMenuItems = ["Balanced", "High-Fiber", "High-Protein", "Low-carb", "Low-fat", "Low-sodium"];

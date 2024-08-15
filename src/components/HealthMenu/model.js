import {createEvent, createStore} from "effector";

export const allergiesAddItem = createEvent()
export const allergiesDeleteItem = createEvent()
export const dietsAddItem = createEvent()
export const dietsDeleteItem = createEvent()
export const $allergiesItemsList = createStore([]).on(allergiesAddItem, (lastValue, newValue) => {
    return [...lastValue, newValue]
}).on(allergiesDeleteItem, (lastValue, newValue) => {
    return lastValue.filter(i => i !== newValue)
})
export const $dietsItemsList = createStore([]).on(dietsAddItem, (lastValue, newValue) => {
    return [...lastValue, newValue]
}).on(dietsDeleteItem, (lastValue, newValue) => {
    return lastValue.filter(i => i !== newValue)
})

export const allergiesMenuItems = ["Celery-free", "Crustacean-free", "Dairy-free", "Egg-free", "Fish-free","Low-sugar", "Low-potassium", "Gluten-free", "Lupine-free", "Mustard-free", "Peanut-free", "Sesame-free", "Shellfish-free", "Soy-free", "Tree-nut-free", "Wheat-free", "Alcohol-free", "Keto friendly", "Kidney friendly", "Kosher", "No oil added", "Paleo", "Pescatarian", "Pork-free", "Red meat-free", "Sugar-Conscious", "Vegan", "Vegetarian"]
export const dietsMenuItems = ["Balanced", "High-Fiber", "High-Protein","Low-carb", "Low-fat", "Low-sodium"]








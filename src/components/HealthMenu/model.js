import {combine, createEvent, createStore, sample} from "effector";
import {fetchUserReposFx} from "../../api/index.js";
import {$calories, $debouncedInput, propsAccepted} from "../Recipes/model.js";
import {useUnit} from "effector-react/effector-react.umd";


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

export const allergiesMenuItems = ["Celery-free", "Crustacean-free", "Dairy-free", "Egg-free", "Fish-free", "Gluten-free", "Lupine-free", "Mustard-free", "Peanut-free", "Sesame-free", "Shellfish-free", "Soy-free", "Tree-nut-free", "Wheat-free", "Alcohol-free", "Keto friendly", "Kidney friendly", "Kosher", "No oil added", "Paleo", "Pescatarian", "Pork-free", "Red meat-free", "Sugar-Conscious", "Vegan", "Vegetarian"]
export const dietsMenuItems = ["Balanced", "High-Fiber", "High-Protein","Low-carb", "Low-fat", "Low-potassium", "Low-sodium", "No-sugar"]

const $requestData = combine({
        q: $debouncedInput,
        calories: $calories,
        health: $allergiesItemsList,
        diet: $dietsItemsList,
    }, ({q, calories, health, diet}) => {
        return {
            q,
            calories,
            health: health.join('&health='),
            diet: diet.join('&diet=')
        }
    }
)

sample({
    source: $requestData,
    clock: propsAccepted,
    target: fetchUserReposFx
})




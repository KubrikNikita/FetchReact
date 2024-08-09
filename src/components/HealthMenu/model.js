import {combine, createEvent, createStore, sample} from "effector";
import {fetchUserReposFx} from "../../api/index.js";
import {$calories, $debouncedInput, propsAccepted} from "../Recipes/model.js";

export const addItem = createEvent()
export const deleteItem = createEvent()
export const $menuItemsList = createStore([]).on(addItem, (lastValue, newValue) => {
    return [...lastValue, newValue]
}).on(deleteItem, (lastValue, newValue) => {
    return lastValue.filter(i => i !== newValue)
})

const $requestData = combine({
        q: $debouncedInput,
        calories: $calories,
        health: $menuItemsList
    }, ({q, calories, health}) => {
        return {
            q,
            calories,
            health: health.join('&health=')
        }
    }
)

sample({
    source: $requestData,
    clock: propsAccepted,
    target: fetchUserReposFx
})




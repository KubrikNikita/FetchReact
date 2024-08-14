import {createStore, createEvent, createEffect, sample, restore, combine} from "effector";
import {fetchUserReposFx} from "../../api/index.js";
import {debounce} from "patronum";
import {$allergiesItemsList, $dietsItemsList} from "../HealthMenu/model.js";

export const inputChanges = createEvent()
export const $input = createStore('').on(inputChanges, (_, newValue) => newValue)


export const caloriesChanges = createEvent()
export const propsAccepted = createEvent()
export const $calories = createStore('').on(caloriesChanges, (_, newValue) => newValue)

export const dataChanges = createEvent()
export const $data = createStore('').on(dataChanges, (_, newValue) => newValue)

export const $debouncedInput = restore(
    debounce({
        source: inputChanges,
        timeout: 1000,
    }),
    ''
)
sample({
    source: $debouncedInput,
    fn:(text) => {
        return {
            q:text
        }
    },
    target:fetchUserReposFx
})
export const $requestData = combine({
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




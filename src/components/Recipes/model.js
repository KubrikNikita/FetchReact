import {createStore, createEvent, createEffect, sample, restore, combine} from "effector";
import {fetchUserReposFx} from "../../api/index.js";
import {debounce} from "patronum";

export const inputChanges = createEvent()
export const $input = createStore('').on(inputChanges, (_, newValue) => newValue)


export const caloriesChanges = createEvent()
export const caloriesAccepted = createEvent()
export const $calories = createStore('').on(caloriesChanges, (_, newValue) => newValue)

export const dataChanges = createEvent()
export const $data = createStore('').on(dataChanges, (_, newValue) => newValue)

const $debouncedInput = restore(
    debounce({
        source: inputChanges,
        timeout: 1000
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

sample({
    source:[$calories,$debouncedInput],
    clock:caloriesAccepted,
    fn:([cal,debouncedInput]) => {
        return {
            calories:cal,
            q:debouncedInput,
        }
    },
    target:fetchUserReposFx
})
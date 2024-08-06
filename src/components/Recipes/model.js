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
export const startLoading = createEvent()
export const stopLoading = createEvent()
export const $isLoading = createStore(false).on(startLoading, () => true).on(stopLoading, () => false)

const debouncedInput = restore(
    debounce({
        source: inputChanges,
        timeout: 1000
    }),
    ''
)

const $combined = combine(
    {
        input: $input,
        calories: $calories
    },
    ({ input, calories }) => ({ q: input, calories: calories })
);
sample({
    source: $combined,
    clock: [caloriesAccepted, debouncedInput],
    target: fetchUserReposFx
});
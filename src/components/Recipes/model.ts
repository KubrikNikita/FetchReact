import {createStore, createEvent, sample, restore, combine} from "effector";
import {fetchUserReposFx} from "../../api/index.ts";
import {debounce} from "patronum";
import {$allergiesItemsList, $dietsItemsList} from '../HealthMenu/model.ts';
import { Hits, initialHits } from "../../../interfaces/index.ts";

export const inputChanges = createEvent<string>()
export const $input = createStore<string>('').on(inputChanges, (_, newValue) => newValue)


export const caloriesChanges = createEvent<string>()
export const propsAccepted = createEvent<void>()
export const $calories = createStore<string>('').on(caloriesChanges, (_, newValue) => newValue)

export const dataChanges = createEvent<Hits>()
export const $data = createStore<Hits>(initialHits).on(dataChanges, (_, newValue) => newValue)

$data.watch(item => console.log(item))

export const $debouncedInput = restore<string>(
    debounce({
        source: inputChanges,
        timeout: 1000,
    }),
    ''
);

sample({
    source: $debouncedInput,
    fn: (text: string) => {
        return {
            q: text,
            
        }
    },
    target: fetchUserReposFx
});

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




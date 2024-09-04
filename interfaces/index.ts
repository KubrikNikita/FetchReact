interface NutrientName {
    [key:string]: TotalNutrients,
}

interface TotalNutrients {
    label: string,
    quantity: number,
}

interface Recipes {
    dietLabels: string[],
    healthLabels: string[],
    totalNutrients: NutrientName,
    image: string,
    label: string,
    yield: number,
}

export interface ArraysOfRecipes {
    recipe: Recipes
}

export interface Hits{
    hits: ArraysOfRecipes[]
    count: number
}

export const initialHits: Hits = {
    count: 1,
    hits: []
}


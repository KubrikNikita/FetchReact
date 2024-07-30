import {RecipeItems} from '../Items/RecipeItems.jsx';
export const RecipeItemsList = ({data}) => {
    return (

        data.hits.map(item => <RecipeItems title={item.recipe.label} body={item.recipe.healthLabels}/>)

    )
}

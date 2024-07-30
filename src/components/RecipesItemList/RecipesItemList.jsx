import {RecipesItem} from '../RecipeItem/RecipesItem.jsx';
export const RecipesItemList = ({data}) => {
    return (
        <>
            {data.hits.map(item => <RecipesItem item={item}/>)}
            {data.hits.toString() === "" ? <h1>Ничего не найдено</h1> : null}
        </>

    )
}

import {RecipesItem} from '../RecipeItem/RecipesItem.jsx';

export const RecipesItemList = ({data}) => {

    if (data.hits.length === 0) {
        return <h1>Ничего не найдено</h1>
    }
    return (
        <>
            {data.hits.map(item => <RecipesItem item={item}/>)}
        </>

    )
}

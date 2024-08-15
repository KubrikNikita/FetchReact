import {RecipesItem} from '../RecipesItem';
import {CardsContainer, CardsWrapper} from "../RecipesItem/styled.js";

export const RecipesItemList = ({data}) => {

    if (data.hits.length === 0) {
        return <h1>Ничего не найдено</h1>
    }
    return (
        <CardsContainer>
            <CardsWrapper>
                {data.hits.map(item => <RecipesItem item={item}/>)}
            </CardsWrapper>
        </CardsContainer>
    )
}

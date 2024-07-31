import styled from 'styled-components';

export const ItemsWrapper = styled.div`
    display: flex;
    font-family: "Roboto", sans-serif;
    flex-direction: column;`

export const Title = styled.div`
    font-size: 17px;
    color: #444A54;
    font-weight: 600;`

export const Body = styled.div`
    font-size: 13px;
    padding: 10px 15px 20px;
    line-height: 21px;`

export const ImageWrapper = styled.div`
    padding: 0 12px`
export const Image = styled.img`
    margin-left: 15px;`

export const CardWrapper = styled.div`
    padding-top: 15px;
    margin-top: 30px;
    box-shadow: 1px 2px 6px #ccc`

export const FirstRow = styled.div`
    display: flex;`

export const SecondRow = styled.div`
    display: flex;
    height: 183px;
    background-color: rgb(243, 243, 243);`

export const FirstColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 12px;
    width: 33%`

export const SecondColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 12px;
    width: 33%`

export const ThirdColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 12px;
    width: 33%;`

export const Serv = styled.div`
    margin: 15px 0 5px;
`

export const KcalNumber = styled.div`
    margin-top: 10px;
    font-size: 30px;
    font-weight: 600;
    color: rgb(68, 74, 84);`

export const KcalWrapper = styled.div`
    margin-top: 10px;
    font-size: 13px;
    font-weight: 600;
    color: rgb(68, 74, 84);
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: center;`

export const ProteinFatCardWrapper = styled.ul`
    margin: 15px 0`

export const Protein = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 15px`

export const ProteinDot = styled.div`
    width: 10px;
    height: 10px;
    background-color: #7ACA25;
    border-radius: 20px;
    margin-right: 5px`

export const FatDot = styled.div`
    width: 10px;
    height: 10px;
    background-color: #FFBE61;
    border-radius: 20px;
    margin-right: 5px`

export const CarbDot = styled.div`
    width: 10px;
    height: 10px;
    background-color: #F14647;
    border-radius: 20px;
    margin-right: 5px`

export const NutrientWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    `

export const NutrientLabel = styled.span`
    font-size: 13px;
    font-weight: 400;`

export const NutrientCount = styled.span`
    font-size: 13px;
    font-weight: 600;`

export const Fat = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 15px`

export const Carb = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 15px`
export const Elements = styled.ul`
    margin: 15px 0;
    display:flex;
    gap: 0 15px;
    flex-direction: column;
    height: 100%;
    justify-content: space-between`

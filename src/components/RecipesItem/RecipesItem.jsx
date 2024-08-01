import React, {useState} from 'react';
import * as styled from './styled.js'
import {Elements} from "./styled.js";

export const RecipesItem = ({item}) => {
    const kcal = Math.floor(Number(item.recipe.totalNutrients.ENERC_KCAL.quantity) / Number(item.recipe.yield))
    const protein = Math.floor(item.recipe.totalNutrients.PROCNT.quantity)
    const fat = Math.floor(item.recipe.totalNutrients.FAT.quantity)
    const carb = Math.floor(item.recipe.totalNutrients.CHOCDF.quantity)
    const cholesterol = Math.floor(item.recipe.totalNutrients.CHOLE.quantity)
    const sodium = Math.floor(item.recipe.totalNutrients.NA.quantity)
    const calcium = Math.floor(item.recipe.totalNutrients.CA.quantity)
    const magnesium = Math.floor(item.recipe.totalNutrients.MG.quantity)
    const potassium = Math.floor(item.recipe.totalNutrients.K.quantity)
    const iron = Math.floor(item.recipe.totalNutrients.FE.quantity)
    return (
        <styled.CardWrapper>
            <styled.FirstRow>
                <styled.ImageWrapper>
                    <styled.Image width={150} height={150} src={item.recipe.image}/>
                </styled.ImageWrapper>
                <styled.ItemsWrapper>
                    <styled.Title>
                        <h1>{item.recipe.label}</h1>
                    </styled.Title>
                    <styled.Body>
                        <p>{item.recipe.healthLabels.join(' • ')}</p>
                    </styled.Body>
                </styled.ItemsWrapper>
            </styled.FirstRow>
            <styled.SecondRow>
                <styled.FirstColumn>
                    <styled.Serv>
                        {item.recipe.yield} servings
                    </styled.Serv>
                    <styled.KcalWrapper>
                        <styled.KcalNumber>
                            {kcal}
                        </styled.KcalNumber>
                        kcal
                    </styled.KcalWrapper>
                </styled.FirstColumn>
                <styled.SecondColumn>
                    <styled.ProteinFatCardWrapper>
                        <styled.Protein>
                            <styled.ProteinDot></styled.ProteinDot>
                            <styled.NutrientWrapper>
                                <styled.NutrientLabel>PROTEIN</styled.NutrientLabel>
                                <styled.NutrientCount>{protein} g</styled.NutrientCount>
                            </styled.NutrientWrapper>
                        </styled.Protein>
                        <styled.Fat>
                            <styled.FatDot></styled.FatDot>
                            <styled.NutrientWrapper>
                                <styled.NutrientLabel>FAT</styled.NutrientLabel>
                                <styled.NutrientCount>{fat} g</styled.NutrientCount>
                            </styled.NutrientWrapper>
                        </styled.Fat>
                        <styled.Carb>
                            <styled.CarbDot></styled.CarbDot>
                            <styled.NutrientWrapper>
                                <styled.NutrientLabel>CARB</styled.NutrientLabel>
                                <styled.NutrientCount>{carb} g</styled.NutrientCount>
                            </styled.NutrientWrapper>
                        </styled.Carb>
                    </styled.ProteinFatCardWrapper>
                </styled.SecondColumn>
                <styled.ThirdColumn>
                    <Elements>
                        <styled.NutrientWrapper>
                            <styled.NutrientLabel>Cholesterol</styled.NutrientLabel>
                            <styled.NutrientCount>{cholesterol} g</styled.NutrientCount>
                        </styled.NutrientWrapper>
                        <styled.NutrientWrapper>
                            <styled.NutrientLabel>Sodium</styled.NutrientLabel>
                            <styled.NutrientCount>{sodium} g</styled.NutrientCount>
                        </styled.NutrientWrapper>
                        <styled.NutrientWrapper>
                            <styled.NutrientLabel>Calcium</styled.NutrientLabel>
                            <styled.NutrientCount>{calcium} g</styled.NutrientCount>
                        </styled.NutrientWrapper>
                        <styled.NutrientWrapper>
                            <styled.NutrientLabel>Magnesium</styled.NutrientLabel>
                            <styled.NutrientCount>{magnesium} g</styled.NutrientCount>
                        </styled.NutrientWrapper>
                        <styled.NutrientWrapper>
                            <styled.NutrientLabel>Potassium</styled.NutrientLabel>
                            <styled.NutrientCount>{potassium} g</styled.NutrientCount>
                        </styled.NutrientWrapper>
                        <styled.NutrientWrapper>
                            <styled.NutrientLabel>Iron</styled.NutrientLabel>
                            <styled.NutrientCount>{iron} g</styled.NutrientCount>
                        </styled.NutrientWrapper>
                    </Elements>
                </styled.ThirdColumn>
            </styled.SecondRow>
        </styled.CardWrapper>
    );
}



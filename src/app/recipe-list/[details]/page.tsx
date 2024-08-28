import RecipeDetailsItem from '@/components/ui/recipe-details'
import React, { Fragment } from 'react'

type Props = {
    params: any
}

async function fetchRecipeDtail(id: number) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${id}`)
        const data=await apiResponse?.json()
        return data
    } catch (error: any) {
        throw new Error(error)
    }
}

async function RecipeDetails({ params }: Props) {
    const recipeData = await fetchRecipeDtail(params?.details)
    return (
        <RecipeDetailsItem getrecipeDetail={recipeData}/>
    )
}

export default RecipeDetails
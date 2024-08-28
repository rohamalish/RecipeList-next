import RecipesList from '@/components/ui/recipes-list'
import React from 'react'

type Props = {}

async function fetchListOfRecipes() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes')
        const data = await apiResponse.json()
        return data?.recipes
    } catch (e: any) {
        throw new Error(e)
    }
}


async function Recipes({ }: Props) {
    const recipesList = await fetchListOfRecipes()
    return (

        <RecipesList recipesList={recipesList}/>
    )
}

export default Recipes
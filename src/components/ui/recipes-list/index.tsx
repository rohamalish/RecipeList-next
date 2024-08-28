import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import RecipeDetails from '../../../app/recipe-list/[details]/page'
type Props = {
    recipesList: any
}

function RecipesList({ recipesList }: Props) {
    return (
        <div>
            <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:w-full bg-yellow-200">
                <div className="flex items-center justify-between mb-12">
                    <h2 className='text-4xl font-bold text-gray-800 '>Recipes</h2>
                <Link href="/" className='text-red-600 text-bold border rounded border-2 border-rose-600 p-2 hover:bg-red-600 hover:text-white transition-all'>Go home</Link>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        recipesList && recipesList?.length > 0 ?
                            recipesList?.map((recipe: any) =>
                                <Link href={`recipe-list/${recipe?.id}`} key={recipe?.id}>
                                    <Card>
                                        <CardContent className='bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all'>
                                            <div className='w-full aspect-w-16 aspect-h-8 lg:h-80'>
                                                <img
                                                    src={recipe?.image}
                                                    alt={recipe?.name}
                                                    className="h-full w-full object-cover object-center p-2 mt-2"
                                                />
                                            </div>
                                            <div className='text-2xl font-extrabold text-gray-600 text-orange-800'>
                                                {recipe?.name}
                                            </div>
                                            <div className='flex flex-wrap gap-4 mt-5'>
                                                <p className='text-lg text-gray-600'>
                                                    Rating:{
                                                        recipe?.rating
                                                    }
                                                </p>
                                                <div className="ml-auto">
                                                    <p className="text-2xl  text-gray-600 text-orange-800">{recipe?.cuisine}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            )
                            : null
                    }
                </div>
            </div>
        </div>
    )
}

export default RecipesList
import React from 'react'

type Props = {
    getrecipeDetail?: any
}

function RecipeDetailsItem({ getrecipeDetail }: Props) {
    return (
        <div>

            <div className='p-6 lg:max-w-6xl max-w-2xl mx-auto '
            >
                <div className="grid  grid-cols-1 lg:grid-cols-2 gp-10">
                    <div className="w-full lg:sticky top-0 sm:flex gap-2">
                        <img
                            src={getrecipeDetail?.image}
                            className='w-4/5 rounded object-cover'
                            alt={getrecipeDetail?.name}
                        />
                    </div>
                    <div className="w-full flex flex-col lg:sticky top-0 sm:flex gap-2">

                        <h2 className='text-3xl font-extrabold text-gray-950'>{getrecipeDetail?.name}</h2>
                        <div className="flex flex-wrap gap-4 mt-5">
                            <p className="text-2xl text-gray-700 ">
                                {getrecipeDetail?.mealType[0]}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-5">
                            <p className="text-2xl text-gray-700 ">
                                {getrecipeDetail?.cuisine}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-5">
                            <h3 className="text-lg font-bold text-gray-700 ">
                                Ingredients : 
                            </h3>
                            <ul className="space-y-2 list-disc mt-5   text-sm  text-gray-700">
                                {getrecipeDetail?.ingredients?.map((item: any) => <li>{item}</li>)}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RecipeDetailsItem
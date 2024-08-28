import Link from 'next/link'
import React from 'react'

type Props = {}

function NotFound({ }: Props) {
    return (
        <div className='bg-gray-200 flex items-center justify-center flex-col min-h-screen'>
            <h1 className='text-red-700'>
                This page can not be found
            </h1>
            <Link href={"/"} className='text-green-600'>
                Go to home page
            </Link>
        </div>
    )
}

export default NotFound
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

type Props = {}

function Loading({}: Props) {
  return (
    <div className='w-full bg-black min-h-screen  '>
        <Skeleton/>
    </div>
  )
}

export default Loading
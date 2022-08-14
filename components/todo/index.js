import React from 'react'
import Image from 'next/image'

export default function Index({...post}) {
  console.log({...post});

  return (
    <div className='flex space-x-4'>
        {/* <Image src={} height={} width={}/> */}
        <p>-</p>
        <p>{post.title}</p>
        <button type="button" className='flex items-center'>&#10754;</button>
    </div>
  )
}

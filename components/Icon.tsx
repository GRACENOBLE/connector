import Image from 'next/image'
import React from 'react'

export default function Icon({className}: {className: string | undefined}) {
  return (
    <Image src={'/images/icon2.png'} alt={''} width={1000} height={1000} className={className}/>
  )
}

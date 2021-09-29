import React from 'react'
import Image from 'next/image'
const Loader = () => {
    return (
        <div className='h-full w-full bg-white flex justify-center items-center'>
            <Image src='/assets/images/BeanEater.gif' width={100} height={100} alt="loader"/>
        </div>
    )
}

export default Loader

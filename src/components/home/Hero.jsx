import React from 'react'
import Header from '../../common/Header'

const Hero = () => {
    return (
        <div className='bg-hero-image bg-center bg-no-repeat md:h-[1061px] h-[700px] lg:h-[930px] bg-cover'>
            <Header />
            <div className="container mx-auto max-lg:px-5">
                <h1 className='max-w-[1072px] lg:text-[61px] md:text-5xl sm:text-4xl text-3xl text-white text-center font-bold mx-auto leading-[136%] pt-[68px] '>Driving Transformation for Performance and Passion Within </h1>
                <p className='text-white md:text-[22px] text-center leading-[136%] mt-[15px] sm:text-xl text-lg mx-auto max-xl:max-w-[501px] '>The future of electric mobility is here. TDK and NEOM McLaren Formula E</p>
            </div>
        </div>
    )
}

export default Hero
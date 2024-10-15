import React from 'react'
import NavBar from '../common/NavBar'
import { heroBg } from '../../utils/helper'
import HeroHeadingImage from '../../assets/images/png/hero-heading-arrow.png'
import Paragraph from '../common/Paragraph'
import StraightLine from "../../assets/images/png/straight-line.png"
import Button from '../common/Button'
import WeighImage from '../../assets/images/png/weigh.png'
import PauseSvg from '../../assets/images/png/pause-btn.png'
import HeroDots from '../../assets/images/png/hero-dots.png'

const Hero = () => {
    return (
        <div style={heroBg}>
            <NavBar />
            <div className="container pt-[106px] pb-12">
                <div className='relative'>
                    <h2 className='font-Bahnschrift text-nowrap text-custom-6xl font-bold text-white leading-120'>America’s Leading</h2>
                    <img className='top-0 left-[664px] absolute w-[385px] h-[121px]' src={HeroHeadingImage} alt="heroHeadingImage" />
                </div>
                <h2 className='font-Bahnschrift text-custom-6xl font-bold text-white leading-120'><span className='text-primary-color font-light'>Sexual Abuse&nbsp;</span>Law Firm</h2>
                <div className="flex items-center mt-9 gap-11">
                    <div className='max-w-[386px] w-full'>
                        <Paragraph blackText={'We are one of the nation’s leading law firms for representing survivors of sexual violence. our renowned sexual abuse attorneys are not afraid to stand up to any institution.'} />
                        <img className='w-[193px] mt-6' src={StraightLine} alt="straightLine" />
                        <Button className='px-8 mt-9' Text='Request A Free Consultation' />
                    </div>
                    <div className='w-full max-w-[710px]' >
                        <div className='relative'>
                            <img className='w-full h-[377px] relative z-10' src={WeighImage} alt="WeighImage" />
                            <img className='h-[51px] w-[51px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer z-20' src={PauseSvg} alt="PauseSvg" />
                            <img className='absolute -right-7 -top-2' src={HeroDots} alt="HeroDots" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
import React from 'react'
import HeroImg from '../assets/hero-img.png'

const Hero = () => {
  return (
    <section className="bg-primary text-white py-32">
        <div className="container mx-auto grid md:grid-cols-2 justify-center md:justify-between">
            <div className="hero-info pb-5 md:pb-0 text-center">
                <h1 className="text-4xl lg:text-6xl pb-5">
                    Hi, <br />
                    I am <span className='text-accent'>D</span>avid <br />
                    Software Engineer
                </h1>
                <a
                    href="/#about"
                    className=" btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
                >
                    About Me
                </a>
            </div>

            <div className="hero-img">
                <img src={HeroImg} alt="coding illustration" className="w-[80%] ml-auto"/>
            </div>
        </div>
    </section>
  );
};

export default Hero
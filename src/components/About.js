import React from 'react'
import AboutImg from '../assets/about-img.png'

const About = () => {
    return (
    <section className="bg-secondary py-32" id="about">
        <div className="text-center md:w-[60%] mx-auto text-white">
            <div className="about-info pb-5 md:pb-0 text-center">
                <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
                    About Me
                </h2>

                <p className="pb-5">
                    I am currently getting my degree from the University of Florida in Computer Science with a minor in the Innovation-Artificial Intelligence Track.
                    With graduation coming up soon in December of 2023, I currently looking for a position at a company I can call home after I graduate!
                </p>
                <p className="pb-5">
                    Despite my confidence being in Back-End development, I have done two internships at OneHope, Inc. as a Software Development Intern in which I was able to work with the Full Tech Stack. 
                    I gained experience with .NET Framework, SQL Management Studio, and Vue.js. Through working on a fully functioning team, I was also able to get experience with 
                    the Scrum and Agile Methodologies.
                </p>
                <p className="pb-5">
                    In addition to experience with Vue.js, I worked with React.js and Tailwind CSS to develop this Portfolio Page.
                </p>


            </div>

            {/* <div className="about-img">
                <img src={AboutImg} alt="coding illustration" className="w-[80%] md:ml-auto"/>
            </div> */}
        </div>
    </section>
    );
}

export default About
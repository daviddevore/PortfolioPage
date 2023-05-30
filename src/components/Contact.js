import React from 'react'

const Contact = () => {
  return (
    <section className="bg-secondary py-32" id="contact">
        <div className="text-center md:w-[60%] mx-auto text-white">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
                Contact me
            </h2>
            <p>
                As I am graduating in December of 2023, I am currently on the market for a Full-Time Software Development position! Please feel free to reach out 
                if you would like to discuss this.
            </p>

            <p className="py-2">
                <span className="font-bold">Email:</span> ddevore7@gmail.com
            </p>
            <p className="py-2">
                <span className="font-bold">Phone:</span> 407-416-4442
            </p>

        </div>
    </section>
  )
}

export default Contact
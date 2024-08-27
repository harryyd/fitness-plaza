/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./contact.css"

const About = () => {



	return (
		<div id="about">
			<div className='text-5xl font-extrabold pl-10 pr-20 text-center'> ABOUT US </div>
			<div className="p-5 mx-auto sm:p-10 md:p-16 dark:text-gray-100">
				<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
					<img src="img.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />

					<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-black aboutDescription">
						<div className="space-y-2 ">
							{/* <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a> */}
							<p className="text-xs dark:text-gray-400">By Harshit yadav
								{/* <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a> */}
							</p>
						</div>
						<div className=" dark:text-gray-100 aboutDescription" >
							<p>

								Welcome to wildfire fitness, where fitness meets fun!

								At wildfire fitness, we're more than just a gym – we're a community dedicated to helping you achieve your fitness goals and live a healthier, happier life. Whether you're a seasoned athlete or just starting your fitness journey, our state-of-the-art facilities and expert trainers are here to support you every step of the way.<br /><br />

								What sets us apart is our commitment to providing a welcoming and inclusive environment where everyone feels empowered to reach their full potential. From our diverse range of fitness classes to our personalized training programs, we're here to help you discover the joy of movement and the power of a healthy lifestyle.<br /><br />

								But we're not just about fitness – we're about building connections and fostering a sense of belonging. Join us for one of our community events or simply chat with fellow members in our cozy lounge area. At wildfire fitness, you're not just a member – you're part of the family.

								Come visit us today and experience the wildfire fitness difference. Let's sweat, smile, and succeed together!

								---

								Feel free to customize this to fit your gym's unique brand and voice!</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default About

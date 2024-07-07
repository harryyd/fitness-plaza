/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./contact.css"

const HeroBanner = () => {
  return (
    <div>
      <section className="bg-black dark:text-gray-100 pb-[90px] " >
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between ">


          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
            <h1 className="text-5xl font-bold leadi sm:text-6xl test">Wildfire <span>  </span>
              <span className="dark:text-violet-400 test">Fitness</span><br />stay fit , Hit gym
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 test">Train on your own time
              {/* <br className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem */}
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start test">
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 test z-40" id="getstarted">Get Started</a>
            </div>
          </div>


          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 relative test" id="herobanner1-photos">
            <img src="https://i.pinimg.com/236x/f7/b0/5d/f7b05d5bb3f523a73aa01efeed5be53d.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 test" style={{ marginRight: "300px", marginTop: "60px", height: "500px" }} id="herobanner-photo1"/>
            <img src="https://i.pinimg.com/236x/94/38/56/94385674bd23ed0a4a1249c054f1fb04.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 test" style={{ marginLeft: "200px", marginBottom: "100px", height: "500px", position:'absolute' }} id="herobanner-photo2"/>
            {/* <img src="https://i.pinimg.com/236x/f7/b0/5d/f7b05d5bb3f523a73aa01efeed5be53d.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ease-in test" style={{ marginRight: "300px", marginTop: "60px", height: "500px" }} id="herobanner-photo1"/>/ */}
          </div>


        </div>

        <div className='flex test' id="herobanner2">
          <h1 className=' text-5xl font-extrabold pl-10 pr-20 z-20'>WE ARE A HIGH QUALITY GYM DEDICATED TO AFFORDABLE HEALTH AND WELLNESS.</h1>
          <p className=' pr-10 test'>Wildfire Fitness is a gym where you come as you are, and do your best. Our membership offers both digital and in-club programming aimed at helping you achieve your fitness goals. Discover all of our club’s offerings below. </p>
        </div>
        
        <div id="image-target" >
          {/* <img src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/6dd4f4e5-5131-49b1-9223-5a305b4deb4b/2888486jpgOriginalDelivery.jpg?format=500w" alt="image1" style={{ marginLeft: "68vh", marginTop: "100px", height: "64vh ", position: "relative" }} id="herobanner-inter-photo1"/> */}
          <img src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/6dd4f4e5-5131-49b1-9223-5a305b4deb4b/2888486jpgOriginalDelivery.jpg?format=500w" alt="image1"  id="herobanner-inter-photo-alt"/>
          <img src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/2fba5f51-a18e-4ee7-93b6-0b53db29dfc2/1716607jpgOriginalDelivery.jpg?format=500w" alt="image2"  id="herobanner-inter-photo2"/>
        </div>

        <div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:text-gray-100 ml-[10vw] test">
            <h2 className="mb-8 text-4xl font-bold leadi ml-[20vw] mb-[100px]"  id="homebanner3">What do we have to offer?</h2>
            <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 ml-[120px]">
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-400">
                  <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                  <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Exercise support</span>
              </li>
              <li className="flex items-center space-x-2 test">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-400">
                  <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                  <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Lockers </span>
              </li>
              <li className="flex items-center space-x-2 test">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-400">
                  <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                  <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>posing room</span>
              </li>
              <li className="flex items-center space-x-2 test">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-400">
                  <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                  <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Boxing Ring</span>
              </li>
              <li className="flex items-center space-x-2 test">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-400">
                  <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                  <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Premium Classes</span>
              </li>
              <li className="flex items-center space-x-2 test">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-400">
                  <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                  <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Modern Facilities </span>
              </li>
            </ul>
          </div>
        </div>

      </section>
      <hr/>
    </div>
  )
}

export default HeroBanner

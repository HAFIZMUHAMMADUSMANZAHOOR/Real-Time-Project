import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import img1 from "../assets/Images/chart1.png"
import img2 from "../assets/Images/chart2.png"
import img3 from "../assets/Images/chart3.png"

import 'swiper/css';
import 'swiper/css/autoplay';

export default function Home() {
  return (
    <>

<div className="max-w-7xl mx-auto ">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
        <div className="w-full h-[600px] bg-purple-100 flex flex-col md:flex-row items-center justify-between px-7 md:px-20 py-10">
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/1 space-y-2">
        <h2 className="text-3xl font-bold text-purple-600">Hunt Share Live !</h2>
        <h1 className="text-3xl font-extrabold text-black leading-tight">
          Send and receive gifts on our app <br />
          and support your favorite streamers!
        </h1>
        <p className="text-gray-750">
          Hunt Share Live provides you with a fantastic and interactive platform where you can send and receive exclusive virtual gifts during live streaming
        </p>

        {/* Buttons */}
        <div className="flex justify-between flex-col sm:flex-row gap-4 pt-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded shadow">
            DOWNLOAD
          </button>
          <button className="bg-white text-purple-600 border border-purple-500 hover:bg-purple-100 font-semibold py-2 px-6 rounded shadow ml-">
            DOWNLOAD APK
          </button>
        </div>
      </div>

      {/* RIGHT SECTION - IMAGE */}
      <div className="w-full md:w-1/1 mt-10 md:mt-0 flex justify-center">
        <img src={img1} alt="gift box" className="max-w-md w-full" />
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full h-[600px] bg-purple-100 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 space-y-5">
        <h2 className="text-3xl font-bold text-purple-600">Hunt Share Live !</h2>
        <h1 className="text-3xl font-extrabold text-black leading-tight">
          Send and receive gifts on our app <br />
          and support your favorite streamers!
        </h1>
        <p className="text-gray-750">
          Hunt Share Live provides you with a fantastic and interactive platform where you can send and receive exclusive virtual gifts during live streaming
        </p>

        {/* Buttons */}
        <div className="flex justify-between flex-col sm:flex-row gap-4 pt-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded shadow">
            DOWNLOAD
          </button>
          <button className="bg-white text-purple-600 border border-purple-500 hover:bg-purple-100 font-semibold py-2 px-6 rounded shadow">
            DOWNLOAD APK
          </button>
        </div>
      </div>

      {/* RIGHT SECTION - IMAGE */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src={img2} alt="gift box" className="max-w-md w-full" />
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full h-[600px] bg-purple-100 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 space-y-5">
        <h2 className="text-3xl font-bold text-purple-600">Hunt Share Live !</h2>
        <h1 className="text-3xl font-extrabold text-black leading-tight">
          Send and receive gifts on our app <br />
          and support your favorite streamers!
        </h1>
        <p className="text-gray-750">
          Hunt Share Live provides you with a fantastic and interactive platform where you can send and receive exclusive virtual gifts during live streaming
        </p>

        {/* Buttons */}
        <div className="flex justify-between flex-col sm:flex-row gap-4 pt-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded shadow">
            DOWNLOAD
          </button>
          <button className="bg-white text-purple-600 border border-purple-500 hover:bg-purple-100 font-semibold py-2 px-6 rounded shadow">
            DOWNLOAD APK
          </button>
        </div>
      </div>

      {/* RIGHT SECTION - IMAGE */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src={img3} alt="gift box" className="max-w-md w-full" />
      </div>
    </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
    <div className='h-[600px] w-full bg-gray-200 '>
        <p className=' flex justify-center'>
        <h1 className='text-3xl'>Welcome to Hunt Share Live -  Youre  <br />Ultimate Live Streaming Platform! </h1><br /><br /> </p>
        <h3 className='flex justify-center'>Go Live, Connect, and Earn Through Gifting!</h3>
    

          
        
         





    </div>
    


    </>


















    
  )
}

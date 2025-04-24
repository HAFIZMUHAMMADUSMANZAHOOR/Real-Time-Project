import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import img1 from "../assets/Images/chart1.png"
import img2 from "../assets/Images/chart2.png"
import img3 from "../assets/Images/chart3.png"
import img12 from "../assets/Images/chart12.png"
import img13 from "../assets/Images/chart13.png"
import img14 from "../assets/Images/chart15.png"

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
    <div className='h-[1400px] w-full bg-gray-200 '>
        <p className=' flex justify-center'>
        <h1 className='text-3xl'>Welcome to Hunt Share Live -  Youre  <br />Ultimate Live Streaming Platform! </h1><br /><br /> </p>
        <h3 className='flex justify-center'>Go Live, Connect, and Earn Through Gifting!</h3>
    

          
        
          <div className="space-y-20">
                 {/* Hunt Share Live */}
                 <div className="flex flex-col md:flex-row items-center md:space-x-8">
                   <div className="md:w-1/2 mb-6 md:mb-0">
                     <h3 className="text-purple-800 font-extrabold text-xl mb-4">Hunt Share Live</h3>
                     <p className="text-gray-700">
                       Hunt Share Live is an amazing live streaming app where you don't just entertain – you earn too! Whether you're a gamer, an artist, or simply looking to connect with your fans, this platform is made for everyone.
                     </p>
                   </div>
                   <div className="md:w-1/2">
                     <img src={img12} alt="Hunt Share Live streaming device" />
                   </div>
                 </div>
         
                 {/* Hunt Share Live Gifting */}
                 <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8 md:space-x-reverse ml-8">
                   <div className="md:w-1/2 mb-6 md:mb-0">
                     <h3 className="text-purple-800 font-extrabold text-xl mb-4 ">Hunt Share Live Gifting</h3>
                     <p className="text-gray-700">
                       Hunt Share Live offers an engaging gifting system where the better you perform, the more rewards you earn.
                     </p>
                   </div>
                   <div className="md:w-1/2">
                     <img src={img13} alt="Mobile app for Hunt Share Live Gifting" />
                   </div>
                 </div>
         
                 {/* Hunt Share Live Chatting */}
                 <div className="flex flex-col md:flex-row items-center md:space-x-8">
                   <div className="md:w-1/2 mb-6 md:mb-0 ml-9">
                     <h3 className="text-purple-800 font-extrabold text-xl mb-4">Hunt Share Live Chatting</h3>
                     <p className="text-gray-700">
                       The live chat feature gives you an instant connection with your viewers, making the app even more interactive and engaging.
                     </p>
                   </div>
                   <div className="md:w-1/2">
                     <img src={img14} alt="Hunt Share Live chatting on mobile" />
                   </div>
                 </div>
               </div>





    </div>
    
    


    </>


















    
  )
}

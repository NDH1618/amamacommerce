import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css/navigation"

import 'swiper/css';
import { Autoplay, Navigation } from 'swiper';

const Carosel = () => {
  return (
    <div className='h-[410px] bg-white flex justify-start  mt-3'>
        <Swiper
            loop={true}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
                delay: 2000
            }}
            className= "w-[65%] !ml-0 rounded-lg"
        >
           <SwiperSlide>
            <img className='w-[100%] object-cover' src='https://ktmt.vnmediacdn.com/images/2021/12/09/42-1639037558-75.jpg' />
           </SwiperSlide>
           <SwiperSlide>
            <img className='w-[100%] object-cover' src='https://i1-giadinh.vnecdn.net/2018/04/20/gieng-troi-1-1524192264.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=7jEiMZupjOLP4OH150oJWg' />
           </SwiperSlide>
           <SwiperSlide>
            <img className='w-[100%] object-cover' src='https://emilydeadie.files.wordpress.com/2020/07/dsc_0267.jpg?w=1024' />
           </SwiperSlide>
           <SwiperSlide>
            <img className='w-[100%] object-cover' src='https://1.bp.blogspot.com/-inS_Fs-28PU/WcxZDH8rTcI/AAAAAAAAH8Y/9N5Fs5Y5k8oDus4KrIG5z6Sy5iQpZqhxgCEwYBhgL/s640/diadiemanuong-com-doi-co-hong-da-lat-dep-den-nao-long-nhung-ngay-chom-dong8d0778fb635844978082642458.jpg' />
           </SwiperSlide>

        </Swiper>
        <div className='w-[35%] flex flex-col items-center justify-between ml-2'>
            <div className=" flex  ">
                <div className='w-[160px] mr-2'>
                    <img src='https://vcdn1-giadinh.vnecdn.net/2014/05/14/RMD-Recipes-Strawberry-and-Cuc-5485-7201-1400062448.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=uhxy1IPORh6XiCYxNWW50g' />
                </div>
                <div>
                    <h3 className='text-xl'>day la tieu de bai viet</h3>
                    <p>day la noi dung cua bai viet ma minh muo trinh bay</p>
                </div> 
            </div>
            <div className=" flex  ">
                <div className='w-[160px] mr-2'>
                    <img src='https://vcdn1-giadinh.vnecdn.net/2014/05/14/RMD-Recipes-Strawberry-and-Cuc-5485-7201-1400062448.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=uhxy1IPORh6XiCYxNWW50g' />
                </div>
                <div>
                    <h3 className='text-xl'>day la tieu de bai viet</h3>
                    <p>day la noi dung cua bai viet ma minh muo trinh bay</p>
                </div> 
            </div>
            <div className=" flex  ">
                <div className='w-[160px] mr-2'>
                    <img src='https://vcdn1-giadinh.vnecdn.net/2014/05/14/RMD-Recipes-Strawberry-and-Cuc-5485-7201-1400062448.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=uhxy1IPORh6XiCYxNWW50g' />
                </div>
                <div>
                    <h3 className='text-xl'>day la tieu de bai viet</h3>
                    <p>day la noi dung cua bai viet ma minh muo trinh bay</p>
                </div> 
            </div>
            <div className=" flex  ">
                <div className='w-[160px] mr-2'>
                    <img src='https://vcdn1-giadinh.vnecdn.net/2014/05/14/RMD-Recipes-Strawberry-and-Cuc-5485-7201-1400062448.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=uhxy1IPORh6XiCYxNWW50g' />
                </div>
                <div>
                    <h3 className='text-xl'>day la tieu de bai viet</h3>
                    <p>day la noi dung cua bai viet ma minh muo trinh bay</p>
                </div> 
            </div>
        </div>
        
    </div>
  )
}

export default Carosel
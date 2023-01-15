import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-cards'
import './slider.scss'

import SocialLinks from './Slides/SocialLinks'
import Skills from './Slides/Skills'
import Person from './Slides/Person'

const Slider = () =>{
   return(
       <>
           <Swiper
               effect={"cards"}
               grabCursor={true}
               modules={[EffectCards]}
               className="mySwiper"
           >
               <SwiperSlide>
                    <SocialLinks />
               </SwiperSlide>
               <SwiperSlide>
                    <Skills />
               </SwiperSlide>
               <SwiperSlide>
                   <Person />
               </SwiperSlide>
           </Swiper>
       </>
   )

}

export default Slider

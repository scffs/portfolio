import React, { lazy, Suspense } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './slider.scss';
import Loading from '../../../components/Loading/Loading';

const Preview = lazy(() => import('./Slides/Preview/Preview'));
const SocialLinks = lazy(() => import('./Slides/SocialLinks/SocialLinks'));
const Skills = lazy(() => import('./Slides/Skills/Skills'));
const Person = lazy(() => import('./Slides/Person/Person'));

const Slider = () => {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Suspense fallback={<Loading/>}>
            <Preview/>
          </Suspense>
        </SwiperSlide>
        <SwiperSlide>
          <Suspense fallback={<Loading/>}>
            <Skills/>
          </Suspense>
        </SwiperSlide>
        <SwiperSlide>
          <Suspense fallback={<Loading/>}>
            <SocialLinks/>
          </Suspense>
        </SwiperSlide>
        <SwiperSlide>
          <Suspense fallback={<Loading/>}>
            <Person/>
          </Suspense>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;

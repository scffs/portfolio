import React, { lazy, memo, Suspense } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './slider.scss';
import Loading from '../../../components/Loading/Loading.jsx';
const Preview = lazy(() => import('./Slides/Preview/Preview.jsx'));
const SocialLinks = lazy(() => import('./Slides/SocialLinks/SocialLinks.jsx'));
const Skills = lazy(() => import('./Slides/Skills/Skills.jsx'));
const Person = lazy(() => import('./Slides/Person/Person.jsx'));

const Slider = () =>{
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Suspense fallback={<Loading />}>
            <Preview />
          </Suspense>
        </SwiperSlide>
        <SwiperSlide>
          <Suspense fallback={<Loading />}>
            <Skills />
          </Suspense>
        </SwiperSlide>
        <SwiperSlide>
          <Suspense fallback={<Loading />}>
            <SocialLinks />
          </Suspense>
        </SwiperSlide>
        <SwiperSlide>
          <Suspense fallback={<Loading />}>
            <Person />
          </Suspense>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default memo(Slider);

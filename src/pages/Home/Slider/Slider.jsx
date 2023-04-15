import React, {lazy, memo, Suspense} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-cards';
import './slider.scss';

import Loading from '../../../components/Loading/Loading.jsx';
const Preview = lazy(() => import('./Slides/Preview'));
const SocialLinks = lazy(() => import('./Slides/SocialLinks'));
const Skills = lazy(() => import('./Slides/Skills'));
const Person = lazy(() => import('./Slides/Person'));

const Slider = () =>{
    return(
        <>
            <Swiper
                effect={"cards"}
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
    )

}

export default memo(Slider);
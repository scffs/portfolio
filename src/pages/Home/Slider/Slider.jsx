import React, {lazy, memo, Suspense} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-cards';
import './slider.scss';

import Loading from '../../../components/Loading/Loading.jsx';
import Preview from './Slides/Preview';
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
                className="mySwiper"
            >
                <Suspense fallback={<Loading />}>
                    <SwiperSlide>
                        <Preview />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SocialLinks />
                    </SwiperSlide>
                    <SwiperSlide>

                        <Skills />

                    </SwiperSlide>
                    <SwiperSlide>

                        <Person />

                    </SwiperSlide>
                </Suspense>
            </Swiper>
        </>
    )

}

export default memo(Slider);
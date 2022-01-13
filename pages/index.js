import PageLayout from "../components/layouts/pageLayout";
import SectionLayout from "../components/layouts/sectionLayout";
import {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Autoplay} from 'swiper';
import Link from "next/link";
import {ArrowLeft, ArrowRight} from "../components/arrows";
import Button from "../components/button";
import { useEffect } from 'react';

SwiperCore.use([Autoplay, Navigation]);
import 'swiper/css';
import axios from 'axios';

const Home = () => {
  const [swiper, setSwiper] = useState(null);
  const [data, setData] = useState([])

  useEffect(() => {
    axios('https://pr-movies.herokuapp.com/api/movies')
      .then(response => setData(response.data))
  }, [])

  return (
    <PageLayout>
      <SectionLayout className={'container flex-1 bg-blue-darkest/50 rounded-xl'}>
        <h1 className={'text-blue px-8 uppercase text-2xl font-bold text-right mb-8'}>Dostępne filmy</h1>
        <Swiper onSwiper={(swiper) => setSwiper(swiper)}
                spaceBetween={16}
                slidesPerView={1.3}
                roundLengths={true}
                centeredSlides={true}
                loop={true}
                allowTouchMove={false}
                autoplay={{delay: 3000, disableOnInteraction: true}}
                initialSlide={0}
                speed={2000}>
          {data.map((props, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={'relative h-[500px] w-[977px] bg-gradient-to-r from-transparent via-[#D7BE69] to-transparent'}>
                  <h2 className={'absolute left-8 top-8 z-10 max-w-[270px] text-white text-right uppercase text-3xl'}>{props.title}</h2>
                  <div style={{backgroundImage: `url("${props.image}")`}} className={`h-[500px] mx-auto max-w-[900px] bg-contain bg-center relative bg-no-repeat`}>
                    <div className={'absolute right-0 bottom-4'}>
                      <Link href={`/movies/${props.id}`} passHref>
                        <Button>Detale</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <ArrowLeft changeSlide={() => swiper.slidePrev()}/>
        <ArrowRight changeSlide={() => swiper.slideNext()}/>

      </SectionLayout>
    </PageLayout>
  )
}

export default Home;
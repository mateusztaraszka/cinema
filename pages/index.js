import PageLayout from "../components/layouts/pageLayout";
import SectionLayout from "../components/layouts/sectionLayout";
import {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Autoplay} from 'swiper';
import Link from "next/link";
import {ArrowLeft, ArrowRight} from "../components/arrows";
import Button from "../components/button";

SwiperCore.use([Autoplay, Navigation]);
import 'swiper/css';


const data = [
  {
    title: 'Joker',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel congue orci.' +
      ' Praesent maximus ipsum vel posuere feugiat.' +
      ' Pellentesque tortor massa, pharetra nec maximus ullamcorper.',
    img: './../public/images/joker.png'
  },
  {
    title: 'Joker',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel congue orci.' +
      ' Praesent maximus ipsum vel posuere feugiat.' +
      ' Pellentesque tortor massa, pharetra nec maximus ullamcorper.',
    img: './../public/images/joker.png'
  },
  {
    title: 'Joker',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel congue orci.' +
      ' Praesent maximus ipsum vel posuere feugiat.' +
      ' Pellentesque tortor massa, pharetra nec maximus ullamcorper.',
    img: './../public/images/joker.png'
  },
  {
    title: 'Joker',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel congue orci.' +
      ' Praesent maximus ipsum vel posuere feugiat.' +
      ' Pellentesque tortor massa, pharetra nec maximus ullamcorper.',
    img: './../public/images/joker.png'
  },
]

const Home = () => {
  const [swiper, setSwiper] = useState(null);



  return (
    <PageLayout>
      <SectionLayout className={'container flex-1 bg-blue-darkest/50 rounded-xl'}>
        <h1 className={'text-blue uppercase text-2xl font-bold text-center mb-8'}>Dostępne filmy</h1>
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
                <div className={`bg-[url('../public/images/joker.png')] h-[550px] w-[977px] bg-cover relative`}>
                  <div className={'absolute right-8 bottom-8'}>
                    <Link href={'/movies/joker'} passHref>
                      <Button>Detale</Button>
                    </Link>
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
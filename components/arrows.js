import Image from "next/image";
import Arrow from '../public/images/arrow.png';

const clickAnimation = (id) => {
  let arrow = document.getElementById(id)
  arrow.classList.add('arrowClick', 'pointer-events-none')
  setTimeout(() => arrow.classList.remove('arrowClick', 'pointer-events-none'), 2000)
}

export const ArrowLeft = ({changeSlide}) => {
  return (
    <div id={'prevArrow'} className={'absolute arrow bottom-8 flex items-center left-[3.9rem] cursor-pointer'}
         onClick={() => {
           changeSlide()
           clickAnimation('prevArrow')
         }}>
      <Image className={'-rotate-180'} src={Arrow} height={45} width={70} alt={''}/>
    </div>
  )
}

export const ArrowRight = ({changeSlide}) => {
  return (
    <div id={'nextArrow'} className={'absolute bottom-8 flex  items-center right-16 cursor-pointer'}
         onClick={() => {
           changeSlide()
           clickAnimation('nextArrow')
         }}>
      <Image src={Arrow} height={45} width={70} alt={''}/>
    </div>
  )
}
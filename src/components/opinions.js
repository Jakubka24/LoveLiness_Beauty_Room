import React from 'react'
import kamila from '../assets/kamila.jpg'
import patrycja from '../assets/patrycja.jpg'
import anna from '../assets/anna.jpg'
import { RiStarSFill } from "react-icons/ri";
import { useInView } from 'framer-motion'
import { useRef } from 'react'


export default function Opinions() {

  const isMobile = window.innerWidth <= 720;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
    style={{
      transform: isInView ? "none" : "",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
    }} 
    ref={ref}
    id='opinions'
    className='bg-white'>
      {isMobile ?
      <div className=' bg-white '>
      <div>
        <h1 className=' text-[4vh] mb-[5vh] p-5 text-center text-yellow-600'>Co mówią o nas klienci?</h1>
      </div>
      <div className='flex flex-col justify-around italic'>

      <div className='flex flex-col items-center bg-gray-200 rounded-lg mb-[10vh]  p-6'>
        <img className='rounded-full w-[25vw]  mt-[2vh] ' src={kamila}/>
        <p className='text-center mt-[1vh] p-2 '>"Perfekcyjne wykonanie! Manicure i pedicure były dokładne, a efekt końcowy przeszedł moje oczekiwania. Z pewnością będę regularnie tu wracać."</p>
        <div className='flex justify-center mt-[5vh] text-yellow-600 text-[3vh] '>
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        </div>
        <h1 className='uppercase mt-[2vh] text-center text-yellow-600'>Kamila Pietrucha</h1>
      </div>

      <div className='flex flex-col items-center mb-[10vh] bg-gray-200 rounded-lg  p-6'>
        <img className='rounded-full w-[25vw] mt-[2vh]' src={anna}/>
        <p className='text-center mt-[1vh] p-2'>"Salon, w którym spełniają się marzenia o pięknych paznokciach! Doświadczony personel, wysoka jakość usług i przyjemna atmosfera. Rewelacja!"</p>
        <div className='flex justify-center mt-[5vh] text-yellow-600 text-[3vh] '>
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        </div>
        <h1 className='uppercase mt-[2vh] text-center text-yellow-600'>Anna Ziębała</h1>
      </div>

      <div className='flex flex-col items-center bg-gray-200 rounded-lg p-6'>
        <img className='rounded-full w-[25vw] mt-[2vh]' src={patrycja}/>
        <p className='text-center mt-[1vh] p-2'>"Nie mogłabym być bardziej zadowolona! Wspaniała atmosfera, a moje paznokcie wyglądają świetnie. Polecam wszystkim, którzy szukają doskonałego miejsca na pielęgnację dłoni i stóp"</p>
        <div className='flex justify-center mt-[5vh] text-yellow-600 text-[3vh] '>
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        </div>
        <h1 className='uppercase mt-[2vh] text-center text-yellow-600'>Patrycja Martyniuk</h1>
      </div>


      </div>
      </div>
      :
      <div className='mb-[15vh]'>
      <div>
        <h1 className=' text-[4vh] p-16 text-center text-yellow-600'>Co mówią o nas klienci?</h1>
      </div>
      <div className='flex flex-row justify-around italic'>

      <div className='bg-gray-200 w-[30vw] h-[45vh] rounded-lg'>
        <img className='rounded-full w-[5vw] ml-[12.5vw] mt-[2vh]' src={kamila}/>
        <p className='text-center text-[2vh] mt-[1vh] p-2'>"Perfekcyjne wykonanie! Manicure i pedicure były dokładne, a efekt końcowy przeszedł moje oczekiwania. Z pewnością będę regularnie tu wracać."</p>
        <div className='flex justify-center mt-[5vh] text-yellow-600 text-[3vh] '>
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        </div>
        <h1 className='uppercase mt-[2vh] text-center text-yellow-600'>Kamila Pietrucha</h1>
      </div>

      <div className='bg-gray-200 w-[30vw] h-[45vh] rounded-lg'>
        <img className='rounded-full w-[5vw] ml-[12.5vw] mt-[2vh]' src={anna}/>
        <p className='text-center text-[2vh] mt-[1vh] p-2'>"Salon, w którym spełniają się marzenia o pięknych paznokciach! Doświadczony personel, wysoka jakość usług i przyjemna atmosfera. Rewelacja!"</p>
        <div className='flex justify-center mt-[5vh] text-yellow-600 text-[3vh] '>
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        </div>
        <h1 className='uppercase mt-[2vh] text-center text-yellow-600'>Anna Ziębała</h1>
      </div>

      <div className='bg-gray-200 w-[30vw] h-[45vh] rounded-lg'>
        <img className='rounded-full w-[5vw] ml-[12.5vw] mt-[2vh]' src={patrycja}/>
        <p className='text-center text-[2vh] mt-[1vh] p-2'>"Nie mogłabym być bardziej zadowolona! Wspaniała atmosfera, a moje paznokcie wyglądają świetnie. Polecam wszystkim, którzy szukają doskonałego miejsca na pielęgnację dłoni i stóp"</p>
        <div className='flex justify-center mt-[5vh] text-yellow-600 text-[3vh] '>
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        </div>
        <h1 className='uppercase mt-[2vh] text-center text-yellow-600'>Patrycja Martyniuk</h1>
      </div>


      </div>
      </div>}
    </section>

  )
}

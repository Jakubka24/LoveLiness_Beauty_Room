import React from 'react'

import image from '../assets/certyfikat.png'
import { useInView } from 'framer-motion'
import { useRef } from 'react'



export default function Training() {

  const isMobile = window.innerWidth <= 720;


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
    ref={ref} 
    id='training' 
    className='text-light'
    style={{
      transform: isInView ? "none" : "",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}
    >
    
    {
      isMobile ?
      <div 
   
      className=' bg-white'>
        <div className='flex flex-col '>
        <h1 className='md:hidden text-yellow-600 uppercase text-[4vh] mt-[4vh] text-center mb-[5vh] visible'>Szkolenia</h1>
        <img className=' ' src={image}/>
        <div className='flex flex-col items-center'>
        <h1 className='hidden'>Szkolenia</h1>
        <p className='leading-8 text-center text-[2vh] italic p-6'>
      Nasz program szkoleniowy skupia się na pasji do profesjonalnej stylizacji paznokci, oferując warsztaty prowadzone przez doświadczoną instruktorkę. Kursy skierowane są do entuzjastów, którzy pragną zgłębić tajniki zdobienia paznokci.<br/>
  
      Organizujemy zajęcia raz w miesiącu w wybrane weekendy, by dopasować je do harmonogramów uczestników. Każdy z nich otrzymuje wyjątkowy zestaw startowy o wartości 500 zł, gwarantujący niezbędne produkty do praktyki.<br/>
  
      Po ukończeniu szkolenia uczestnicy otrzymują 10 certyfikatów oraz dyplom, stanowiące solidną podstawę w ich rozwoju zawodowym. Dodatkowo oferujemy grupę wsparcia, umożliwiającą wymianę doświadczeń i kontynuację rozwoju, a także elastyczne opcje płatności ratalnych ułatwiające udział w kursie.<br/>
  
      Jeśli pragniesz rozwijać umiejętności w profesjonalnym zdobieniu paznokci, serdecznie zapraszamy do udziału w naszych szkoleniach, gdzie znajdziesz wsparcie, inspirację i wiedzę niezbędną do osiągnięcia doskonałości w tej dziedzinie.
  
      Harmonogram szkoleń można znależć <a className='text-yellow-600 font-bold ' href='https://www.instagram.com/paula_gruszczynska_instruktor/'>tutaj.</a>
        </p>

        </div>
      
        </div>
      </div>

      :

      <div className='h-[110vh] bg-white '>

      <div className='flex flex-row '>
      <img className=' h-[110vh]' src={image}/>

      <div className='flex flex-col items-center ml-[10vw] mt-[10vh]'>
 
      <h1 className='uppercase text-[4vh]  mt-[4vh]  text-yellow-600'>Szkolenia</h1>
      <p className='w-[45vw] text-[2vh] leading-5 text-center italic  border-b border-yellow-600 p-5         lg:leading-10 lg:w-[40'>
      Nasz program szkoleniowy skupia się na pasji do profesjonalnej stylizacji paznokci, oferując warsztaty prowadzone przez doświadczoną instruktorkę. Kursy skierowane są do entuzjastów, którzy pragną zgłębić tajniki zdobienia paznokci.<br/>
  
      Organizujemy zajęcia raz w miesiącu w wybrane weekendy, by dopasować je do harmonogramów uczestników. Każdy z nich otrzymuje wyjątkowy zestaw startowy o wartości 500 zł, gwarantujący niezbędne produkty do praktyki.<br/>
  
      Po ukończeniu szkolenia uczestnicy otrzymują 10 certyfikatów oraz dyplom, stanowiące solidną podstawę w ich rozwoju zawodowym. Dodatkowo oferujemy grupę wsparcia, umożliwiającą wymianę doświadczeń i kontynuację rozwoju, a także elastyczne opcje płatności ratalnych ułatwiające udział w kursie.<br/>
  
      Jeśli pragniesz rozwijać umiejętności w profesjonalnym zdobieniu paznokci, serdecznie zapraszamy do udziału w naszych szkoleniach, gdzie znajdziesz wsparcie, inspirację i wiedzę niezbędną do osiągnięcia doskonałości w tej dziedzinie.
  
      Harmonogram szkoleń można znależć <a className='text-yellow-600 font-bold' href='https://www.instagram.com/paula_gruszczynska_instruktor/'>tutaj.</a>
      </p>
      </div>
     
      </div>
      </div>

    }

    </section>
  )
}

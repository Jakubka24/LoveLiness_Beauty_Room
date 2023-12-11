import React from 'react'
import location from '../assets/salon.jpg'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Location() {  

  const isMobile = window.innerWidth <= 720;


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
    ref={ref}
    id="location" 
    className='font-light'
    style={{
      transform: isInView ? "none" : "",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"}}
    >


    {
      isMobile ?
      <div className='flex flex-col text-white'>
      <div className='mt-[5vh]'>
        <h1 className='text-[5vh] mb-[5vh] text-center'>Odwiedź nasze studio!</h1>
        <img src={location}/>
        <p className='text-[2vh] mb-[5vh] p-6 leading-8 text-center italic mt-[2vh] '>
        Zadbaj o wyjątkowy wygląd swoich paznokci w Loveliness Beauty Room. Nasze centrum to miejsce pełne pasji i zaangażowania, w którym oferujemy wysokiej jakości stylizację paznokci zarówno u stóp, jak i dłoni. Świadomość kobiecej natury jest kluczowa, dlatego skupiamy się na profesjonalnym manicure i pedicure, podkreślając tym samym najcenniejsze atuty każdej kobiety.

        Jako profesjonaliści, nieustannie śledzimy najnowsze trendy w branży, stale poszerzając naszą wiedzę poprzez uczestnictwo w szkoleniach i nowoczesnych kursach. Nasza pasja motywuje nas do ciągłego rozwoju umiejętności, co gwarantuje, że nasze usługi są na najwyższym poziomie.

        Serdecznie zapraszamy do naszego salonu, położonego przy ul. Bagrowa 80/44 w Krakowie, gdzie troszczymy się o wyjątkowy wygląd paznokci oraz komfort każdej naszej klientki
        </p>
      
      <div className='text-center mb-[5vh]'>
        <button className='btn mr-[5vw] p-[1vh] border-2 border-white uppercase text-[3vw] text-center '>Zarezerwuj wizytę</button>
        <button className='btn border-2 p-[1vh] border-white uppercase text-[3vw] text-center'>Pokaż na mapie</button>
      </div>
      </div> 
     
      </div>

      :

      <div className='flex h-[100vh] text-white'>

        <div className='w-[55vw] mt-[5vh]'>
        <h1 className='text-[6vh] mb-[5vh] mx-10 text-center'>Odwiedź nasze studio!</h1>
        <p className='text-[2vh] mb-[10vh] mx-10 leading-5 text-center italic mt-[10vh]         lg:leading-10'>
        Zadbaj o wyjątkowy wygląd swoich paznokci w Loveliness Beauty Room. Nasze centrum to miejsce pełne pasji i zaangażowania, w którym oferujemy wysokiej jakości stylizację paznokci zarówno u stóp, jak i dłoni. Świadomość kobiecej natury jest kluczowa, dlatego skupiamy się na profesjonalnym manicure i pedicure, podkreślając tym samym najcenniejsze atuty każdej kobiety.

        Jako profesjonaliści, nieustannie śledzimy najnowsze trendy w branży, stale poszerzając naszą wiedzę poprzez uczestnictwo w szkoleniach i nowoczesnych kursach. Nasza pasja motywuje nas do ciągłego rozwoju umiejętności, co gwarantuje, że nasze usługi są na najwyższym poziomie.

        Serdecznie zapraszamy do naszego salonu, położonego przy ul. Bagrowa 80/44 w Krakowie, gdzie troszczymy się o wyjątkowy wygląd paznokci oraz komfort każdej naszej klientki
        </p>
      
      <div className='text-center mt-[10vh]'>
        <button className='btn mr-[2vw] border-2 border-white  w-[9vw] h-[5vh] uppercase text-[0.75vw] text-center '>Zarezerwuj wizytę</button>
        <button className='btn border-2 border-white w-[9vw] h-[5vh] uppercase text-[0.75vw] text-center'>Pokaż na mapie</button>
      </div>
      </div>
      <img className='w-[55vw] h-[100vh]' src={location}/>
      </div>

    }

      
    </section>
  )
}

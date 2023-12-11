import React from 'react'
import image from '../assets/podologia.jpg'
import { useInView } from 'framer-motion'
import { useRef } from 'react'


export default function Podologia() {

  const isMobile = window.innerWidth <= 720


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
    ref={ref}
    id='podiatry' 
    style={{
      transform: isInView ? "none" : "",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
    }}>
    
    {isMobile ?
        <div className='flex flex-col justify-between bg-white '>

        <div className='mt-[5vh] mb-[5vh] '>
        <h1 className='text-center text-[5vh] mb-[5vh] text-yellow-600 '>Podologia</h1>
        <img className='' src={image}/>
        <p className='p-5 mt-[2vh] text-[2vh] leading-10 italic text-center'>
        Podologia, będąca dziedziną medycyny, specjalizuje się w kompleksowej opiece nad stopami, będącymi fundamentem naszego codziennego funkcjonowania. Specjaliści podologiczni, czyli podolodzy, to wyszkoleni profesjonaliści, którzy nie tylko diagnozują, lecz także leczą i zapobiegają różnorodnym schorzeniom stóp. Ich praktyka obejmuje szeroki zakres działań, od pielęgnacji skóry i paznokci po ocenę biomechaniki stóp oraz terapię zmian chorobowych.<br/>

        W kontekście pielęgnacji, podolodzy dokładają wszelkich starań, aby nie tylko łagodzić dolegliwości, lecz także zapewnić pacjentom komfort i funkcjonalność stóp. Poprzez zastosowanie różnorodnych metod, od tradycyjnych po nowoczesne techniki terapeutyczne, podolodzy dążą do poprawy jakości życia poprzez zapewnienie zdrowia stóp.<br/>

        Zasadniczym celem ich pracy jest prewencja, czyli zapobieganie problemom związanym ze stopami oraz promowanie zdrowego stylu życia. Współpracują z pacjentami, doradzając im w kwestiach profilaktyki, pielęgnacji i doboru odpowiednich obuwia.<br/>

        W naszym renomowanym salonie kosmetycznym, poświęcamy szczególną uwagę na kompleksową opiekę nad stopami poprzez usługi podologiczne, które są świadczone z troską i zaangażowaniem. Dzięki naszym doświadczonym specjalistom podologicznym, zapewniamy klientom nie tylko zdrowie, ale także estetykę ich stóp, mając na uwadze ich pełne zadowolenie i komfort. Pełny zakres usług podologicznych można znależć <a className='text-yellow-600 font-bold' href='https://booksy.com/pl-pl/104409_loveliness-beauty-room-stylizacja-paznokci-podologia_paznokcie_8820_krakow'>tutaj.</a>
        </p>
        </div>
  

    </div> 
    :
    <div
    className='flex flex-row justify-between bg-white'>


    <div className='mt-[5vh] ml-[5vw] p-5 '>
    <h1 className='text-center text-[5vh] text-yellow-600 '>Podologia</h1>
    <p className='w-[50vw] mt-[7vh] text-[2vh] leading-4 italic text-center border-b border-yellow-600 pb-[10vh]           lg:leading-8'>
    Podologia, będąca dziedziną medycyny, specjalizuje się w kompleksowej opiece nad stopami, będącymi fundamentem naszego codziennego funkcjonowania. Specjaliści podologiczni, czyli podolodzy, to wyszkoleni profesjonaliści, którzy nie tylko diagnozują, lecz także leczą i zapobiegają różnorodnym schorzeniom stóp. Ich praktyka obejmuje szeroki zakres działań, od pielęgnacji skóry i paznokci po ocenę biomechaniki stóp oraz terapię zmian chorobowych.<br/>

    W kontekście pielęgnacji, podolodzy dokładają wszelkich starań, aby nie tylko łagodzić dolegliwości, lecz także zapewnić pacjentom komfort i funkcjonalność stóp. Poprzez zastosowanie różnorodnych metod, od tradycyjnych po nowoczesne techniki terapeutyczne, podolodzy dążą do poprawy jakości życia poprzez zapewnienie zdrowia stóp.<br/>

    Zasadniczym celem ich pracy jest prewencja, czyli zapobieganie problemom związanym ze stopami oraz promowanie zdrowego stylu życia. Współpracują z pacjentami, doradzając im w kwestiach profilaktyki, pielęgnacji i doboru odpowiednich obuwia.<br/>

    W naszym renomowanym salonie kosmetycznym, poświęcamy szczególną uwagę na kompleksową opiekę nad stopami poprzez usługi podologiczne, które są świadczone z troską i zaangażowaniem. Dzięki naszym doświadczonym specjalistom podologicznym, zapewniamy klientom nie tylko zdrowie, ale także estetykę ich stóp, mając na uwadze ich pełne zadowolenie i komfort. Pełny zakres usług podologicznych można znależć <a className='text-yellow-600 font-bold' href='https://booksy.com/pl-pl/104409_loveliness-beauty-room-stylizacja-paznokci-podologia_paznokcie_8820_krakow'>tutaj.</a>
    </p>
    </div>

    <img className='h-[100vh] ' src={image}/>
</div>

    }
    </section>

  )
}

import React from 'react'
import image from '../assets/paulina.jpg'
import image2 from '../assets/madzia.jpg'
import image3 from '../assets/julia.jpg'
import image4 from '../assets/weronika.jpg'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Stylists() {

const isMobile = window.innerWidth <= 720

const ref = useRef(null);
const isInView = useInView(ref, { once: true });

  return (
   
<section
ref={ref} 
id='stylists' 
className ='font-light'> 
  {isMobile ?
  <div>
    <h1 className='text-center mt-6 text-[5vh]'></h1>

<div className='flex flex-col justify-around items-center mb-[15vh] text-white'>
  <h1 className= 'uppercase text-center text-[4vh] mb-[5vh]          max-sm:text-center max-sm:text-[3vh] max-sm:mt-0'>Nasze stylistki</h1>
  
  <div
   style={{
    transform: isInView ? "none" : "",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
  }} 
  className='flex flex-col p-6 items-center w-[100vw]'>
    <img className='border border-yellow-600 p-2  w-[15vh] rounded-full mb-4' src={image}></img>
    <h2 className='text-[3vh] text-center mb-4'>Paulina Gruszczyńska</h2>
    <h3 className='text-[2vh] mb-4 uppercase'>Stylistka paznokci, podolog</h3>
    <p className='text-center text-[2vh] leading-8 text italic'>Z ogromną pasją i zaangażowaniem od dziesięciu lat zajmuje się sztuką stylizacji paznokci jako założycielka Loveliness Beauty Room. Jej droga do mistrzostwa w tej dziedzinie była pełna wyzwań i ciężkiej pracy, co zaowocowało uzyskaniem niezależnego tytułu Instruktora Stylizacji Paznokci oraz Podologa. Technika paznokci stanowi obszar, który wzbudza jej niesłabnące zainteresowanie i fascynację. Niezależnie od rodzaju przedłużania paznokci czy konstrukcji żelowych, kładzie nacisk na perfekcyjne wykonanie i precyzyjną budowę.

    W Loveliness Beauty Room dba o każdy detal, zapewniając nie tylko estetyczny wygląd, ale przede wszystkim zdrowie paznokci klientów. Oprócz wysokiej jakości usług podologicznych w salonie, prowadzi także weekendowe szkolenia ze stylizacji paznokci. To dla niej nie tylko praca, ale także sposób na dzielenie się pasją i wiedzą z kolejnymi adeptami sztuki manicure'u.

    Doceniane przez klientki jest tempo jej pracy, oparte na skrupulatności i staranności. Dąży do zapewnienia każdej osobie nie tylko doskonałego wyglądu paznokci, ale także komfortu i satysfakcji z efektów wspólnej pracy. Z przyjemnością podejmuje każde wyzwanie związane z paznokciami, zawsze z myślą o dostarczeniu najwyższej jakości usług i tworzeniu wyjątkowego doświadczenia dla klientów. 
    </p>
</div>

  <div 
   style={{
    transform: isInView ? "none" : "",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s"
  }}
  className='flex flex-col justify-around '>

  <div className='flex flex-col p-6 items-center'>
    <img className='border border-yellow-600  p-2 w-[20vw] rounded-full mb-4' src={image2}></img>
    <h2 className='text-center text-[2.5vh] mb-2'>Magdalena Suder</h2>
    <h3 className='text-[1.8vh] mb-4 uppercase text-center'>Stylistka paznokci, brwi oraz rzęs</h3>
    <p className='text-center text-[1.8vh] leading-8 italic '>Jako doświadczona stylistka paznokci, wykazuje pasję do różnorodnych zdobień paznokci. Jej specjalność to precyzyjne stylizacje hybrydowe, które są wyrazem jej unikalnych umiejętności. Zawsze pełna pomysłów, nawet w przypadku klientek poszukujących inspiracji.<br/>

    Dodatkowo, oferuje kompleksowe usługi z zakresu stylizacji brwi i rzęs. Dbałość o estetykę oraz perfekcyjne wykonanie stanowią fundamenty jej pracy, a priorytetem jest satysfakcja i zadowolenie klientek z efektów zabiegów. </p>
  </div>
  
  <div className='flex flex-col p-6 items-center'>
    <img className='border border-yellow-600 p-2  w-[20vw] rounded-full mb-4' src={image4}></img>
    <h2 className='text-center text-[2.5vh] mb-2'>Weronika Duma </h2>
    <h3 className='text-[1.8vh] mb-4 uppercase text-center'>Stylistka paznokci</h3>
    <p className='text-center text-[1.8vh] leading-8 italic '>Weronika to doświadczona stylistka paznokci, która od dwóch lat z powodzeniem współpracuje w zespole. Z zaangażowaniem w każdy detal, Weronika reprezentuje perfekcjonizm, dbając o wysoką jakość swoich stylizacji. Z pasją zdobi paznokcie, zachwycając klientki różnorodnością wykonanych stylizacji.

Dodatkowo, jej umiejętność tworzenia doskonałych fotografii wykonanych paznokci idzie w parze z doskonałym poczuciem humoru. Klienci cenią sobie nie tylko profesjonalizm, ale także atmosferę pełną pozytywnej energii, którą Weronika wprowadza podczas każdej wizyty. </p>
  </div>

  <div className='flex flex-col p-6 items-center '>
    <img className='border border-yellow-600 p-2 w-[20vw] rounded-full mb-4' src={image3}></img>
    <h2 className='text-center text-[2vh] mb-4'>Julia Słuszniak</h2>
    <h3 className='text-[1.8vh] mb-4 uppercase text-center'>Stylistka paznokci</h3>
    <p className='text-center text-[1.8vh] leading-8 italic '>Julka, stylistka paznokci, dołączyła do naszego zespołu w sierpniu. Szybko zdobyła uznanie klientek, nie tylko za wysokie umiejętności w wykonywaniu stylizacji, lecz także za swoją osobowość. Jeśli poszukujesz specjalistki, która ma wprawę w tworzeniu długich, żelowych paznokci, koniecznie umów się na wizytę z Julką. Jej specjalnością jest technika i metoda żelowa, a także pasja do zdobień biżuteryjnych 3D. Paznokcie, które wykonuje, zawsze wyróżniają się wyjątkowością i starannością w wykonaniu.</p>
</div>
    
  </div>
  

</div>
  </div>

  :

  <div >
    <h1 className='text-center mt-6 text-[5vh]'></h1>

  <div
  className='flex flex-col justify-around mt-10 items-center mb-[15vh] text-white '>
      
      <div
       style={{
        transform: isInView ? "none" : "",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
      }}
      className='flex flex-col p-6 items-center w-[90vw]'>
      <h1 className= 'uppercase text-center text-[4vh] mb-[5vh]'>Nasze stylistki</h1>
      <img className='border border-yellow-600 p-2 w-[12vw] rounded-full mb-4' src={image}></img>
      <h2 className='text-[4vh] text-center mb-4'>Paulina Gruszczyńska</h2>
      <h3 className='text-[2vh] uppercase'>Stylistka paznokci, podolog</h3>
      <p className='text-[2vh] leading-6 text-center italic p-6          lg:leading-10'>Z ogromną pasją i zaangażowaniem od dziesięciu lat zajmuje się sztuką stylizacji paznokci jako założycielka Loveliness Beauty Room. Jej droga do mistrzostwa w tej dziedzinie była pełna wyzwań i ciężkiej pracy, co zaowocowało uzyskaniem niezależnego tytułu Instruktora Stylizacji Paznokci oraz Podologa. Technika paznokci stanowi obszar, który wzbudza jej niesłabnące zainteresowanie i fascynację. Niezależnie od rodzaju przedłużania paznokci czy konstrukcji żelowych, kładzie nacisk na perfekcyjne wykonanie i precyzyjną budowę.

      W Loveliness Beauty Room dba o każdy detal, zapewniając nie tylko estetyczny wygląd, ale przede wszystkim zdrowie paznokci klientów. Oprócz wysokiej jakości usług podologicznych w salonie, prowadzi także weekendowe szkolenia ze stylizacji paznokci. To dla niej nie tylko praca, ale także sposób na dzielenie się pasją i wiedzą z kolejnymi adeptami sztuki manicure'u.

      Doceniane przez klientki jest tempo jej pracy, oparte na skrupulatności i staranności. Dąży do zapewnienia każdej osobie nie tylko doskonałego wyglądu paznokci, ale także komfortu i satysfakcji z efektów wspólnej pracy. Z przyjemnością podejmuje każde wyzwanie związane z paznokciami, zawsze z myślą o dostarczeniu najwyższej jakości usług i tworzeniu wyjątkowego doświadczenia dla klientów. 
      </p>
  </div>



    <div 
     style={{
      transform: isInView ? "none" : "",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
    }}
    className='flex flex-row justify-around '>
      <div className='flex flex-col p-6 items-center  w-[28vw] '>
      <img className='border border-yellow-600  p-2 w-[12vw] rounded-full mb-4 ' src={image2}></img>
      <h2 className='text-center text-[4vh] mb-4 '>Magdalena Suder</h2>
      <h3 className='text-[2vh] mb-8 uppercase '>Stylistka paznokci, brwi oraz rzęs</h3>
      <p className='text-center text-[2vh] leading-6 italic         lg:leading-10'>Jako doświadczona stylistka paznokci, wykazuje pasję do różnorodnych zdobień paznokci. Jej specjalność to precyzyjne stylizacje hybrydowe, które są wyrazem jej unikalnych umiejętności. Zawsze pełna pomysłów, nawet w przypadku klientek poszukujących inspiracji.<br/>

      Dodatkowo, oferuje kompleksowe usługi z zakresu stylizacji brwi i rzęs. Dbałość o estetykę oraz perfekcyjne wykonanie stanowią fundamenty jej pracy, a priorytetem jest satysfakcja i zadowolenie klientek z efektów zabiegów. </p>
      </div>
    
      <div className='flex flex-col p-6 items-center  w-[28vw] h-[75vh]'>
      <img className='border  border-yellow-600 p-2 w-[12vw] rounded-full mb-4' src={image4}></img>
      <h2 className='text-center text-[4vh] mb-4'>Weronika Duma </h2>
      <h3 className='text-[2vh] mb-8 uppercase'>Stylistka paznokci</h3>
      <p className='text-center text-[2vh] leading-6 italic         lg:leading-10'>Weronika to doświadczona stylistka paznokci, która od dwóch lat z powodzeniem współpracuje w zespole. Z zaangażowaniem w każdy detal, Weronika reprezentuje perfekcjonizm, dbając o wysoką jakość swoich stylizacji. Z pasją zdobi paznokcie, zachwycając klientki różnorodnością wykonanych stylizacji.

      Dodatkowo, jej umiejętność tworzenia doskonałych fotografii wykonanych paznokci idzie w parze z doskonałym poczuciem humoru. Klienci cenią sobie nie tylko profesjonalizm, ale także atmosferę pełną pozytywnej energii, którą Weronika wprowadza podczas każdej wizyty. </p>
      </div>

    <div className='flex flex-col p-6 items-center w-[28vw] h-[75vh] '>
      <img className='border   border-yellow-600 p-2 w-[12vw] rounded-full mb-4' src={image3}></img>
      <h2 className='text-center text-[4vh] mb-4'>Julia Słuszniak</h2>
      <h3 className='text-[2vh] mb-8 uppercase'>Stylistka paznokci</h3>
      <p className='text-center text-[2vh] leading-6 italic'>Julka, stylistka paznokci, dołączyła do naszego zespołu w sierpniu. Szybko zdobyła uznanie klientek, nie tylko za wysokie umiejętności w wykonywaniu stylizacji, lecz także za swoją osobowość. Jeśli poszukujesz specjalistki, która ma wprawę w tworzeniu długich, żelowych paznokci, koniecznie umów się na wizytę z Julką. Jej specjalnością jest technika i metoda żelowa, a także pasja do zdobień biżuteryjnych 3D. Paznokcie, które wykonuje, zawsze wyróżniają się wyjątkowością i starannością w wykonaniu.</p>
    </div>
  </div>


</div>
  </div>
  }
      </section>

  )
}

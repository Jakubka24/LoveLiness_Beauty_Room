import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from 'framer-motion'
import { useRef } from 'react'



import nails from '../assets/nails.jpeg'
import nails2 from '../assets/nails2.jpeg'
import nails3 from '../assets/nails3.jpeg'
import nails4 from '../assets/nails4.jpeg'
import nails5 from '../assets/nails5.jpeg'
import nails6 from '../assets/nails6.jpg'
import nails7 from '../assets/nails7.jpg'
import nails8 from '../assets/nails8.jpg'
import nails9 from '../assets/nails9.jpg'



import laminacja from '../assets/laminacja.jpg'
import laminacja2 from '../assets/laminacja2.jpg'
import laminacja3 from '../assets/laminacja3.jpg'
import laminacja4 from '../assets/laminacja4.jpg'
import laminacja5 from '../assets/laminacja5.jpg'
import laminacja6 from '../assets/laminacja6.jpg'


export default function Services() {

  const isMobile = window.innerWidth <= 720;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  
  const [NumberOfSlides,SetNumberOfSlides] = useState(3);
  const [showArrows,setShowArrows] = useState(true);

  const settings = {
    infinite: true,
    slidesToShow: NumberOfSlides,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    dots: true,
    arrows: showArrows,
      
  };



useEffect(()=>{isMobile ? SetNumberOfSlides(1) : SetNumberOfSlides(3) },[])
useEffect(()=>{isMobile ? setShowArrows(false) : setShowArrows(true)},[])

  return (
    
    <section
    ref={ref} 
    id='services' 
    className='text-white flex flex-col mb-[10vh] font-light'>
  

     {
      isMobile ?
      <div
      style={{
        transform: isInView ? "none" : "",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
      }}
    > 
      
      <h1 className='text-center mt-[10vh] text-[5vh]'>Usługi</h1>

      <p className='p-5 text-center text-[2vh] leading-10  italic'>

      W naszym renomowanym salonie kosmetycznym, zdrowie i piękno klientów są naszym priorytetem. Oferujemy szeroki zakres usług, które nie tylko podkreślają ich urodę, ale także dbają o ich komfort i dobre samopoczucie.

      Nasz zespół specjalistów zajmuje się kompleksową pielęgnacją dłoni i stóp poprzez profesjonalne manicure i pedicure. Stawiamy na różnorodne techniki i wysokiej jakości produkty, tworząc unikalne stylizacje paznokci, które odzwierciedlają indywidualny charakter każdej osoby.<br/>

      Dla naszych klientów, którym zależy na perfekcyjnym wyglądzie brwi, oferujemy usługi regulacji brwi. Nasze profesjonalne podejście do kształtowania brwi uwzględnia preferencje klienta, podkreślając naturalne cechy i piękno spojrzenia.

      Dodatkowo, dla osób pragnących trwałego i naturalnego efektu, proponujemy hennę brwi i rzęs. Poprzez staranne dopasowanie koloru henny, podkreślamy urodę, nadając wyrazistości spojrzeniu.

      W naszym salonie troszczymy się nie tylko o zewnętrzny wygląd, lecz także o ogólne dobre samopoczucie naszych klientów. Dzięki wykwalifikowanemu zespołowi i zaawansowanym technikom, każdy zabieg przynosi nie tylko efekt estetyczny, ale także relaks i satysfakcję.
</p>

      <a  className=' text-center text-sm italic' href='https://booksy.com/pl-pl/104409_loveliness-beauty-room-stylizacja-paznokci-podologia_paznokcie_8820_krakow?fbclid=IwAR2KnkgTYBbLypi1klEuTjqDao5pcclklFL4OEODQ0ywaiIwKIvJFsBLTa4#ba_s=sh_1'>
        <button className='items-center ml-[35vw] btn border-2  w-[11vw] h-[6vh] uppercase text-[1.75vw] text-center         max-sm:text-[1.1vh] max-sm:w-[30vw]'>Pełna oferta salonu</button></a>
      

      <div className='bg-bg-red-200 h-[120vh]'>
        
        
      <h2 className='text-center mt-[7vh] text-[3.5vh] mb-[5vh]'>manicure i pedicure</h2>

      <div>
        <Slider {...settings}>
            <img className=' w-[20vw] h-[45vh]' src={nails}></img>
            <img className=' w-[20vw] h-[45vh]' src={nails2}></img>
            <img className=' w-[20vw] h-[45vh]' src={nails3}></img>
            <img className=' w-[20vw] h-[45vh]' src={nails4}></img>
            <img className=' w-[20vw] h-[45vh]' src={nails5}></img>
            <img className=' w-[20vw] h-[45vh] ' src={nails6}></img>
        </Slider>
      </div>


      <h2 className='text-center mt-[15vh] text-[3.5vh] mb-[5vh]'>zabiegi na rzęsy i brwi</h2>

      <div>
        <Slider {...settings}>
            <img className='w-[2vw] h-[40vh]' src={laminacja}></img>
            <img className='w-[2vw] h-[40vh]' src={laminacja2}></img>
            <img className='w-[2vw] h-[40vh]' src={laminacja3}></img>
            <img className='w-[2vw] h-[40vh]' src={laminacja4}></img>
            <img className='w-[2vw] h-[40vh]' src={laminacja5}></img>
            <img className='w-[2vw] h-[40vh] 'src={laminacja6}></img>
        </Slider>
      </div>
   </div></div> 
   
   
   
   : 
      
      
      <div style={{
        transform: isInView ? "none" : "",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
      }}>  

      <h1 className='text-center mt-[10vh] text-[5vh]'>Usługi</h1>

      <p className='p-10 text-center text-[2vh] leading-6  italic         lg:leading-10'>W naszym renomowanym salonie kosmetycznym, zdrowie i piękno klientów są naszym priorytetem. Oferujemy szeroki zakres usług, które nie tylko podkreślają ich urodę, ale także dbają o ich komfort i dobre samopoczucie.

      Nasz zespół specjalistów zajmuje się kompleksową pielęgnacją dłoni i stóp poprzez profesjonalne manicure i pedicure. Stawiamy na różnorodne techniki i wysokiej jakości produkty, tworząc unikalne stylizacje paznokci, które odzwierciedlają indywidualny charakter każdej osoby.<br/>

      Dla naszych klientów, którym zależy na perfekcyjnym wyglądzie brwi, oferujemy usługi regulacji brwi. Nasze profesjonalne podejście do kształtowania brwi uwzględnia preferencje klienta, podkreślając naturalne cechy i piękno spojrzenia.

      Dodatkowo, dla osób pragnących trwałego i naturalnego efektu, proponujemy hennę brwi i rzęs. Poprzez staranne dopasowanie koloru henny, podkreślamy urodę, nadając wyrazistości spojrzeniu.

      W naszym salonie troszczymy się nie tylko o zewnętrzny wygląd, lecz także o ogólne dobre samopoczucie naszych klientów. Dzięki wykwalifikowanemu zespołowi i zaawansowanym technikom, każdy zabieg przynosi nie tylko efekt estetyczny, ale także relaks i satysfakcję.</p>

      <a  className=' text-center text-sm italic text-200-blue' href='https://booksy.com/pl-pl/104409_loveliness-beauty-room-stylizacja-paznokci-podologia_paznokcie_8820_krakow?fbclid=IwAR2KnkgTYBbLypi1klEuTjqDao5pcclklFL4OEODQ0ywaiIwKIvJFsBLTa4#ba_s=sh_1'>
        <button className='btn border-2  ml-[44vw]  border-white w-[11vw] h-[6vh] uppercase text-[0.75vw] text-center         max-sm:text-[1vh] max-sm:w-[30vw]'>Pełna oferta salonu</button></a>
      
      <div className='bg-bg-red-200 h-[160vh] '>
        
        
      

      <div className='text-black text-center ml-[5vw] mr-[5vw]'>
      <h2 className='text-center mt-[7vh] text-[3.5vh] mb-[5vh]'>manicure i pedicure</h2>
        <Slider {...settings}>
            <img className=' h-[60vh] p-[1vh]' src={nails}></img>
            <img className=' h-[60vh] p-[1vh]' src={nails2}></img>
            <img className=' h-[60vh] p-[1vh]' src={nails3}></img>
            <img className=' h-[60vh] p-[1vh]' src={nails4}></img>
            <img className=' h-[60vh] p-[1vh]' src={nails5}></img>
            <img className=' h-[60vh] p-[1vh]' src={nails6}></img>
            <img className=' h-[60vh] p-[1vh]' src={nails7}></img>
            <img className=' h-[60vh] p-[1vh]' src={nails8}></img>
            <img className=' h-[60vh] p-[1vh]' src={nails9}></img>
        </Slider>
      </div>


     

      <div className='text-black text-center ml-[5vw] mr-[5vw]'>
      <h2 className='text-center mt-[15vh] text-[3.5vh] mb-[5vh]'>zabiegi na rzęsy i brwi</h2>
        <Slider {...settings}>
            <img className=' h-[60vh] p-[1vh]' src={laminacja}></img>
            <img className=' h-[60vh] p-[1vh]' src={laminacja2}></img>
            <img className=' h-[60vh] p-[1vh]' src={laminacja3}></img>
            <img className=' h-[60vh] p-[1vh]' src={laminacja4}></img>
            <img className=' h-[60vh] p-[1vh]' src={laminacja5}></img>
            <img className=' h-[60vh] p-[1vh]' src={laminacja6}></img>
        </Slider>
      </div>

   </div>
   </div>
     }
   </section>

  )
}



import React from 'react'
import { MdPhone } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import booksy from '../assets/booksy.png'
import { useInView } from 'framer-motion'
import { useRef } from 'react'





export default function Fotter() {


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, thresold:0.5 });

  const isMobile = window.innerWidth <= 720;


  return (

     <section 
     ref={ref}
     id='fotter'
     style={{
      transform: isInView ? "none" : "",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
    }}
     className='flex flex-col justify-center text-center h-[25vh] text-white font-thin items-center  '>
    <div>
    <div className='flex'>
      <a href='https://www.facebook.com/lovelinesspaulinanowocien'>
      <FaFacebook className='ml-[2vh] mr-[3vh] text-[3vh]  cursor-pointer' />
      </a>
    
    <a href='https://www.instagram.com/loveliness_beauty_room/'>
    <LuInstagram className='mr-[3vh] text-[3vh]  cursor-pointer'/>
    </a>
    
    <a href='https://booksy.com/pl-pl/104409_loveliness-beauty-room-stylizacja-paznokci-podologia_paznokcie_8820_krakow'>
    <img className='h-[3.3vh]' src={booksy}/>
    </a>

    </div>
    </div>
    <p className='text-[1.8vh] mt-[3vh] tracking-widest'>ul Bagrowa 80, 30-733 Kraków</p>
    <div className='flex mt-[2vh]'>
      <p className='mr-[1vw] text-[2.2vh]'><MdPhone/></p>
      <p className='text-[1.6vh] tracking-widest'> <span className='mr-[0.2vw]'>+ 48</span> 796 069 404 </p>
    </div>
    <div className='flex mt-[1vh]'>
    <p className='mr-[1vw] text-[2.2vh]'><FaEnvelope/></p>
      <p className='text-[1.6vh] tracking-widest '> lovelinessbeautyroom@gmail.com </p>
    </div>

     </section>
  )
}


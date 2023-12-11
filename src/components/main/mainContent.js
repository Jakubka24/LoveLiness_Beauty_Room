import React, { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'



export default function MainContent() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

    const [isVisible,setIsVisible] = useState(false);

    useEffect(()=>{
      setIsVisible(true)
    },[])


    const isMobile = window.innerWidth <= 720;

  return (

    
    <div 
    ref={ref}
    style={{
      transform: isInView ? "none" : "",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
    }}
    className='uppercase tracking-widest'> 
        
        {isMobile ? 
        
        <div>
          <h1 className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2  top-[40%] w-[70vw] text-[3vh] text-center '>
          Twoje paznokcie, nasza pasja
          </h1>

         <button className='btn border-2 border-white absolute inset-1/2 transform -translate-x-1/2 top-[50%] w-[30vw] h-[4vh] uppercase text-[2.5vw] text-center'>
          Zarezerwuj wizytę
          </button> 
        </div>
         
         :

        <div>

            <h1 className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2  top-[40%] w-[40vw] text-[5vh] text-center'>
            Twoje paznokcie,<br/> nasza pasja
            </h1>
        

         <button className='btn border-2 border-white absolute inset-1/2 transform -translate-x-1/2 top-[55%] w-[9vw] h-[5vh] uppercase text-[0.75vw] text-center'>
         <a href='https://booksy.com/pl-pl/104409_loveliness-beauty-room-stylizacja-paznokci-podologia_paznokcie_8820_krakow'> Zarezerwuj wizytę</a>
          </button> 
        </div> 
        }
 
          
    </div>
  )
}

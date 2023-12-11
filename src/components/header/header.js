import React, { useState, useEffect } from 'react'
import Media from './media'
import {AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-scroll'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Header() {

  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});



const isMobile = window.innerWidth <= 720;

  const [showMenu,setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (

    isMobile ? 
    <div ref={ref}
    style={{
      transform: isInView ? "none" : "",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
    }}>
      <Media/>

    {showMenu ? 
    
    <div>
   <AiOutlineMenu
    onClick={handleMenu} 
    className='absolute right-[2vw] top-[2vh] text-[4vh] cursor-pointer '
    />
      <ul className=' absolute text-[1.4vh] right-[2vw] top-[6vh] leading-[4vh] text-center italic cursor-pointer tracking-widest font-light rounded-full'>
      
      <Link
        to='services'
        smooth = {true}
        duration={500}
        >
        <li className='nav w-[25vw] border-b bg-black'>Usługi</li>  
        </Link>

        <Link
        to='podiatry'
        smooth = {true}
        duration={500}
        >
        <li className='nav w-[25vw] border-b bg-black'>Podologia</li>
        </Link>

        <Link
        to='stylists'
        smooth = {true}
        duration={500}>
        <li className='nav w-[25vw] border-b bg-black'>Zespół</li>
        </Link>
        
        <Link
        to='training'
        smooth = {true}
        duration={500}
        >
        <li className='nav w-[25vw] border-b bg-black'>Szkolenia</li>
        </Link>
        
        <Link
        to='location'
        smooth = {true}
        duration={500}
        >
        <li className='nav w-[25vw] border-b bg-black'>Salon</li>
        </Link>

        <Link
        to='opinions'
        smooth = {true}
        duration={500}
        >
        <li className='nav w-[25vw] border-b bg-black'>Opinie</li>
        </Link>

        
        <Link
        to='fotter'
        smooth = {true}
        duration={500}
        >
        <li className='nav w-[25vw]  bg-black'>Kontakt</li>
        </Link>
        
      </ul>
    </div>
     :  
    <AiOutlineMenu 
    onClick={handleMenu} 
    className='absolute right-[2vw] text-[4vh] top-[2vh] cursor-pointer'/>
    
    }
   
    </div>

    : 
    <div
    ref={ref}
    style={{
      transform: isInView ? "none" : "",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
    }}>
      <Media/>

    {showMenu ? 
    
    <div>
   <AiOutlineMenu
    onClick={handleMenu} 
    className='absolute right-[2vw] top-[2vh] text-[4vh] cursor-pointer '
    />
      <ul className=' absolute text-[1.6vh] right-[2vw] top-[6vh] leading-[5.7vh] text-center italic cursor-pointer tracking-widest font-light rounded-full'>
      
      <Link
        to='services'
        smooth = {true}
        duration={500}
        >
        <li className='nav w-[10vw] border-b bg-black'>Usługi</li>  
        </Link>

        <Link
        to='podiatry'
        smooth = {true}
        duration={500}
        >
        <li className='nav w-[10vw] border-b bg-black'>Podologia</li>
        </Link>

        <Link
        to='stylists'
        smooth = {true}
        duration={500}>
        <li className='nav w-[10vw] border-b bg-black'>Zespół</li>
        </Link>
        
        <Link
        to='training'
        smooth = {true}
        duration={500}
        >
        <li className='nav w-[10vw] border-b bg-black'>Szkolenia</li>
        </Link>
        
        <Link
        to='location'
        smooth = {true}
        duration={500}
        >
        <li className='nav w-[10vw] border-b bg-black'>Salon</li>
        </Link>

        <Link
        to='opinions'
        smooth = {true}
        duration={500}
        >
        <li className='nav w-[10vw] border-b bg-black'>Opinie</li>
        </Link>

        
        <Link
        to='fotter'
        smooth = {true}
        duration={500}
        >
        <li className='nav w-[10vw]  bg-black'>Kontakt</li>
        </Link>
        
      </ul>
    </div>
     :  
    <AiOutlineMenu 
    onClick={handleMenu} 
    className='absolute right-[2vw] text-[4vh] top-[2vh] cursor-pointer'/>
    
    }
    </div>

  )

};




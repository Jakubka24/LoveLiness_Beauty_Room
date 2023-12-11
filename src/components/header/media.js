import React from 'react'
import {BiEnvelope, BiLogoFacebook, BiLogoInstagram} from 'react-icons/bi'
import booksy from '../../assets/booksy.png'



export default function Media() {

  const isMobile = window.innerWidth <= 720;

  return (
    <div>
    { isMobile ? 
   
      <div className='flex justify-between p-[2.5vh] w-[35vw]'>
        <a href='https://www.instagram.com/loveliness_beauty_room/'>
        <BiLogoInstagram className=' text-[2.5vh] cursor-pointer'/>
        </a>
       
       <a href='https://www.facebook.com/lovelinesspaulinanowocien'>
       <BiLogoFacebook className='text-[2.5vh] cursor-pointer'/>
       </a>
       
       <a href='https://booksy.com/pl-pl/104409_loveliness-beauty-room-stylizacja-paznokci-podologia_paznokcie_8820_krakow'>
       <img className='h-[2.85vh]' src={booksy}></img>
       </a>
       
      </div>
  :

  
    <div className='flex justify-between p-[3vh] w-[10vw] ml-[2vw]'>
      <a href='https://www.instagram.com/loveliness_beauty_room/'>
        <BiLogoInstagram className='text-[3vh] cursor-pointer'/>
      </a>

   
      <a href='https://www.facebook.com/lovelinesspaulinanowocien'>
      <BiLogoFacebook className='text-[3vh] cursor-pointer'/>
      </a>
    
      <a href='https://booksy.com/pl-pl/104409_loveliness-beauty-room-stylizacja-paznokci-podologia_paznokcie_8820_krakow'>
      <img className='h-[3.2vh] ' src={booksy}></img>
      </a>
    </div>
    }

    </div>

  )
}


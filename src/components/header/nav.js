import React from 'react'
import {Link} from 'react-scroll'

export default function Nav() {
  return (
    <div className='flex justify-around w-[34vw] mt-[3.5vh] text-[1.7vh] ml-[5vw] uppercase cursor-pointer'>
    
    <Link
      to="services"
      smooth = {true}
      duration={500}
      >
      <p className=''>Usługi</p>
      </Link>

    <Link
      to='podiatry'
      smooth = {true}
      duration={500}
      >
      <p className=''>Podologia</p>
      </Link>
    
    
    <Link
      to='stylists'
      smooth = {true}
      duration={500}
      >
      <p className=''>Nasze stylistki</p>
      </Link>

    <Link
    to='location'
    smooth = {true}
    duration={500}
    >
    <p className=''>Salon</p>
    </Link>
    
    <Link
    to='training'
    smooth = {true}
    duration={500}
    >
    <p className=''>Szkolenia</p>
    </Link>

    <Link
    to='fotter'
    smooth = {true}
    duration={500}

    >
    <p className=''>Kontakt</p>
    </Link>
    </div>
  )
}
// className='flex justify-between w-[30vw] mt-[5vh]
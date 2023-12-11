import React from 'react'
import img from '../../assets/main.jpg'
import Header from '../header/header'
import MainContent from './mainContent'


export default function Main() {

  const isMobile = window.innerWidth <= 720;

  
  return (
    <div>
    {
      isMobile ?
      <div className='text-white'>
      <div className='h-[110vh] bg-center bg-cover sticky mb-[3vh]' style={{backgroundImage:`url('${img}')`}}>
        <Header/>
        <MainContent/>
      </div>
    </div>
    :
    <div className=' text-white'>
    <div className='h-[100vh] bg-center bg-cover sticky mb-[3vh]' style={{backgroundImage:`url('${img}')`}}>
      <Header/>
      <MainContent/>
    </div>
  </div>
    }
  </div>
  )
}
  
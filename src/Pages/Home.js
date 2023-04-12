import React from 'react'
import { Link } from 'react-router-dom';
import IMG from '../assets/img/IMG_2747.JPG'
import './style.css'
import { FaArrowRight } from 'react-icons/fa';

function Home() {
  const itemsStart = [
    {
      name: 'Get an admission',
      url: '/Admission',
      detiles :'Welcome To Our World'
    },
    // {
    //   name: 'Get ID card',
    //   url: '/GetID',
    //   detile :''
    // },
    // {
    //   name: 'About us ',
    //   url: '/About',
    //   detile :''
    // },
    {
      name: 'Visit Official website',
      url: 'https://ahlussuffadars.vercel.app/',
      detiles :'Explore Our Experiences'
    },
  ];
  return (
    <div style={{backgroundImage: `url(${IMG})`}} className='w-full h-screen bg-no-repeat bg-opacity-70 bg-center bg-cover flex items-center justify-center' >
    <div className='w-full h-full  bg-white bg-opacity-90 px-5 md:px-20 lg:px-32 lg:py-12 flex items-center justify-center'>
      <div className='rounded  select-none  py-20 w-auto h-auto flex flex-col items-center text-center justify-between'>
        <h2 id='railway' className='font-extrabold text-transparent opacity-90 text-5xl md:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-r from-green-800 to-lime-600 bg-clip-text text-transparent drop-shadow-md'>Experience Ahlussuffa</h2>
        <p className='text-base md:text-lg lg:text-xl opacity-80 xl:text-2xl antialiased mt-2 lg:mt-3 tracing-widest font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-lime-600 bg-clip-text text-transparent drop-shadow-lg'>Admission opened</p>
        <div className=' grid grid-cols-1 md:grid-cols-2 w-full h-full grid-rows-auto items-center gap-4 md:gap-7 py-16 md:py-28 '>
        {itemsStart.map((item)=>(
            <div class="p-3 md:p-6 w-full bg-white rounded-xl shadow-lg drop-shadow-xl flex flex-col items-center justify-center space-y-2">
              <p class="text-sm md:text-base text-slate-500">{item?.detiles} !</p>
               <Link to={item.url}>
                  <button id='Rubik' className='bg-green-800 text-white flex items-center shadow-xl drop-shadow-md text-sm md:text-lg p-1 px-2 md:p-1.5 md:px-4 opacity-90'><span className='pr-1.5 md:pr-3 lg:text-xl capitalize'>{item?.name}</span ><FaArrowRight/></button>
               </Link>
            </div> 
        ))}
        </div>
      </div>

    </div>
    </div>
  )
}

export default Home

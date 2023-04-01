import React from 'react'
import { Link } from 'react-router-dom';
import IMG from '../assets/img/IMG_2747.JPG'

function Home() {
  const itemsStart = [
    {
      name: 'Regstration Here',
      url: '/Admition',
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
    <div style={{backgroundImage: `url(${IMG})`}} className='w-full h-screen bg-no-repeat bg-center bg-cover' >
    <div className='w-full h-full  bg-white bg-opacity-0 px-5 md:px-20 lg:px-32 lg:py-12 flex items-center justify-center'>
      <div className='rounded  py-20 w-auto h-auto flex flex-col items-center text-center justify-center'>
        <h2 className='font-extrabold text-transparent opacity-90 text-5xl md:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-md'>Experience Ahlussuffa</h2>
        <p className='text-base md:text-lg lg:text-xl opacity-80 xl:text-2xl antialiased mt-2 lg:mt-3 tracing-widest font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 drop-shadow-lg'>Admition is now opened</p>
        <div className=' grid grid-cols-1 md:grid-cols-2 w-full h-full grid-rows-auto items-center gap-4 md:gap-7 py-16 md:py-28 '>
        {itemsStart.map((item)=>(
            <div class="p-3 md:p-6 w-full bg-white rounded-xl shadow-lg drop-shadow-xl">
                 <Link to={item.url}>
                     <div>
                       <div class="text-base md:text-xl font-medium text-black">{item?.name}</div>
                       <p class="text-sm md:text-base text-slate-500">{item?.detiles} !</p>
                     </div>
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

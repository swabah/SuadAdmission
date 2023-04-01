import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/ahlussuffalogo.png'


function Nav() {
  const navbarItems = [
    // {
    //   name: 'Home',
    //   url: '/'
    // },
    {
      name: 'Admition',
      url: '/Admition'
    },
    // {
    //   name: 'Get ID',
    //   url: '/GetID'
    // },
    // {
    //   name: 'Login',
    //   url: '/Login'
    // },
  ];
  return (
    <div className='w-full bg-[#ffff] backdrop-blur-md  bg-opacity-50 text-[#1c415d] shadow-lg transition duration p-5 py-3.5 h-16 md:h-20 lg:h-24  md:px-20 flex items-center justify-between'>
       <Link className=''>
           <img className='h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 bg-center object-fill drop-shadow-sm' src={logo} alt="Logo" />
        </Link>
        <nav>
           <ul className="w-full h-auto flex items-center space-x-6">
           {navbarItems.map((item) => (
                <Link className='' to={`${item.url}`}>
                    <li className="text-lg text-[#1c415d] hover:text-[#72bf44] font-thin  drop-shadow-md shadow-gray-100 uppercase">{item.name}</li>
                </Link>
           ))}
           </ul>
         </nav>
    </div>
  )
}

export default Nav

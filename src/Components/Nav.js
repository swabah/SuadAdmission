import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/img/ahlussuffalogo.png'
import { useState } from 'react'
import { Dialog, Disclosure} from '@headlessui/react'
import { FaAlignRight, FaShareSquare,} from 'react-icons/fa'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/Firebase'
import { FiLoader } from 'react-icons/fi'


function Nav({setIsAuth,IsAuth}) {
  const [Loader,setLoader] = useState(false)
  const navigate = useNavigate()
  const navbarItems = [
    {
      name: 'Home',
      url: '/'
    },
    // {
    //   name: 'Admission',
    //   url: '/Admission'
    // },
    {
      name: 'Get ID',
      url: '/GetID'
    },
  ];


  const [DropdownOpen, setDropdownOpen] = useState(false)

  const signOutApplicant = async () =>{
    setLoader(true)
    try {
       await signOut(auth).then(()=>{
        localStorage.setItem('IsAuth',false)
        console.log('is log outed');
        setTimeout(() => {
          navigate('/')
        }, 5000);
      })
      setIsAuth(false)
      setLoader(false)
    } catch (error) {
      
    }
  }

  return (
    <header className='w-full bg-[#ffff] text-[#1c415d] shadow-sm p-3 py-3.5 h-16 md:h-20 lg:h-24   lg:px-12  xl:px-44  flex items-center justify-between'>
         <Link to='/'>
           <img className='h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20  bg-center object-fill drop-shadow-sm' src={logo} alt="Logo" />
         </Link>
         <nav className='flex items-center'>
           <div className="w-full h-auto hidden lg:flex items-center space-x-6">
              {navbarItems.map((item,index) => (
                <Link className='' to={`${item.url}`}>
                    <span key={index} className="text-lg text-[#1c415d] cursor-pointer hover:text-[#72bf44] transition font-normal drop-shadow-sm  uppercase">{item.name}</span>
                </Link>
              ))}
                  <span onClick={signOutApplicant} className={`text-lg space-x-1.5 ${Loader && 'opacity-50 text-red-800'} flex items-center text-[#1c415d] cursor-pointer hover:text-[#72bf44] transition font-normal drop-shadow-sm  uppercase`}>
                    <h1>log out </h1> 
                  {Loader && <span className=' animate-spin'><FiLoader/></span>}
                  </span>
              {/* <Link className=' p-1 px-3 rounded-full border-2 flex items-center space-x-2.5' to='/https://ahlussuffadars.vercel.app/'>
                    <li className=" text-base text-[#1c415d] hover:text-[#72bf44] font-medium drop-shadow-md shadow-gray-100">Ahlussuffa.in</li>
                    <FaShareSquare/>
              </Link> */}
           </div>
             <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setDropdownOpen(true)} 
              >
                <span className="sr-only">Open main menu</span>
                <FaAlignRight className={`h-6 w-6 text-black `} aria-hidden="true" />
              </button>
            </div>
         </nav>
         <Dialog as="div" className="lg:hidden" 
               open={DropdownOpen} 
               onClose={setDropdownOpen}>
                 <div className="fixed inset-0 z-50 " />
                 <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 backdrop-blur-lg bg-opacity-70">
                   <div className="flex items-center justify-between">
                     <div onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} className="-m-1.5 p-1.5">
                       <span className="sr-only">Ahlussuffa Admission</span>
                       <img
                         onClick={() => setDropdownOpen(false)}
                         className="h-10 w-auto md:hidden"
                         src={logo}
                         alt="logo"
                       />
                     </div>
                     <button
                       type="button"
                       className="-m-2.5 rounded-md p-2.5 text-gray-700"
                       onClick={() => setDropdownOpen(false)}
                     >
                       <span className="sr-only">Close menu</span>
                       <FaAlignRight className="h-6 w-6 text-[#000]   hover:text-[#72bf44]" aria-hidden="true" />
                     </button>
                   </div>
                   <div className="mt-6 flow-root">
                     <div className="-my-6 divide-y divide-gray-500/10">
                       <div className="space-y-2 py-6">
                         <Disclosure as="div" className="-mx-3 ">
                           {({ open }) => (
                             <>
                               {navbarItems.map((item) => (
                                 <Link className='' to={`${item.url}`} onClick={() => setDropdownOpen(false)}>
                                    <Disclosure.Button className="flex w-full cursor-pointer items-center justify-between  py-2 pl-3 pr-3.5 text-base text-[#1c415d] hover:text-[#72bf44] font-semibold leading-7 hover:bg-gray-200">
                                      {item.name}
                                    </Disclosure.Button>
                                </Link>
                                ))}
                                 <Disclosure.Button  onClick={() => setDropdownOpen(false)}>
                                    <li onClick={signOutApplicant} className="flex w-full cursor-pointer items-center justify-between  py-2 pl-3 pr-3.5 text-base text-[#1c415d] hover:text-[#72bf44] font-semibold leading-7 hover:bg-gray-200">
                                    <h1>Log out </h1> 
                                    {Loader && <span className='ml-1.5 animate-xl'><FiLoader/></span>}
                                    </li>
                                </Disclosure.Button>
                                <Link className=' ' to='/https://ahlussuffadars.vercel.app/'>
                                <Disclosure.Button className=" p-1 px-3 rounded-full border-2 flex items-center space-x-2.5 flex w-full cursor-pointer items-center justify-between  py-2 pl-3 pr-3.5 text-base text-[#1c415d] hover:text-[#72bf44] font-semibold leading-7 hover:bg-gray-200">
                                    <li className="list-none text-base text-[#1c415d] hover:text-[#72bf44] font-medium drop-shadow-md shadow-gray-100">Ahlussuffa.in</li>
                                    <FaShareSquare/>
                                </Disclosure.Button>
                               </Link>
                             </>
                           )}
                         </Disclosure>
                       </div>
                     </div>
                   </div>
                 </Dialog.Panel>
               </Dialog>
             </header>
  )
}

export default Nav

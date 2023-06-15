import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FiLoader, FiX } from 'react-icons/fi';
import { auth, googleProvider } from '../firebase/Firebase';
import { signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toast'
import {useDispatch} from 'react-redux'
import {  setActiveUser } from '../redux/userSlice';

const SignupModal = ({ onClose, onRequest }) => {
    const [Loading , setLoading] = useState(false)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const signInWithGoogle = async () =>{
        setLoading(true)
        try {
            await signInWithPopup(auth,googleProvider).then((res)=>{
              dispatch(setActiveUser({
                userName : res.user.displayName,
                userEmail : res.user.email
              }))
            setTimeout(() => {
              if(!auth.currentUser){
                navigate('/admission')
              }else{
                navigate('/GetId')
              }
              }, 3000);
            setLoading(false)
            })
            toast.success("Signed With Google!",{
                backgroundColor: '#8329C5',
                color: '#ffffff',
              });
         } catch (error) {
            toast.error("Ther are some issues!")
         }
    }
    console.log(auth?.currentUser?.email );
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
		>
			{/* Modal Backdrop */}
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

			{/* Modal Content */}
			<main className="flex flex-col items-center justify-center h-full w-full">
				<div className="modal-wrapper flex items-center z-30">
					<div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl backdrop-blure-lg bg-white bg-opacity-90 max-h-screen shadow-lg flex-row rounded-lg relative">
						<div className="modal-header flex justify-between gap-10 p-5 border-b border-gray-200">
							<h5 className=" text-primary-dark dark:text-primary-light text-xl">
                {auth.currentUser ? 'Do you already have an account ?' : 'Welcome, Get an admission !'}
							</h5>
							<button
								onClick={onClose}
								className="px-4 font-bold text-primary-dark dark:text-primary-light"
							>
								<FiX className="text-3xl" />
							</button>
						</div>
              { auth.currentUser ? (
                <h2 className='text-sm md:text-base p-5  text-red-800'>You can keep clicking the button.<Link to='/GetId'><span className='pl-1 underline text-blue-900'>Click here</span></Link> </h2>
                ) : (
					  	<div className="modal-body p-5 w-full h-full">
							<div className='h-12 w-full p-2 text-white bg-green-800 items-center flex justify-center'>
                  {
                      Loading ? 
                      <>
                        <span className='animate-spin cursor-progress text-xl'><FiLoader/></span>
                      </>
                      :
                      <>
                        <div onClick={signInWithGoogle} className='flex cursor-pointer w-full items-center justify-evenly text-base md:text-xl'>
                          <FaGoogle/>
                          <span>Signup with google</span>
                        </div>
                      </>
                  }
              </div>
					  	</div>
               )}
					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default SignupModal;
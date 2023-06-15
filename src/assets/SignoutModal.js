import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiLoader, FiLogOut, FiX } from 'react-icons/fi';
import { auth } from '../firebase/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserLogoutSTate } from '../redux/userSlice';

const SignoutModal = ({ onClose, onRequest }) => {
  const [Loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOutApplicant = async () => {
    setLoading(true);
    try {
      await signOut(auth).then(() => {
        dispatch(setUserLogoutSTate());
        setTimeout(() => {
          navigate('/');
          setLoading(false);
        }, 5000);
      });
    } catch (error) {
    }
  };

  console.log(auth?.currentUser?.email);
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
              <h5 className="text-primary-dark dark:text-primary-light text-xl">
              You want to log out, are you sure?
              </h5>
              <button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
              >
                <FiX className="text-3xl" />
              </button>
            </div>
            <div className="modal-body p-5 w-full h-full">
              <div className="h-12 w-full p-2 text-white bg-red-800 items-center flex justify-center">
                {Loading ? (
                  <>
                    <span className="animate-spin cursor-progress text-xl">
                      <FiLoader />
                    </span>
                  </>
                ) : (
                  <>
                    <div
                      onClick={signOutApplicant}
                      className="flex cursor-pointer w-full items-center px-2 md:px-5  justify-start space-x-3 md:space-x-7 text-base md:text-xl"
                    >
                      <FiLogOut />
                      <span>Log out</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default SignoutModal;

import React, { useEffect, useState } from 'react';
import { FiCopy, FiLoader } from 'react-icons/fi';
import Nav from '../Components/Nav';
import { auth, db } from '../firebase/Firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import profile from '../assets/img/persondemo.png';
import backButton from '../assets/img/backButton.png';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

function GetID() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shortenedLink, setShortenedLink] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'students'));
        const allStudents = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setStudents(allStudents);
        console.log(allStudents);
        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, []); 

  // const deleteStudent = async (id) => {
  //   try {
  //     const studentDoc = doc(db, 'students', id);
  //     await deleteDoc(studentDoc);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="relative w-full h-full">
      <Nav />
      <div className={`w-full h-full  flex flex-col p-3 lg:px-10 py-12 md:py-16 xl:px-32`}>
        <h2 className="text-xl md:text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r pb-12 lg:pb-20 font-medium from-green-800 to-lime-600 bg-clip-text text-transparent drop-shadow-sm">
          <span className="text-2xl xl:text-4xl">G</span>ET YOUR FORM
        </h2>
        {loading && (
          <div className="absolute left-0 top-0 z-10 bg-black bg-opacity-10 brightness-125 flex items-center justify-center w-full h-screen">
            <FiLoader className="mt-1 text-xl animate-spin" />
          </div>
        )}
        
        <div className={`w-full h-full grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-5`}>
        {students.map((student, index) => (
          <>
            {student.ApplicantSignUp.id === (auth.currentUser && auth.currentUser.uid) && (
              <div className='w-full h-full flex flex-col lg:flex-row items-center shadow-xl rounded-md overflow-hidden' key={index}>
                   <div className="relative w-full lg:w-1/3 h-full bg-green-500 lg:rounded-l-md">
                     <img src={student.ApplicantImg ? student.ApplicantImg : profile} className='w-44 p-7 object-cover rounded-full lg:w-full md:h-full ' alt='' />
                     <CopyToClipboard text={shortenedLink} onCopy={() => setShortenedLink(student.ApplicantID)}>
                      <div  className='w-full font-thin absolute bottom-6 px-8 active:scale-95 transition cursor-pointer h-auto rounded-sm  '>
                        <h2 className='bg-white text-sm rounded-md flex items-center  p-0.5 justify-between px-2 w-full shadow-md inner-shadow'>{student.ApplicantID}
                        <span className='ml-2 text-sm text-blue-900'><FiCopy/></span></h2>
                      </div>
                     </CopyToClipboard>
                   </div>
                   <div className='relative w-full h-full p-4 flex flex-col items-start space-y-1 justify-between lg:w-2/3  lg:rounded-r-md bg-gray-50 '>
                     <div className="">
                       <span className="text-gray-500 text-sm md:text-base font-medium">Applicant Name : </span>
                       <span className="text-gray-800 capitalize text-sm md:text-base font-medium">{student.ApplicantName}</span>
                     </div>
                     <div className="">
                       <span className="text-gray-500 text-sm md:text-base font-medium">Applicant Place : </span>
                       <span className="text-gray-800 capitalize text-sm md:text-base font-medium">{student.ApplicantPlace}</span>
                     </div>
                     <div className="">
                       <span className="text-gray-500 text-sm md:text-base font-medium">Applicant DOB : </span>
                       <span className="text-gray-800 capitalize text-sm md:text-base font-medium">{student.ApplicantDOB}</span>
                     </div>
                     <div className="">
                       <span className="text-gray-500 text-sm md:text-base font-medium">Applicant Email : </span>
                       <span className="text-gray-800  text-sm md:text-base font-medium">{student.ApplicantEmail}</span>
                     </div>
                     <div className="">
                       <span className="text-gray-500 text-sm md:text-base font-medium">Studied Hifz : </span>
                       <span className="text-gray-800 capitalize text-sm md:text-base font-medium">{student.StudiedHifz}</span>
                     </div>
                     <div className="">
                       <span className="text-gray-500 text-sm md:text-base font-medium">Submited : </span>
                       <span className="text-gray-800 capitalize text-sm md:text-base font-medium">{student.SubmitedDate} | {student.SubmitedTime}</span>
                     </div>
                     <hr />
                     {/* <div className='w-full  h-auto flex space-y-1 lg:space-y-0 flex-col lg:flex-row items-start lg:items-center justify-between'>
                          <button className=' text-white  hover:bg-red-400 brightness-105 hover:brightness-100 transition font-thin rounded bg-red-500 border text-sm p-0.5 px-1.5' onClick={()=>{deleteStudent(student.id)}}>Delete Student</button>
                          <span className=' text-white brightness-105 font-thin rounded bg-blue-500 border text-sm p-0.5 px-1.5'>Submited : {student.SubmitedDate}</span>
                     </div> */}
                   </div>
              </div>
            )}
          </>
        ))}
        </div>
        {students.length && (
              <div className='w-full h-auto flex flex-col items-center justify-center space-y-2 py-32'>
                <img src={backButton} alt="back to admission" className='w-8 md:w-10 lg:w-12' />
                <Link to='/admission'>
                <p className='text-xs font-semibold cursor-pointer capitalize tracking-wider text-green-600'>Click to Take admission</p>
                </Link>
              </div>
         )}
      </div>
    </div>
  );
}

export default GetID;

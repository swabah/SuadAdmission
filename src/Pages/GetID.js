import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FiLoader } from 'react-icons/fi';
import Nav from '../Components/Nav';
import { auth, db } from '../firebase/Firebase';
import { selectUserName } from '../redux/userSlice';
import {  collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function GetID() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const userName = useSelector(selectUserName);
  const navigate = useNavigate()

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
        console.log(error);
      }
    };

    fetchData();

    if(!userName){
      navigate('/')
    }
  }, []);


  return (
    <div className="relative w-full h-full">
      <Nav />
      <div className="w-full h-full flex flex-col p-3 lg:px-12 py-12 md:py-20 xl:px-44 space-y-12 md:space-y-20">
        <h2 className="text-xl xl:text-3xl bg-clip-text bg-gradient-to-r font-medium from-green-800 to-lime-600 bg-clip-text text-transparent drop-shadow-sm">
          <span className="text-2xl xl:text-4xl">G</span>ET YOUR FORM
        </h2>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center w-full h-screen">
            <FiLoader className="mt-1 text-xl animate-spin" />
          </div>
        )}
        {students.map((student, index) => (
          <div key={index}>
            {userName && student.ApplicantSignUp.id === (auth.currentUser && auth.currentUser.uid) && (
              <ul className="text-black w-full md:w-[500px] h-auto border">
              <li>{student.ApplicantName}</li>
               </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetID;

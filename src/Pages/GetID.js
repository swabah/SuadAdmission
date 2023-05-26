import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import { API_ENDPOINT } from '../assets/Api';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/Firebase';



function GetID({setIsAuth,IsAuth}) {
      const navigate = useNavigate()
      const [students,setStudents] = useState([]);

        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get(API_ENDPOINT);
              const allStudents = response.data.documents.map((student) => ({
                ...student,
                id: student.name.split('/').pop() 
              }));
              setStudents(allStudents);
              console.log(allStudents);
              console.log( );
            } catch (error) {
              console.log(error);
            }
          };
        
          fetchData();
        }, []);
    

  return (
    <div className='w-full h-full'>
      <Nav setIsAuth={setIsAuth} IsAuth={IsAuth}/>
      <div className='w-full h-full flex flex-col p-3 lg:px-12 py-12 md:py-20 xl:px-44 space-y-12 md:space-y-20'>
       <h2 className='text-xl xl:text-3xl bg-clip-text bg-gradient-to-r font-medium from-green-800 to-lime-600 bg-clip-text text-transparent drop-shadow-sm'>
        <span className='text-2xl  xl:text-4xl '>G</span> 
         ET YOUR FORM</h2>
         {students.map((student ,index) => (
          <div>
            <h2>
            {/* {student.fields.ApplicantSignUp?.name?.stringValue} */}
            </h2>
              <ul className='text-black w-full md:w-[500px] h-auto border' key={index}>
                  <li>{student.fields.ApplicantName?.stringValue}</li>
              </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
export default GetID
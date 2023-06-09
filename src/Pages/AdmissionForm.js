import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { auth, db} from '../firebase/Firebase';
import Nav from '../Components/Nav';

function AdmissionForm() {
  const [formData, setFormData] = useState({
    AplName:'',
    AplPlace:'',
    AplEmail:'',
    AplDOB:'',
    FatherName:'',
    FatherOcc:'',
    MotherName:'',
    MotherOcc:'',
    MotherTou:'',
    PerAddress:'',
    MoNumberOne:'',
    MoNumberTwo:'',
    GuardianContact:'',
    StudiedHifz:'',
    QuranMemorize:'',
    MadrasaName:'',
    MadrasaPlace:'',
    PrevStudy:'',
    SchoolName:'',
    SchoolPlace:'',
    Agree:false
  });
  
  const [Loading,setLoading]=useState(false)

  const Navigate = useNavigate()

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue
    }));
  };

  console.log(formData);

    const handleSubmit =  (e) => {
         e.preventDefault()
        setLoading(true)
        const date = new Date()
        const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        const uuid = uuidv4(); // Generate UUIDv4
        const uniqueID = uuid.slice(0, 5) ; // Extract the first 5 characters
        const  uniqueName = formData.AplName.slice(0,3) 

        try {
          addDoc(collection(db, 'students'), {
            ApplicantSignUp :{name: auth.currentUser.displayName , id : auth.currentUser.uid , img : auth.currentUser.photoURL , email : auth.currentUser.email},
            ApplicantID : uniqueID+'-'+uniqueName,
            ApplicantName : formData.AplName, 
            ApplicantPlace : formData.AplPlace, 
            ApplicantEmail : formData.AplEmail, 
            ApplicantDOB : formData.AplDOB,
            FatherName : formData.FatherName, 
            FatherOcc : formData.FatherOcc, 
            MotherName : formData.MotherName, 
            MotherOcc : formData.MotherOcc, 
            MotherTou : formData.MotherTou, 
            PerAddress : formData.PerAddress, 
            GuardianContact : formData.GuardianContact, 
            MoNumberOne : formData.MoNumberOne, 
            MoNumberTwo : formData.MoNumberTwo, 
            StudiedHifz : formData.StudiedHifz, 
            QuranMemorize : formData.QuranMemorize, 
            PrevStudy : formData.PrevStudy, 
            MadrasaName : formData.MadrasaName, 
            MadrasaPlace : formData.MadrasaPlace, 
            SchoolName : formData.SchoolName, 
            Agree : formData.Agree, 
            SubmitedDate: formattedDate,
            SubmitedTime: formattedTime,
          })
          setTimeout(() => {   
            setLoading(false)
            Navigate('/getId')
          }, 2000);
        } catch (err) {
          alert(err)
        }
   };
  return (
    <div className=" w-full h-full ">
      <Nav />
        <div className='w-full h-full p-3 lg:px-10 py-12 md:py-16 xl:px-32 flex items-ceneter justify-center'>
            <div className='w-full space-y-20 md:space-y-16 xl:space-y-32 h-full'>
              <div className='flex md:flex-row flex-col items-center md:justify-between w-full'>
              <h2 className='text-2xl xl:text-4xl bg-clip-text bg-gradient-to-r font-medium from-green-800 to-lime-600 bg-clip-text text-transparent drop-shadow-sm'>
               <span className='text-3xl xl:text-5xl '>R</span> 
                EGISTRATION</h2>
                {auth.currentUser  && (
                <div className='w-full flex flex-col text-red-900 text-end'>
                  <h2 className='text-sm'>user : {auth.currentUser.displayName}</h2>
                  {/* <h4 className='text-xs'>email : {auth.currentUser.email}</h4> */}
                </div>
                )}
              </div>
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit}  className="grid gap-3 h-full w-full lg:gap-5 gap-y-5 text-sm grid-rows-auto grid-cols-1 md:grid-cols-6">
                  <div className="md:col-span-3">
                    <input name='AplName' required  type="text" value={formData.AplName} onChange={handleInputChange} placeholder='Appliciant Name' className="p-0 py-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full "/>
                  </div>
                  <div className="md:col-span-3">
                    <input name='AplPlace'  type="text" value={formData.AplPlace} onChange={handleInputChange} placeholder='Appliciant Place' className="p-0 py-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full "/>
                  </div>
                  <div className="md:col-span-3">
                    <input  type="email"  name="AplEmail" value={formData.AplEmail} onChange={handleInputChange}  className=" p-0 py-2 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full"
                      placeholder="Appliciant Email" />
                  </div>
                  <div className="md:col-span-3">
                    <input  type="date" onChange={handleInputChange} value={formData.AplDOB} placeholder='Date Of Birth' name="AplDOB" className=" oldstyle-nums p-0 py-1 mt-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full " />
                  </div>
                  <div className="md:col-span-3">
                    <input name='FatherName'  type="text" value={formData.FatherName} onChange={handleInputChange} placeholder='Father’s name' className="p-0 py-2 mt-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full "/>
                  </div>
                  <div className="md:col-span-3">
                    <input name='FatherOcc'  type="text" value={formData.FatherOcc} onChange={handleInputChange} placeholder='Father’s Occupation' className="p-0 py-2 mt-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full "/>
                  </div>
                  <div className="md:col-span-3">
                    <input name='MotherName'  type="text" value={formData.MotherName} onChange={handleInputChange} placeholder='Mother’s name' className="p-0 py-2 mt-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full "/>
                  </div>
                  <div className="md:col-span-3">
                    <input name='MotherOcc'  type="text" value={formData.MotherOcc} onChange={handleInputChange} placeholder='Mother’s Occupation' className="p-0 py-2 mt-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full "/>
                  </div>
                  <div className="md:col-span-3">
                    <input name='MotherTou'  type="text" value={formData.MotherTou} onChange={handleInputChange}  placeholder='Mother’s Tough' className="p-0 py-2 mt-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full "/>
                  </div>
                  <div className="md:col-span-3">
                    <input  type="tel" onChange={handleInputChange} value={formData.GuardianContact} placeholder='Guardian Number' name="GuardianContact" className=" oldstyle-nums p-0 py-2 mt-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full " />
                  </div>
                  <div className="md:col-span-3">
                    <input  type="tel" onChange={handleInputChange} value={formData.MoNumberOne} placeholder='Mobile Number(primary)' name="MoNumberOne" className=" oldstyle-nums p-0 py-2 mt-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full " />
                  </div>
                  <div className="md:col-span-3">
                    <input  type="tel" onChange={handleInputChange} value={formData.MoNumberTwo} placeholder='Mobile Number' name="MoNumberTwo" className=" oldstyle-nums p-0 py-2 mt-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full " />
                  </div>
                  <div className="md:col-span-3">
                    <select  value={formData.PrevStudy} onChange={handleInputChange} name="PrevStudy" className=" text-base font-normal text-gray-400 p-0 py-2 mt-2 w-full border-0 border-b-2 border-gray-300">
                      <option value="" className=''>Which grade did you previously studied</option>
                      <option value="+2">+2</option>
                      <option value="10">10</option>
                      <option value="8">8</option>
                    </select>
                  </div>
                  <div className="md:col-span-3">
                    <select  onChange={handleInputChange} value={formData.StudiedHifz} name="StudiedHifz" className=" text-base font-normal text-gray-400 p-0 py-2 mt-2 w-full border-0 border-b-2 border-gray-300">
                      <option value="" className=''>Are you studied hifz</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div className="md:col-span-6">
                    <input  type="text" onChange={handleInputChange} value={formData.PerAddress} placeholder='Permanent Address' name="PerAddress" className="p-0 py-2 mt-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full " />
                  </div>
                  <div className="md:col-span-3">
                    <input  type="number" onChange={handleInputChange} value={formData.QuranMemorize} placeholder='How many Suras of the Qur’an Memorized' name="QuranMemorize" className=" p-0 py-2 mt-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full " />
                  </div>
                  <div className="md:col-span-3">
                    <input  type="text" onChange={handleInputChange} value={formData.MadrasaName} placeholder='Name of madrassa studied' name="MadrasaName" className=" p-0 py-2 mt-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full " />
                  </div>
                  <div className="md:col-span-3">
                    <input  type="text" onChange={handleInputChange} value={formData.MadrasaPlace} placeholder='PLace of madrassa studied' name="MadrasaPlace" className=" p-0 py-2 mt-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full " />
                  </div>
                  <div className="md:col-span-3">
                    <input  type="text" onChange={handleInputChange} value={formData.SchoolName} placeholder='Name of school studied' name="SchoolName" className=" p-0 py-2 mt-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full " />
                  </div>
                  <div className="md:col-span-3">
                    <input  type="text" onChange={handleInputChange} value={formData.SchoolPlace} placeholder='PLace of school studied' name="SchoolPlace" className=" p-0 py-2 mt-2 ring-0 border-gray-300 outline-none border-0 border-b placeholder:font-normal placeholder:opacity-50 placeholder:text-black w-full " />
                  </div>

                  <div className="md:col-span-6 flex flex-col lg:flex-row items-start lg:items-center lg:space-x-3  py-3">
                    <input required  type="checkbox" onChange={handleInputChange} value={formData.Agree} name="Agree" className='rounded text-pink-500' />
                    <label className='text-sm lg:text-base mt-2 lg:mt-0 font-normal capitalize'>I hereby solemnly certify and declare that the information I have provided on this form is true and accurate.</label>
                  </div>

                  <div className="md:col-span-6 mt-8 text-left">
                      <button type='submit' className="py-2 text-xl font-medium w-full bg-green-600 rounded">
                        {Loading ? 'Loading' : 'Submit' }
                      </button>
                  </div>
    
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AdmissionForm

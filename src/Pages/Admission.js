import React from 'react'
import Nav from '../Components/Nav'
import Form from '../Registration/GoogleForm/Form'

function Admission() {
  return (
    <div>
        <Nav/>
        <div className='w-full h-full py-12 flex items-ceneter justify-center'>
            {/* <Reg/> */}
            <Form/>
        </div>
    </div>
  )
}

export default Admission

import React, { useEffect, useState } from 'react';
import Form from './mainform'


const StudentRegistration = () => {
  const [is_Select_Collage,set_isSelect_Collage] = useState(false)

  // TODO:: finde user diteals
  // TODO:: get the collage data


  const Select_Collage =(event)=>{
    set_isSelect_Collage(true)
    console.log(event.target.value)

  };
  

  return (


    <div className="max-w-7xl mx-auto p-1">
      {/* Title */}
      <div className="text-center mb-8">
        <img src="http://res.cloudinary.com/dwbjaa3ng/image/upload/v1726760704/AvterIMG5_oq0r8q.png" alt="Profile" className="w-20 h-20 rounded-full mx-auto" />
        <h1 className="text-4xl font-bold text-Light-purple font-Itim"> <span className='text-black'>Hello,</span> Linx Luxury</h1>
        <p className="text-gray-500 mt-1 -mb-3 text-xl">Register yourself as Student</p>
      </div>

      <div className="flex justify-center mb-5" onClick={(event)=>Select_Collage(event)}>
        
        <button className="bg-Light-purple text-white hover:bg-hover-purpal justify-center font-Assistant font-bold text-2xl py-2 px-4 rounded-xl flex items-center w-96">
          College
          <span className="ml-2 text-4xl font-bold shadow-xl">+</span>
        </button>
        <div className="bg-Light-purple text-white hover:bg-hover-purpal "  >
          option
          option
          option
        </div>
      </div>    

        {/* form */}
        <Form/>

    </div>


  );
};

export default StudentRegistration;
















// student Rigster applay logic and froms complit the other fild
  // error component improvment
  // improve home singup login button
  // light mord Dark mode
  // apply resposibness

  // logic applay
        // usestates 
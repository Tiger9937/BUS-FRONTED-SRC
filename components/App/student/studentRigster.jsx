import React, { useEffect, useState } from 'react';
import {GetPublicParamsData} from '../../../utils/fetch'
import Form from './mainform'
import {Scorebar} from '../../index'

const StudentRegistration = () => {
  const [is_Select_Collage,set_isSelect_Collage] = useState(false)
  const [scorlBarPosition , setscorlBarPosition] = useState()
  const [Items , setItems] = useState([])

  // TODO:: finde user diteals for showing image and name of the user
  // TODO:: get the collage data


  const Select_Collage = async (event)=>{

    set_isSelect_Collage(!is_Select_Collage)
    
    const AllCollage = await GetPublicParamsData("collage/colleges")
    setscorlBarPosition(event.target.getBoundingClientRect().bottom)
    
    setItems(AllCollage.data)
     
  };
  

  return (


    <div className="max-w-7xl mx-auto p-1">
      {/* Title */}
      <div className="text-center mb-8">
        <img src="http://res.cloudinary.com/dwbjaa3ng/image/upload/v1726760704/AvterIMG5_oq0r8q.png" alt="Profile" className="w-20 h-20 rounded-full mx-auto" />
        <h1 className="text-4xl font-bold text-Light-purple font-Itim"> <span className='text-black'>Hello,</span> Linx Luxury</h1>
        <p className="text-gray-500 mt-1 -mb-3 text-xl">Register yourself as Student</p>
      </div>

      <div className="flex justify-center mb-5 " onClick={(event)=>Select_Collage(event)}>
        
        <button className="bg-Light-purple text-white hover:bg-hover-purpal justify-center font-Assistant font-bold text-2xl py-2 px-4 rounded-xl flex items-center w-96">
          College
          <span className="ml-2 text-4xl font-bold shadow-xl">+</span>
          
        </button>
        <Scorebar 
            classname={"absolute w-96 z-10"}
            items={Items}   
            Style={{  padding: "20px", height: "10vh", overflow: "auto" , display:`${is_Select_Collage ? "inline":"none"}` , top:`${scorlBarPosition}px` }}
          />
      </div>  

        {/* form */}
      
        <Form/>
      

    </div>


  );
};
// ['Item1' , "Item1" , 'Item1' , 'Item1' , 'Item1' ,'Item1' , 'Item1' , 'Item1' , 'Item1']

export default StudentRegistration;
















// student Rigster applay logic and froms complit the other fild
  // error component improvment
  // improve home singup login button
  // light mord Dark mode
  // apply resposibness

  // logic applay
        // usestates 
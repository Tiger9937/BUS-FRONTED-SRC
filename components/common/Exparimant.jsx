// import React from 'react';
// const Dashboard = () => {
// // student rigstation from 
// // improve error component
// // Dark mode light mode 

  
//   return (
//     <div class="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
      
//         <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

          
//             <div class="fixed inset-0 transition-opacity" aria-hidden="true">
//                 <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>
           
//                     <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
//                         role="dialog" aria-modal="true" aria-labelledby="modal-headline">
//                           <div className=' flex justify-end'>
//                                     <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                             stroke="currentColor" aria-hidden="true">
//                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                                             d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                           </div>
//                           <div className=' flex'>
//                                 <div className=' bg-slate-500 rounded-full   pl-4  h-11 w-11'>
//                                     <span className=' font-bold   text-4xl'>!</span>
//                                 </div>

//                                 <div className=' bg-orange-600'>
//                                         message
//                                 </div>
//                           </div>


//                     </div>

//         </div>

//     </div>

//   );
// };

// export default Dashboard;

// {
// import { useForm } from "react-hook-form"
// import {Input} from '../index'
// import { useEffect, useRef, useState } from "react"

// export default function App() {
//   const [iscle , setche] = useState(false)
//   const [clone , setclone] = useState({})
//   const [previusVal , setpreviusVal] = useState("")
//   const inputRef = useRef(null);
  
//   console.log("that is",inputRef.current)
//   useEffect(()=>{

//     const element = document.getElementById(`:r${1}:`)
//     console.log(element.value)

//   },[])

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm()



//   useEffect(()=>{
//     setclone({...watch()})
//     if (iscle) {
//     setclone({...watch()})
//    }else{
//     setclone({})
//    }
//    if(!iscle){
//     setclone(undefined)
//     inputRef.current.value = null
//   }
//   if (!iscle && previusVal != "") {
//     inputRef.current.value = previusVal
//   }
//   },[watch , iscle , setclone , iscle , setclone])


//   const onSubmit = (data) =>{
    
//   }


//     const imchange = (event)=>{
      
//       setpreviusVal(event.target.value)
//       setclone(event.data)
//       setche(false)

//     }

//   return (
//     /* "handleSubmit" will validate your Inputs before invoking "onSubmit" */
//     <form className="m-10"  onSubmit={handleSubmit(onSubmit)}>
//       {/* register your Input into the hook by invoking the "register" function */}
//       <div ref={inputRef}>

//                   <Input className="bg-gray-300 flex" defaultValue="test" {...register("example")} />
//                   <Input className="bg-gray-500 " value={clone?.example}    {...register("exampleRequired", { required: true })} onChange={()=>imchange(event)}/>
//                   <Input className="bg-gray-400 "  {...register("exampleuired", { required: true })} onChange={()=>imchange(event)}/>
//                 <Input id={"hello-js"}  {...register("eRequired")} value={clone?.example}  onChange={()=>imchange(event)} />

//       </div>
      

//       {/* <input   /> */}

      
//       {/* errors will return when field validation fails  */} 
//       {errors.exampleRequired && <span>This field is required</span>}


//       <div className='w-full mt-7 '>
//           <div className="flex justify-center -mt-5">
            
                  
          

//               <div className=''>
//                     <button type='submit' className="w-52 text-lg font-bold h-[3rem] -mt-10 p-3 hover:bg-Hover-yellow bg-golden-yellow text-BLACK rounded-lg shadow-lg " >
//                         Register
//                     </button>
//               </div>
              
        
//         </div>
//       </div>

//       <input type="checkbox" checked={iscle}  onChange={()=> setche(!iscle)} />
//     </form>
//   )
// }
// }

import React, { useEffect, useState, useRef } from "react";


const ScrollReveal = () => {
  const elementsRef = useRef([]); // Store references to all elements
  const [visibleElements, setVisibleElements] = useState([]); // Track visible elements

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index; // Get index from dataset
            setVisibleElements((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index]; // Add index if not already visible
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    // Observe each element
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);

  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8"
  ];

  return (
    <div  className="bg-black w-11 h-44 absolute"   style={{  padding: "20px", height: "20vh", overflow: "auto" }}>
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => (elementsRef.current[index] = el)} // Store each element's ref
          data-index={index} // Add index to dataset
          style={{
            opacity: visibleElements.includes(String(index)) ? 1 : 0, // Show or hide
            transition: "opacity 0.5s ease-in",
            background: "#f1f1f1",
            margin: "10px 0",
            padding: "20px",
            border: "1px solid #ccc"
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ScrollReveal;



import React, { useEffect, useRef, useState } from 'react'

const scorebar = React.forwardRef( function scorebar({ Style, classname , items, ...props},bgref ){
    const elmentref = useRef([])
    const [Viseable , setViseable] = useState([])

    useEffect(()=>{
        console.log(items)
        const  Observer = new IntersectionObserver((entry)=>{
            entry.forEach((item)=>{

                if (item.isIntersecting) {
                    const index = item.target.dataset.index 

                    setViseable((priveval)=>{
                        if (!priveval.includes(index)) {
                            return [...priveval , index]
                        }
                        return priveval
                    })
                }
            })

        })
        
        elmentref.current.forEach((elment)=>{
            Observer.observe(elment)
        })  
        
    },[items])
    
    return (
        <div ref={bgref} style={Style} className={`bg-slate-500 ${classname}`}>
            {items.map((item,index)=>(
                <div
                id={item._id}
                key={index}
                data-index={index}
                ref={(el)=>elmentref.current[index]=el}
                style={{
                    opacity: Viseable.includes(String(index)) ? 1 : 0,
                    transition: "opacity 0.5s ease-in",
                }}
                className={`bg-slate-800 max-w-4 max-h-min-h-4 rounded-3xl opacity-${ Viseable.includes(String(index)) ? "0" :"100"}`}>
                 <img src={item.Image} alt="" />
                 <span>{item.name}</span>
               </div>
            ))

            }
            
        </div>
    )
})

export default scorebar
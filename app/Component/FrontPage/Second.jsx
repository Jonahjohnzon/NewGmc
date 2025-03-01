import React from 'react'

const Second = () => {
    const text = [
        {
            id:1,
            msg:"Company Security"
        },
        {
            id:2,
            msg:"Event Security"
        },
        {
            id:3,
            msg:"Personal Security"
        }
    ]
  return (
    <div className=' flex justify-center py-10 ' id='about'>
        <div className=' flex flex-col sm:flex-row items-center justify-between w-[90%] 2xl:w-2/3'>
            {text.map((data)=>{
                return(
                    <div key={data.id} className=' mb-5 sm:mb-0 w-full sm:w-40 md:w-52 lg:w-60 h-28 md:h-36 lg:h-40 bg-blue-900 text-center flex justify-center items-center'>
                        <p className=' font-semibold sm:text-xl lg:text-2xl'>{data.msg}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Second
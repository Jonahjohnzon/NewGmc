import React from 'react'

const Brands = () => {
    const brands = [
        {id:1,
        src:'/Brand/3c.jpg'
        },
        {id:2,
            src:'/Brand/micro.jpg'
        },
        {id:3,
            src:'/Brand/trans.jpg'
        },
        {
            id:4,
            src:'/Brand/chr.jpg'
        }
    ]
  return (
    <div className=' w-full bg-white py-10 flex flex-col justify-center items-center'>
        <div><h1 className=' text-2xl sm:text-3xl font-semibold mb-5 text-blue-950'>Our Protected Clients</h1></div>
        <div className=' flex flex-col md:flex-row  items-center'>
            {brands.map((data)=>{
                return(
                    <div key={data.id} className='  mx-2'><img src={data.src} className= ' mb-5 w-72 md:w-44 xl:w-72 m h-36 md:h-24 xl:h-36 object-contain shadow-md object-center'/></div>
                )
            })}
        </div>
    </div>
  )
}

export default Brands
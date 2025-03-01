import React from 'react'
import Top from './component/Top'
import Second from './component/Second'
import Maps from './component/Map'
import Footer from '../Component/FrontPage/Footer'

const page = () => {
  return (
    <div className=' select-none'>
        <Top Title={"Contact"}/>
        <Second/>
        <Maps/>
        <Footer/>
    </div>
  )
}

export default page
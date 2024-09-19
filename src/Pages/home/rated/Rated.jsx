import React, { useState } from 'react'
import ContentWrapper from '../../../Components/contentWrapper/Wrapper'
import SwitchTab from '../../../Components/switchTab/SwitchTab'
import '../style.scss'
import useFetch from '../../../Hooks/useFetch'
import Carousel from '../../../Components/carousel/Carousel'
const Rated = ()=> {
  const [endPoint,setEndPoint]=useState('movie')
  const {data,loading}=useFetch(`/${endPoint}/top_rated`)
console.log(endPoint)
  const onTabChange=(tab)=>{
    setEndPoint(tab== "Movies"?"movie":"tv");
  }
  return (
    <>
     <div className='trending-content'>
      <ContentWrapper>
        
      <div className='trending_carousel'>
        <h3>Top Rated</h3>
        <SwitchTab tabs={["Movies","Tv Shows"]} onTabChange={onTabChange}/>
        </div>
      <Carousel data={data?.results} loading={loading}/>
     
      </ContentWrapper>
     

    </div>
    
    </>
   
  )
}

export default Rated
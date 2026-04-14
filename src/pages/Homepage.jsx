
import Card from '../components/Card'
import React, { useEffect, useState } from 'react';
import axios from "axios";
function Homepage() {
  const [imageUrl, setImageUrl] = useState('');
 const [userdata, setUserdata] = useState([])

const getdata=async()=>{
const response=await axios.get(`https://api.imdbapi.dev/titles`)
 setUserdata(response.data.titles)}
 console.log(userdata)
 useEffect(()=>{
getdata()
 })
let printmovie=<h3 className='text-gray-600 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 capitalize font-bold'>loading...</h3>
if(userdata.length>0){
  printmovie=userdata.map((elem,idx)=>{
    return <div key={idx}>
      <Card elem={elem}/>
    </div>
  })
}

return (
  <div className='h-full w-full overflow-scroll  bg-black'>
    
    <div className=''>
    <div className='h-[70vw] gap-3 grid grid-cols-4 p-10 pt-8'>
      {printmovie}
    </div>
    </div>

  </div>
)
}

export default Homepage
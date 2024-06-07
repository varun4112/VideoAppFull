import React, { useState } from 'react'
import Add from '../component/Add'
import View from '../component/View'
import Catergory from '../component/Catergory'
import { Link } from 'react-router-dom'

function Home() {

  const[uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})


  return (
    <>
    <div className="Container m-5 p-5 d-flex justify-content-between align-item-caenter ">
      <div className='add-videos'>
        <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
        <Link to={'/watchHistory'} style={{textDecoration:'none',color:'blue'}}>Watch History</Link>
      </div>
    </div>

    <div className='container m-5 p-5 d-flex justify-content-between align-item-center'>
      <div className="all-videos">
        <h3>All Videos</h3>
        <View uploadVideoServerResponse={uploadVideoServerResponse} />
      </div>
      {/* <div className='category'>
        <Catergory/>

      </div> */}
    </div>
    <div className='container m-5 p-5 d-flex justify-content-between align-item-center'>
      <div className='category d-flex justify-content-between align-item-center'>
        <Catergory/>
      </div>
    </div>
    
    </>
  )
}

export default Home
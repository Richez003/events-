import React from 'react';
import Land from '../../Assets/land.svg';
import { Link } from 'react-router-dom';


function Index() {
  return (
    <>
 <div className="flex-auto flex-col">
    <div className='mx-auto text-center '>
    <span className='block text-5xl font-bold' style={{ color:'#240D57' }}>Imagine if</span>
    <span className='block text-5xl font-bold' style={{color:'#E87BF8'}}>Snapchat</span>
    <span className='block text-5xl font-bold' style={{color:'#240D57'}}>had events.</span>
    <h4 classNam='text-sm' style={{color:'#4F4F4F'}}> Easily host and share events with your friends <br /> across any social media.</h4>
    </div>
    <div className='h-96 text-center w-96 mx-auto'>
        <img  className='h-full w-full'   src={Land}></img>
    </div>
    <div className="text-center">
        <button className='text-xl py-3 px-6 rounded text-white' style={{background: 'linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)'}}><Link to="/form">Create My Event</Link> </button>
    </div>
 </div>
    </>
  );
}

export default Index;

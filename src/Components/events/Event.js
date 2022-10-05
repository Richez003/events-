import React from 'react';
import Cake from  '../../Assets/cake.png';
import Location from '../../Assets/location.svg';
import Date from '../../Assets/date.svg';
import Arrow from '../../Assets/arrow.svg';


function Event() {
  return (
    <>
        <div className="flex flex-col justify-center text-center md:p-10 lg:flex-row lg:flex-row-reverse lg:justify-evenly">
                <div className="w-full lg:w-96 lg:h-96 mx-auto lg:mx-0 mb-6">
                    <img className="w-full h-full" src={Cake} alt={''}></img>
                </div>
                <div className="px-5">
                    <h1 className="text-left font-extrabold text-5xl" style={{color:'#240D57'}}>
                        Birthday Bash
                    </h1>

                    <h5 className="text-left mt-3 text-sm" style={{color:'#828282'}}>
                    Hosted by Elysia
                    </h5>
                    <div className="mt-8">
                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-row items-center'>
                                <img  src={Date}></img>
                                <div className="ml-3 text-left">
                                    <span class="block" style={{color:'#828282'}}>18 August 6:00PM</span>
                                    <span class="block" style={{color:'#4F4F4F'}}>to 19 August 1:00PM UTC +10</span>
                                </div>
                            </div>
                            <div className='lg:ml-10'>
                                <img src={Arrow}></img>
                            </div>
                        </div>

                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-row items-center'>
                                <img  src={Location}></img>
                                <div className="ml-3 text-left">
                                    <span class="block" style={{color:'#828282'}}>Street name</span>
                                    <span class="block" style={{color:'#4F4F4F'}}>Suburb, State, Postcode</span>
                                </div>
                            </div>
                            <div>
                                <img src={Arrow}></img>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  );
}

export default Event;

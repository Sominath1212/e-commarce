import React from 'react'

export default function Home() {
  return (
    <div>
      
                  <div >
                      <div className='   w-full sm:h-[70vh] h-[40vh]   flex flex-col items-center justify-center sm:relative sm:pt-10'>
      
                          <Link to='/'>
                              <div >
                                  <h1  className='flex  drop-shadow-lg   cursor-pointer items-center justify-center'><span className='text-[#FF6600] font-bold text-3xl '>Food</span><span className='underline font-bold italic mx-1 '>store</span><span><ImSpoonKnife className='text-[#FF6600]' /></span></h1>
                              </div>
                          </Link>
      
                          <pre className='px-3 text-center drop-shadow'> <h1 className='flex  transition-all duration-700 items-start  font-bold font-serif text-center sm:text-4xl text-black'>Are you hungry ? your food <ImSpoonKnife className='text-[#FF6600]' />  is here.</h1></pre>
      
                          <p className='sm:text-xl text-center text-black mt-4 mx-3' >"One cannot think well, love well, sleep well, if one has not dined well."</p>
                          <Link to="/ExporeMenu"><button className='font-bold border bg-[#FF6600] hover:scale-110 duration-700 transition-all text-black px-2 relative self-center py-1 rounded-lg mx-auto  top-7'>Get started</button></Link>
                      </div>
                  </div>
    </div>
  )
}

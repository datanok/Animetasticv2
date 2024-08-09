import React from 'react'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 text-center z-50 transiztion-all duration-300 ease-in-out mt-6 overflow-auto max-w-fit mx-auto list-none p-2 m-4 bg-[#dcdfde] rounded-full bg-opacity-20 backdrop-blur-sm ">
    <ol className="flex gap-4 justify-center ">
      <li className="flex items-center text-white hover:bg-emerald-200 hover:text-emerald-800 px-2 py-1 rounded-full">
        <a className="whitespace-nowrap  hover:text-emerald-800" href="/home">Home</a>
      </li>
      <li className="flex items-center text-white hover:bg-emerald-200 hover:text-emerald-800 px-2 py-1 rounded-full">
        <a className="whitespace-nowrap  hover:text-emerald-800" href="/search">Search</a>
      </li>
      <li className="flex items-center text-white hover:bg-emerald-200 hover:text-emerald-800 p-2 px-2 py-1 rounded-full">
        <a className="whitespace-nowrap  hover:text-emerald-800" href="/Categories">Categories</a>
      </li>
     
    </ol>
  </nav>
  
  )
}

export default Navbar
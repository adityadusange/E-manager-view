import React from 'react'

const Header = () => {
  return (
    
     
    <div className="bg-white text-black">
   
    <nav className="sticky top-0 z-10 ">
  <div className="max-w-5xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <span className="text-2xl text-grey-900 font-semibold">E Manager</span>
      <div className="flex space-x-4 whites-gray-900">
        <a href="#">Dashboard</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>


</div>
  )
}

export default Header
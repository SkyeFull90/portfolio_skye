import React from 'react'

export default function page() {
  return (
    <div>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
          <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className='text-5xl font-bold'>Hello Friend</h1>
                <p className='py-6'>Welcome to the Code Stash. Her you will find alot of my Projects. Click below to view more of what I have to offer.</p>
                <button className="btn btn-primary">view the GitHub for more projects</button>
              </div>
          </div>
      </div>
    </div>
  )
}

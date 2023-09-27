import React from 'react'

export default function page() {
  return (
    <div>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
          <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className='text-5xl font-bold'>Hello Friend</h1>
                <p className='py-6 text-xl'>Welcome to the Code Stash. Her you will find a lot of my Projects. Click below to view more of what I have to offer.</p>
                <a href={'https://github.com/SkyeFull90/'}><button className="btn btn-primary">view the GitHub for more projects</button></a>

              </div>
          </div>
      </div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="/Screenshot 2023-08-02 at 18-03-02 Events By3.png" className="max-w-sm rounded-lg shadow-2xl"  alt={'events-project'}/>
                <div className={'gap-4'}>
                    <h1 className="text-5xl font-bold mb-4">Events by 3</h1>
                    <p className="mb-4">Currently under construction Events by 3. My first Full-Stack site. This one is for world events and sharing them with y"all out there. It is being rebuilt with Mongoose and a brand new dataset. With more responsive features to work and a better UI. It is built on NextJS a react framework ready for production with a built in dev server. Read the latest docs on NextJS: <a href={'https://nextjs.org/'}>Here</a></p>
                    <a href={'#'}><button className={'btn btn-disabled mr-3'}>View the site here</button></a>
                    <a href={'https://github.com/SkyeFull90/world-events'}><button className={'btn btn-ghost'}>And the Source code here</button></a>
                </div>
            </div>
        </div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/Screenshot 2023-08-02 at 18-04-31 Next.js Blog Starter Kit.png" className="max-w-sm rounded-lg shadow-2xl"  alt={'nextra-portfolio-blog'}/>
                <div>
                    <h1 className="text-5xl font-bold">Nextra Portfolio and Blog</h1>
                    <p className="py-6">This one is my first attempt at a portfolio site built with Nextra a framework with NextJS and Markdown uses MDX a markdown and jsx mix to build pages and content. Read more about Nextra: <a href={'https://nextra.site/'}>Here</a></p>
                    <a href={'https://portfolio-phi-black.vercel.app/'}><button className="btn btn-primary mr-3">Get Started</button></a>
                    <a href={'https://github.com/SkyeFull90/portfolio'}><button className={'btn btn-ghost'}>View the Source Code</button></a>
                </div>
            </div>
        </div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="/pythonSalesDataSorter.png" className="max-w-sm rounded-lg shadow-2xl"  alt={'python'}/>
                <div>
                    <h1 className="text-5xl font-bold">Python Sales Data Sorter</h1>
                    <p className="py-6">A sales data sorter console app originally built in java and rebuilt in python and javascript for better readability and code efficiency. Soon py test will be added for accuracy and coverage, as well as jest for js vers. Currently working on a Django version that sends a report to a SQLLite database then reads from it. To display the report on a dashboard.</p>
                    <a href={'https://github.com/SkyeFull90/salesDataSorter'}><button className="btn btn-primary mr-3">View the source code and have fun with this app</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

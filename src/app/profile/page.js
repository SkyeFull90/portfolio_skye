import React from "react";

export default function Profile(){
    return(
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="/IMG_20211105_223720_412.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">I'm a Climber</h1>
                        <p className="py-6">I fell in love with climbing in 2016. And it has become a part of of me to my core. I love getting and rumping around on rock. Even if it's inside.</p>
                        <a href={'https://www.mountainproject.com/user/112227120/skyler-fullmer/ticks'}><button className="btn btn-primary">View my Tick-List on Mountain Project</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
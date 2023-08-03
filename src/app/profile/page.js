import React from "react";

export default function Profile(){
    return(
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <h3 className="gap-4 text-2xl">Here are Few Things To Know...</h3>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="/IMG_20211105_223720_412.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">I'm Climber</h1>
                        <p className="py-6">I fell in love with climbing in 2016. And it has become a part of of me to my core. I love getting and rumping around on rock. Even if it's inside.</p>
                        <button className="btn btn-primary">View my Tick-List on Mountain Project: <a href={'https://www.mountainproject.com/user/112227120/skyler-fullmer/ticks'}>Here</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
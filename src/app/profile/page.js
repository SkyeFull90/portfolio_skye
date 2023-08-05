import React from "react";

export default function Profile(){
    return(
        <div>
            <div className="hero min-h-screen py-20" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center content-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <h3 className="mb-5 text-3xl">Here are a few things to know about me. Ranging from my technical experience using: </h3>
                        <p className={'mb-5 text-2xl'}>NextJS to build powerfully elegant websites, to using Python and PyTest to analyze csv data and make sure code coverage is near 100%.</p>
                        <p className={'mb-5 text-2xl'}>To sharing more amazing Climbing content: With the Climb Vlog, Climb Vlog Films, and the Bouldering Around series on YouTube. </p>
                        <p className={"mb-5 text-2xl"}> I'm also a Maker and Cosplayer, which I picked up from going to <a href={'https://fanxsaltlake.com/'}>FanX</a> for the first time. They're celebrating 20 years of their amazing convention in SLC.</p>
                        <p className={'text-xl'}>And so much more. See below for more amazing stories and more items you might like to know about me.</p>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="/IMG_20211105_223720_412.jpg" className="max-w-sm rounded-lg shadow-2xl"  alt={'climber'}/>
                    <div>
                        <h1 className="text-5xl font-bold">I'm a Climber</h1>
                        <p className="py-6">I fell in love with climbing in 2016, because I wanted to climb Tetons. And it has become a part of of me to my core. I love getting and rumping around on rock. Even if it's inside. And one day I will climb the Grand Traverse in one week.</p>
                        <a href={'https://www.mountainproject.com/user/112227120/skyler-fullmer/ticks'}><button className="btn btn-primary">View my Tick-List on Mountain Project</button></a>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/IMG_20230702_212119_612.jpg" className="max-w-sm rounded-lg shadow-2xl"  alt={'developer'}/>
                    <div>
                        <h1 className="text-5xl font-bold">A Developer</h1>
                        <p className="py-6">The covid-19 pandemic brought my climbing career to a halt. When the lock down began, I wondered what i should do with my time inside. So I turned to solo-learn and 100Devs (which i found in 2023),
                            where everyone can learn to code. In 2022, I needed a career change, so I began the long journey to bring me to being job ready as a Software Engineer. 1 failed bootcamp, and a better course later. I'm ready to to show what I got, I've built multiple projects in different languages check them out with the link button below.
                        </p>
                        <a href={'https://github.com/SkyeFull90'}><button className="btn btn-primary">Get Started</button></a>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="/cyperTanjiro.jpg" className="max-w-sm rounded-lg shadow-2xl"  alt={'climber'}/>
                    <div>
                        <h1 className="text-5xl font-bold">A Cosplayer</h1>
                        <p className="py-6">Since childhood I have always been curious and building and making stuff, probably why picked Software Engineering for a career. I meet a really good friend of mine in 2018 2019 who invited me to go to my first convention. The photo to the left is from 2022 FanX. Where they also had a live stream of the convention with special interviews on their, <a href={'https://www.youtube.com/@FanXSaltLakeComicConvention'}>YouTube. </a>I cosplayed as a cyberpunk version of Tanjiro from the anime series Kimetsu No Yaiba Demon Slayer that year. I have now cosplayed for 3years now and it has been highly enjoyable.</p>
                        <a href={'https://www.instagram.com/quirkygek/'}><button className="btn btn-primary">Some of my photos here with a dash of chaos</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
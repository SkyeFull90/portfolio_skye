import React from 'react'
import './globals.css'
export default function page() {
  return (
    <div>
        <header style={{backgroundImage: 'url(/20170331_184527_Film3.jpg)'}}>
            <section className={'h-full'}>
                <h1>Welcome to my ever evolving photo stash</h1>
                <div className="carousel carousel-center rounded-box">
                    <div className="carousel-item">
                        <img src="/desertRats.jpg" height={350} width={350} alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="/cyperTanjiro.jpg" height={350} width={350} alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="/110895792_large_1494357679.jpg" height={350} width={350} alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="/gear.png" height={350} width={350} alt="Pizza" />
                    </div>
                </div>
                <h1>Here are some some of routes I have enjoyed and stories behind them, below.</h1>
            </section>
        </header>
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="/desertRats.jpg" height={350} width={350} alt={'route'} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Desert Rats Be Damned</h1>
                        <h3 className={'text-lg font-bold py-6'}>5.7 YDS | S 4b UK</h3>
                        <h2 className={'text-2xl font-bold'}>Description</h2>
                        <p className="py-6">Short pocketed face protected by hand crack.</p>
                        <h2 className={'text-2xl font-bold'}>Location</h2>
                        <p className="py-6">Travel along the wall and around the corner from T-Rad. Enter the next cove. This route is on the opposite, west-facing wall. First route encountered in the Crack-a-Lackin' sector.</p>
                        <h2 className={'text-2xl font-bold'}>Protection</h2>
                        <p className={'py-6'}>Medium gear</p>
                        <p className={'py-6'}>Good follow, great crack line for beginners I may lead it next time I am there.</p>
                        <button className="btn btn-primary"><a href={'https://www.mountainproject.com/route/108178999/desert-rats-be-damned'}>View The Route On Mountain Project</a></button>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/teamTrailer.jpg" height={350} width={350} className="max-w-sm rounded-lg shadow-2xl"  alt={'route'}/>
                    <div>
                        <h1 className="text-5xl font-bold">Team Trailer</h1>
                        <h3 className={'text-lg font-bold py-6'}>5.8 YDS | 5b French | HVS 4b UK</h3>
                        <h2 className={'text-2xl font-bold'}>Description</h2>
                        <p className="py-6">Really fun warm-up despite the significantly choosy start. Lieback and sidepull straight up the crack feature, using positive stemming.</p>
                        <h2 className={'text-2xl font-bold'}>Location</h2>
                        <p className="py-6">Right of 11 O'clock, left of The Bicycle Thief.</p>
                        <h2 className={'text-2xl font-bold'}>Protection</h2>
                        <p className={'py-6'}>Bolts to sport anchors. (about 10-12 sport or alpine draws. The crack face can be protected: small, medium and some wide crack gear for the wide crack crux near the top.)</p>
                        <p className={'py-6'}>Great intro to offwidth. Good offwidth crack in the middle of the route if you just use the crack it self. The offwidth crux is on par of most off-widths thuggy with a lot of hand and fist stacks with chicken wing arms in the middle.</p>
                        <button className="btn btn-primary"><a href={'https://www.mountainproject.com/route/107695410/team-trailer'}>View The Route On Mountain Project</a></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="/110895792_large_1494357679.jpg" className="max-w-sm rounded-lg shadow-2xl"  alt={'route'}/>
                <div>
                    <h1 className="text-5xl font-bold">Annie Git Yer Drill</h1>
                    <h3 className={'text-lg font-bold py-6'}>5.9 YDS | 5c French | HVS 5a UK</h3>
                    <h2 className={'text-2xl font-bold'}>Description</h2>
                    <p className="py-6">This popular route start near the where the main leads to the base of the cliff. This climb has enjoyable crack moves at the bottom and generic pocket and face climbing at the top. A fun route.</p>
                    <h2 className={'text-2xl font-bold'}>Location</h2>
                    <p className="py-6">The main trail that passes White Buffalo leads to the base of the route. It is the first route to the right of Claim Jumper</p>
                    <h2 className={'text-2xl font-bold'}>Protection</h2>
                    <p className={'py-6'}>6-7 bolts</p>
                    <p className={'py-6'}>Great first follow, even though my feet were worse for wear. Good first route at the international climbers festival.</p>
                    <button className="btn btn-primary"><a href={'https://www.mountainproject.com/route/105841378/annie-git-yer-drill'}>View The Route On Mountain Project</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}

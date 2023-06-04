"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useWindowSize } from "usehooks-ts";
import React, { useState, useRef } from "react";
import Image from "next/image";
import InputField from "@/components/home/InputField";
import SelectMenu from "@/components/home/SelectMenu";
import ToggleSwitch from "@/components/home/ToggleSwitch";
import CaseStudiesBox from "@/components/home/CaseStudiesBox";

export default function Home() {
  // const { stargazers_count: stars } = await fetch(
  //   "https://api.github.com/repos/steven-tey/precedent",
  //   {
  //     ...(process.env.GITHUB_OAUTH_TOKEN && {
  //       headers: {
  //         Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
  //         "Content-Type": "application/json",
  //       },
  //     }),
  //     // data will revalidate every 60 seconds
  //     next: { revalidate: 60 },
  //   },
  // )
  //   .then((res) => res.json())
  //   .catch((e) => console.log(e));
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [paused, setPaused] = useState(true);
  const { width } = useWindowSize();
  const [formData, setFormData] = useState({
    handle: "",
    email: "",
    type: "creator",
    recieve: false,
  });
  const toggleVideo = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setPaused(false);
    } else {
      setPaused(true);
      videoRef.current?.pause();
    }
  };
  return (
    <>
      <div className="relative z-20 flex  w-full flex-col items-center justify-start">
      <div className="flex w-[90%] max-w-[1080px] flex-col items-center justify-start">
      
      <div className= " px-4 py-16  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 justify-start flex flex-col items-center justify-start text-center ">
        <div className="relative max-w-2xl sm:max-w-xl md:max-w-2xl sm:text-center justify-start flex flex-col items-center justify-start text-center ">
          <h1 style={{ lineHeight: 1.3 }}  className=" mb-6 font-sans text-3xl font-bold tracking-tight sm:text-5xl  justify-start  items-center justify-start text-center ">
          Join the most profitable program for {' '}
          <span className="relative text-primary">Photographers!</span>
          
          </h1>
          <p className="mb-6 text-base text-gray-700 md:text-lg">
          Bring your existing network of adult creators to our platform and earn a lifetime commissions on their earnings!
          </p>
         
         
          <a
            href="#start"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto  duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border-t border-solid border-paleGray ">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
          
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              Meet 
              {'  '}
              <span className="inline-block text-primary"> fanse</span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg">Fanse is a leading platform for adult content creators and sex workers that provide a safe and secure space to monetize their fanbase and reach a wider audience.</p>
           
        <div style={{ marginTop: 10}} >
          
          
          
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
              <Image
              style={{ marginTop: 1, marginRight:15}}
                    src="/verify-blue.svg"
                    width={30}
                    height={30}
                    alt="thunder-ico"
                  />
              </span>
              <p>
              <b>Subscription platform</b> for Adult Creators:
                Connect with your fans, Sell Content & Take home 80% of earnings!
              </p>
              
            </li>
            <li className="flex items-start">
              <span className="mr-1">
              <Image
              style={{ marginTop: 1, marginRight:10}}
                    src="/verify-blue.svg"
                    width={30}
                    height={30}
                    alt="thunder-ico"
                  />
              </span>
              <p>
              <b>Automate tools </b> to promote your brand: AI content Generator, Creator’s collaboration and <b>more! </b>
              </p>
             
            </li>
            <li className="flex items-start">
              <div className="mr-1">
              <Image
              style={{ marginTop: 1, marginRight:10}}
                    src="/verify-blue.svg"
                    width={30}
                    height={30}
                    alt="thunder-ico"
                  />
                  
              </div>
              <p>
              Built-in features to sell your content:
              <b> Live streams, PPV, Paid Video Calls,
              and many more!</b>
              </p>
              
                          </li>
          </ul>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-primary"
          >
           
          </a>

          <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              About the program 
            </h2>
            <p className="text-gray-700 text-base md:text-lg">The program offers a fantastic way to not only support your own income but also help your creators succeed in their adult content journey.</p>
           
        </div>
          </div>
         
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-2/5">
            <img className="object-cover" src="phone2.png" alt="" />
          </div>
          <div className="w-5/12 -ml-16 lg:-ml-32">
            <img className="object-cover" src="/phone1.png" alt="" />
          </div>
        </div>
      </div>
      
    </div>
    
    <div className=" py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border-t border-solid border-paleGray ">
     
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
           
            <span className="relative text-primary"> win-win </span>
          </span>{' '}
           for your clients
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Our program is a win-win situation where your creators can
        continue earning on other platforms while also maximizing
        their potential on Fanse.
        </p>
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
          <div className="mb-6">
            <div className="flex items-center justify-between pb-6 mb-6 border-b">
              <div>
                <p className="text-sm text-primary font-bold tracking-wider uppercase">
                  Benefits for
                </p>
                <p className="text-3xl font-extrabold">Photographers</p>
              </div>
              
            </div>
            <div>
              <p className="mb-2 font-bold tracking-wide">Benefits</p>
              <ul className="space-y-4">
                <li  className="flex items-top">
                  <div  style={{ marginTop: 3}} className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">
                  <b>5% lifetime </b> on each creator you bring.
                  </p>
                </li>
                <li className="flex">
                  <div style={{ marginTop: 3}} className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800"><b>Full support for your creators</b> (copy content from other
platforms and marketing assistance).</p>
                </li>
                <li className="flex ">
                  <div style={{ marginTop: 3}} className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                     
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800"> <b> Personal link </b>with auto withdrawals and tracking.</p>
                </li>
                <li className="flex ">
                  <div style={{ marginTop: 3}} className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                   
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">Payment methods: <b>Bank transfer & cryptocurrencies</b></p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href="https://calendly.com/fanse/meeting"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-black rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
            >
              Let's start
            </a>
            
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
          <div className="mb-6">
            <div className="flex items-center justify-between pb-6 mb-6 border-b">
              <div>
                <p className="text-sm text-primary font-bold tracking-wider uppercase">
                  Benefits for
                </p>
                <p className="text-3xl text font-extrabold">Creators</p>
              </div>
              <Image
                    src="/verify-blue.svg"
                    width={50}
                    height={50}
                    style={{ marginRight: 10 }}
                    alt="thunder-ico"
                  />
            </div>
            <div>
              <p className="mb-2 font-bold tracking-wide">Benefits</p>
              <ul className="space-y-4">
                <li  className="flex items-top">
                  <div  style={{ marginTop: 3}} className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">
                  <b>Higher visibility</b> on Fanse platform with a top-ranking position
exclusively for <b>your referred creators.</b>
                  </p>
                </li>
                <li className="flex">
                  <div style={{ marginTop: 3}} className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800"><b>Private Marketing support & promotional</b> content to help your
referred creators boost their online brand.</p>
                </li>
                <li className="flex ">
                  <div style={{ marginTop: 3}} className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                     
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">Fanse actively <b>drives paying customers</b> to your creators.</p>
                </li>
                <li className="flex ">
                  <div style={{ marginTop: 3}} className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                   
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800"><b>Platform support</b> to help your creators grow their fanbase.</p>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <div id="start" className=" py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
         
        </div>
        <h2 style={{ lineHeight: 1.3 }} className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative ">How does it work ?</span>
          </span>
        </h2>
        <p className="text-base text-center text-gray-700 md:text-lg">
          Join fanse program in just few quick & easy steps! 
        </p>
      </div>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:py-20">
      <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Step 1</p>
            <p className="flex items-center justify-center w-8 h-8 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              1
            </p>
          </div>
          <p className="text-sm text-gray-900">
          Schedule a 15min meeting to get access 


          </p>
          <a
          href="https://calendly.com/fanse/meeting"
          style={{ marginTop: 20 }}
          className="inline-flex items-center justify-center w-full h-12 px-6 font-sm text-sm tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-black hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
           Schedule now
        </a>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Step 2</p>
            <p className="flex items-center justify-center w-8 h-8 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              2
            </p>
          </div>
          <p className="text-sm text-gray-900">
          We make your Fanse account as a 'Talent rep' and you're now able to bring creators into Fanse.


          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Step 3</p>
            <p className="flex items-center justify-center w-8 h-8 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              3
            </p>
          </div>
          <p className="text-sm text-gray-900">
          Contact your models and let them know about the new opportunity.


          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Make money</p>
            <p className="flex items-center justify-center w-8 h-8 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
            💰
            </p>
          </div>
          <p className="text-sm text-gray-900">
          Track your earnings & your creators through 'Creators By Talent Rep'
          </p>
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://calendly.com/fanse/meeting"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-black hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Let's meet
        </a>
      </div>
    </div>
      </div>   

    
        
          <section className="case mt-14 flex w-full flex-col items-center justify-start md:mt-32 md:gap-5 ">
            <div className="flex flex-col items-center justify-start text-center">
              <h2 className="text-[28px] font-bold text-black">Trusted by Top Adult Content Creators</h2>
              <p className="text-base font-normal text-black">
              Trusted and Loved by Thousands of Adult Creators, Artists, and Influencers!
              </p>
            </div>
            <Splide
              options={{
                rewind: true,
                width: "100%",
                pagination: false,
                arrows: true,
                perPage: 4,
                perMove: 1,
                gap: "10px",
                drag: true,
                breakpoints: {
                  920: {
                    perPage: 3,
                
                  },
                  725: {
                    perPage: 1,
                 
                  },
                  500: {
                    perPage: 2,
                  
                  },
                },
              }}
            >
              <SplideSlide>
                <CaseStudiesBox
                  poster="/media (2).jpg"
                  video="video.mp4"
                  name="Oops… 🤭"
                  tag="@LoxDayz"
                />
              </SplideSlide>
              <SplideSlide>
                <CaseStudiesBox
                  poster="/media (3).jpg"
                  video="video.mp4"
                  name="naughty stuff 🤫"
                  tag="@GorigeCrone"
                />
              </SplideSlide>
              <SplideSlide>
                <CaseStudiesBox
                  poster="/1.jpg"
                  video="video.mp4"
                  name="Dear crush, hi. 🤭"
                  tag="@AmeliaAngel"
                />
              </SplideSlide>
              <SplideSlide>
                <CaseStudiesBox
                  poster="/2.jpg"
                  video="video.mp4"
                  name="PAWG girlfriend 😉"
                  tag="@SultryStar"
                />
              </SplideSlide>
              <SplideSlide>
                <CaseStudiesBox
                  poster="/3.jpg"
                  video="video.mp4"
                  name="sexiest outfits 🤤"
                  tag="@MadisonMagic"
                />
              </SplideSlide>
              <SplideSlide>
                <CaseStudiesBox
                  poster="/4.jpg"
                  video="video.mp4"
                  name="Sunday Vibezzz  😂"
                  tag="@BellaBliss"
                />
              </SplideSlide>
              <SplideSlide>
                <CaseStudiesBox
                  poster="/5.jpg"
                  video="video.mp4"
                  name="Cum see me 💦"
                  tag="@LunaDesires"
                />
              </SplideSlide>
              <SplideSlide>
                <CaseStudiesBox
                  poster="/6.jpg"
                  video="video.mp4"
                  name="Getting started 🔥"
                  tag="@fairyrutii"
                />
              </SplideSlide>
              <SplideSlide>
                <CaseStudiesBox
                  poster="/7.jpg"
                  video="video.mp4"
                  name="Pleasure*** 🥵"
                  tag="@Goddessophie"
                />
              </SplideSlide>
              
            </Splide>
          </section>
          
          <section className="mt-20 flex items-center justify-center gap-10 border-t border-solid border-paleGray pt-20">
            {/* <div className="flex flex-col items-center justify-start gap-3 text-center lg:items-start lg:text-left">
              <h2 className="text-[28px] font-bold text-black">
                Let{"'"}s get started!
              </h2>
              <p className="text-lg font-normal text-black">
                Create an account to start using fanse <br /> Creator
                Place
              </p>
              <button className="mt-3 h-[44px] w-[140px] rounded bg-[#0DAFEB] text-base text-white hover:brightness-90">
                Sign up
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-start sm:gap-12">
            
              <div className="flex flex-col items-center justify-start gap-4 text-center">
                <Image width={100} height={100} src="/fanse.svg" alt="ico" />

                <p className="text-base font-semibold text-[#333]">
                  #1 empowering platform<br /> for creators
                </p>
              </div>
              
            </div> */}
            <div  className="center-buttons " >
            <div className="flex flex-col items-center justify-start text-center">
            <p  className="text-base font-normal text-black gap-10">
                what are you waiting for ?
              </p>
              <h2 style={{ marginBottom: 40 }}  className="text-[34px] font-bold text-black">Join the most profitable program for photographers</h2>
            </div>
            <a
                  href="https://calendly.com/fanse/meeting"
                  target="blank"
                  style={{ maxWidth: 350 , fontSize: 17}}
                  className="flex h-[50px]  w-full items-center justify-center gap-3 rounded-full rounded-full border border-black bg-black p-1.5 px-8 text-base text-sm font-bold text-white transition-all transition-all duration-100 hover:bg-white hover:text-black text-[17px]"
                >
                  {" "}
                  Schedule a meeting
                </a>
              
               
                </div>
          </section>
        </div>
      </div>
    </>
  );
}

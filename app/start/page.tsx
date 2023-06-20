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
          <div className=" px-4 py-16  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 justify-start flex flex-col items-center justify-start text-center ">
            <div className="relative max-w-2xl sm:max-w-xl md:max-w-2xl sm:text-center justify-start flex flex-col items-center justify-start text-center ">
              <h1
                style={{ lineHeight: 1.3 }}
                className=" mb-6 font-sans text-3xl font-bold tracking-tight sm:text-5xl  justify-start  items-center justify-start text-center "
              >
                A Step-by-Step Guide for{" "}
                <span className="relative text-primary"> New Creators</span>
              </h1>
              <p className="mb-6 text-base text-gray-700 md:text-lg">
                Get ready to monetize your content like never before! This guide
                will walk you through setting up your account and starting your
                journey on Fanse. Let's get started!
              </p>

              <div className="flex items-center justify-center">
                <div className="w-2/5">
                  <img className="object-cover" src="stats2.png" alt="" />
                </div>
                <div className="w-5/12 -ml-16 lg:-ml-32">
                  <img className="object-cover" src="/stats1.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border-t border-solid border-paleGray ">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                    Step
                    {"  "}
                    <span className="inline-block text-primary"> 1</span>
                  </h2>
                  <h2 className="font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none max-w-lg mb-6">
                    Set up Your Profile
                  </h2>
                  <p className="text-gray-700 text-base md:text-lg">
                    The first step to attracting fans is to create a killer
                    profile. Here's what you need to do:
                  </p>

                  <div style={{ marginTop: 20 }}>
                    <ul className="mb-4 -ml-1 space-y-2">
                      <li style={{ marginTop: 10 }} className="flex items-start">
                        <span className="mr-1">
                          <Image
                            style={{  marginRight: 10 }}
                            src="/check-mark-circle-icon.svg"
                            width={25}
                            height={25}
                            alt="thunder-ico"
                          />
                        </span>
                        <p>
                          <b>Upload a captivating profile picture.</b> Show your
                          best, most attractive self.
                        </p>
                        
                      </li>
                      <li style={{ marginTop: 10 }} className="flex items-start">
                        <span className="mr-1">
                          <Image
                            style={{  marginRight: 10 }}
                            src="/check-mark-circle-icon.svg"
                            
                            width={25}
                            height={25}
                            alt="thunder-ico"
                          />
                        </span>
                        <p>
                          <b>Set up your profile banner. </b> This is your stage
                          to shine, make it count!
                        </p>
                      </li>
                      <li style={{ marginTop: 10 }} className="flex items-start">
                        <div className="mr-1">
                          <Image
                            style={{ marginRight: 5 }}
                            src="/check-mark-circle-icon.svg"
                            width={25}
                            height={25}
                            alt="thunder-ico"
                          />
                        </div>
                        <p>
                          <b> Write a compelling bio.</b> Be intriguing, be
                          exciting,
                          <b> be you! </b>
                        </p>
                      </li>
                    </ul>

                    <div  style={{ marginTop: 25 }} >
                          <a
                            href="https://calendly.com/fanse/meeting"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-black hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          >
                            Set up your profile
                          </a>
                        </div>
                        <p  style={{ marginTop: 25 }}>
                          <b>Bio Ideas :</b>
                        </p>
                  <div style={{ marginTop: 25 }} className=" duration-300 transform bg-white border rounded shadow-sm  inline-flex bg-white leading-none ${props.textColor} rounded p-4 sh  ">
                      
                      <span style={{ lineHeight: 1.4 }} className="inline-flex  text-gray-700">
                      Your naughty girl next door 😈 Lover of fine wine and wild nights. Subscribe to see more… if you dare 😉

                      </span>
                  </div>
                  <div style={{ marginTop: 25 }} className=" duration-300 transform bg-white border rounded shadow-sm  inline-flex bg-white leading-none ${props.textColor} rounded p-4 sh  ">
                  
                      <span style={{ lineHeight: 1.4 }} className="inline-flex text-gray-700">
                      Sultry seductress with a love for lace and luxury. Unlock my world for the finest indulgences ✨

                      </span>
                  </div>
                  <div style={{ marginTop: 25 }} className=" duration-300 transform bg-white border rounded shadow-sm  inline-flex bg-white leading-none ${props.textColor} rounded p-4 sh ">
                  
                      <span style={{ lineHeight: 1.4 }} className="inline-flex  text-gray-700">
                      Join me in my private playground 🔥 I promise you, it’s much more fun in here.

                      </span>
                  </div>

                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:w-1/2">
                <div className="w-3/5">
                  <img className="object-cover" src="editprofile1.png" alt="" />
                </div>
                
              </div>
            </div>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border-t border-solid border-paleGray ">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                    Step
                    {"  "}
                    <span className="inline-block text-primary"> 2</span>
                  </h2>
                  <h2 className="font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none max-w-lg mb-6">
                  Set Your Subscription Price + PPV Welcome Message

                  </h2>
                  <p className="text-gray-700 text-base md:text-lg">
                  Now, let's talk money. How much should you charge for your monthly subscription?
                  <p style={{ marginTop: 5 }}  >We <b>recommend</b> starting between <b> $10-$20 </b> but feel free to adjust it as you become more comfortable with the platform. </p>
                  <p style={{ marginTop: 5 }}  >Remember, you can always change your subscription price later. </p>
                  </p>
                  <div  style={{ marginTop: 25 }} >
                          <a
                            href="https://calendly.com/fanse/meeting"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-black hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          >
                             set up your subscription price
                          </a>
                        </div>

                  
                </div>
              </div>
              <div className="flex items-center justify-center lg:w-1/2">
                <div className="w-3/5">
                  <img className="object-cover" src="subs3.png" alt="" />
                </div>
                
              </div>
            </div>
          </div>

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border-t border-solid border-paleGray ">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                    Step
                    {"  "}
                    <span className="inline-block text-primary"> 3</span>
                  </h2>
                  <h2 className="font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none max-w-lg mb-6">
                  Start Posting Content
                  </h2>
                  <p className="text-gray-700 text-base md:text-lg">
                  Next up, content! <b>Start by posting 5-10</b> content to your page.
                 <p style={{ marginTop: 5 }} >
                 These can be spicy selfies, teasing videos, or anything that represents you and the type of content you'll be sharing.
                 </p>
                   </p>

                  <div style={{ marginTop: 20 }}>
                    

                  
                
                        <p  style={{ marginTop: 25 }}>
                          <b>Caption Ideas:</b>
                        </p>
                  <div style={{ marginTop: 25 }} className=" w-full duration-300 transform bg-white border rounded shadow-sm  inline-flex bg-white leading-none ${props.textColor} rounded p-4 sh  ">
                      
                      <span style={{ lineHeight: 1.4 }} className="inline-flex  text-gray-700">
                      Just a taste of what's to come...want more? 😘


                      </span>
                  </div>
                  <div style={{ marginTop: 25 }} className=" duration-300 transform bg-white border rounded shadow-sm  inline-flex bg-white leading-none ${props.textColor} rounded p-4 sh  ">
                  
                      <span style={{ lineHeight: 1.4 }} className="inline-flex text-gray-700">
                      If you think this is hot, wait till you see what’s behind the paywall 🔥

    
                      </span>
                  </div>
                  <div style={{ marginTop: 25 }} className=" duration-300 transform bg-white border rounded shadow-sm  inline-flex bg-white leading-none ${props.textColor} rounded p-4 sh ">
                  
                      <span style={{ lineHeight: 1.4 }} className="inline-flex  text-gray-700">
                      Just a sneak peek of what’s to come. Want to see the rest? It’s waiting behind the paywall. 💕

                      </span>
                  </div>

                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:w-1/2">
                <div className="w-2/5">
                  <img className="object-cover" src="profile2.png" alt="" />
                </div>
                <div className="w-6/12 -ml-16 lg:-ml-32">
                  <img className="object-cover" src="/post.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border-t border-solid border-paleGray ">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                    Step
                    {"  "}
                    <span className="inline-block text-primary"> 4</span>
                  </h2>
                  <h2 className="font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none max-w-lg mb-6">
                  Set Your Following Welcome Message + PPV


                  </h2>
                  <p className="text-gray-700 text-base md:text-lg">
                  Time to create your welcome message. This automated message will be sent to all new fans when they subscribe. This is a great place to <b>include a PPV (pay-per-view) </b> post with exclusive content, priced <b>around $5-$10 </b>, to add an additional revenue stream right from the start.                
                  </p>
                  <div style={{ marginTop: 20 }}>
                     <p  style={{ marginTop: 25 }}>
                          <b>Welcome Message Ideas:</b>
                     </p>
                  <div style={{ marginTop: 25 }} className=" w-full duration-300 transform bg-white border rounded shadow-sm  inline-flex bg-white leading-none ${props.textColor} rounded p-4 sh  ">
                      
                      <span style={{ lineHeight: 1.4 }} className="inline-flex  text-gray-700">
                      Welcome to my private world. To kick things off, here’s a little treat...only for your eyes 😉 It’s just $5 for a peek!
                      </span>
                  </div>
                  <div style={{ marginTop: 25 }} className=" duration-300 transform bg-white border rounded shadow-sm  inline-flex bg-white leading-none ${props.textColor} rounded p-4 sh  ">
                  
                      <span style={{ lineHeight: 1.4 }} className="inline-flex text-gray-700">
                      So glad you’ve joined me here! I've got a sexy surprise waiting for you...are you ready to unwrap it? Only $10 for the pleasure 😘"
                      </span>
                  </div>                
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:w-1/2">
                <div className="w-3/5">
                  <img className="object-cover" src="follow.png" alt="" />
                </div>
              
              </div>
            </div>
          </div>
          

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border-t border-solid border-paleGray ">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                    Step
                    {"  "}
                    <span className="inline-block text-primary"> 5</span>
                  </h2>
                  <h2 className="font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none max-w-lg mb-6">
                  Promote Your Page
                  </h2>
                  <p className="text-gray-700 text-base md:text-lg">
                  Your Fanse profile link is easy to grab and share. Go to your profile and copy the URL, it's that simple! Share this link on all your social platforms and invite your fans to join you here. 
                 <p style={{ marginTop: 5 }} >
                 The more active and engaged you are with your fans, the more successful you will be.
                 </p>
                   </p>

                  <div style={{ marginTop: 20 }}>
                    

                  
                
                        <p  style={{ marginTop: 25 }}>
                          <b>Remember, your profile link looks like this:</b>
                        </p>
                  <div style={{ marginTop: 25 }} className=" w-full duration-300 transform bg-white border rounded shadow-sm  inline-flex bg-white leading-none ${props.textColor} rounded p-4 sh  ">
                      
                      <span style={{ lineHeight: 1.4 }} className="inline-flex  text-gray-700">
                      https://fanse.io/<b>your-username</b>


                      </span>
                  </div>
                  

                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:w-1/2">
                <div className="w-3/5">
                  <img className="object-cover" src="promote4.png" alt="" />
                </div>
               
              </div>
            </div>
          </div>
          

          
          

          <section className="case mt-14 flex w-full flex-col items-center justify-start md:mt-32 md:gap-5 ">
            <div className="flex flex-col items-center justify-start text-center">
              <h2 className="text-[28px] font-bold text-black">
                Trusted by Top Adult Content Creators
              </h2>
              <p className="text-base font-normal text-black">
                Trusted and Loved by Thousands of Adult Creators, Artists, and
                Influencers!
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
            <div className="center-buttons ">
              <div className="flex flex-col items-center justify-start text-center">
                <p className="text-base font-normal text-black gap-10">
                  what are you waiting for ?
                </p>
                <h2
                  style={{ marginBottom: 40 }}
                  className="text-[34px] font-bold text-black"
                >
                  Need More Help?

                </h2>
               
              </div>
              <a
                href="https://calendly.com/fanse/meeting"
                target="blank"
                style={{ maxWidth: 350, fontSize: 17 }}
                className="flex h-[50px]  w-full items-center justify-center gap-3 rounded-full rounded-full border border-black bg-black p-1.5 px-8 text-base text-sm font-bold text-white transition-all transition-all duration-100 hover:bg-white hover:text-black text-[17px]"
              >
                {" "}
                Contact Our Support Team
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

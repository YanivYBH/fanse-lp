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
          <section style={{ placeContent: "center" }} className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row ">
            <div className="group relative isolate w-full  max-w-[372px] overflow-hidden rounded-[2rem]">
              <video
                poster="/thumbnail.png"
                ref={videoRef}
                onClick={toggleVideo}
                src="/video.mp4"
                playsInline
                className="cursor-pointer"
              ></video>
              <button
                onClick={toggleVideo}
                className={`absolute left-1/2 top-1/2 z-20 grid h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2  place-items-center rounded-full   bg-primary ${
                  !paused
                    ? "opacity-0 transition-all duration-500 group-hover:opacity-100"
                    : ""
                }`}
              >
                {paused ? (
                  <Image width={30} height={30} src="/play-ico.svg" alt="ico" />
                ) : (
                  <Image
                    width={30}
                    height={30}
                    src="/pause-ico.svg"
                    alt="ico"
                  />
                )}
              </button>
            </div>
            <div className="flex w-full max-w-[430px] flex-col items-center justify-start rounded-[32px] border border-solid border-paleGray px-3 sm:px-6">
              <div className="flex flex-col items-center justify-center gap-2 border-b border-solid border-paleGray py-4 text-center">
                <p className="text-xl sm:text-[28px]"><Image src={"/fanse.svg"} width={60} height={60} alt="ico" /></p>
                <h3 className="text-xl font-bold leading-[1.3] text-black sm:text-[24px]">
                  become a member & <br /> launch your creator profile.
                </h3>
              </div>
              <div className="flex flex-col items-center justify-start gap-2 py-4 text-center">
                <p className="text-sm font-bold text-black">
                  - build your loyal fanbase -
                </p>
                <p className="text-sm font-semibold text-black">
                  Join for free & start monetizing your content!
                </p>
              </div>
              <form className="flex w-full flex-col items-start justify-start gap-4 pb-4 ">
                {/* <InputField
                  value={formData.handle}
                  handler={(e) => {
                    setFormData((prev) => {
                      if (prev.handle.includes("@")) {
                        return {
                          ...prev,
                          handle: `${e.target.value}`,
                        };
                      } else {
                        return {
                          ...prev,
                          handle: `@${e.target.value}`,
                        };
                      }
                    });
                  }}
                  ico="/fanse.svg"
                  label="your fanse wish username"
                />
                <InputField
                  value={formData.email}
                  handler={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                  note="email is private and used to verify new users"
                  label="add email"
                /> */}
                <SelectMenu
                  value={formData.type}
                  label="user type"
                  handler={(value) =>
                    setFormData((prev) => ({ ...prev, type: value }))
                  }
                  options={["creator", "fan"]}
                />
                {/* <ToggleSwitch
                  handler={() =>
                    setFormData((prev) => ({
                      ...prev,
                      recieve: !prev.recieve,
                    }))
                  }
                  label="i want to receive exclusive updates and content from hoo.be"
                  value={formData.recieve}
                /> */}
                <p className="self-center text-center text-xs font-semibold text-[#aaa]">
                  For support & futher inquiries <br /> email us at{" "}
                  <a
                    href="mailto:support@fanse.io"
                    target="blank"
                    className="text-primary underline"
                  >
                    agency@fanse.io
                  </a>
                </p>
                <button
                  type="submit"
                  onSubmit={(e) => e.preventDefault()}
                  className="flex h-[50px] w-full items-center justify-center gap-3 rounded-full border-0 bg-primary px-8 text-base font-bold text-white transition-all duration-100 hover:bg-[#0da4db]"
                >
                  <Image
                    src="/verify.svg"
                    width={24}
                    height={24}
                    alt="thunder-ico"
                  />{" "}
                  Register Now
                </button>
                <p
                  style={{ minWidth: 300 }}
                  className=" mt-1 flex items-center justify-center gap-1 self-center border-t border-solid border-paleGray pt-1"
                ></p>
                <a
                  href="https://test.connect.scrile.com/login"
                  target="blank"
                  className="flex h-[40px] w-full items-center justify-center gap-3 rounded-full rounded-full border border-black bg-black p-1.5 px-8 text-base text-sm font-bold text-white transition-all transition-all duration-100 hover:bg-white hover:text-black"
                >
                  {" "}
                  already a member?
                </a>
              </form>
            </div>
          </section>
          {width > 1024 ? (
           <div>
             <Image style={{ borderRadius: 15, marginTop: 60, boxShadow:'0.5px 0px 10px 1px #5c5c5c2b;' }} src="/banner7.svg" width={1000} height={200} alt="img1" />
            </div>

          ) : (
            <div>
             <Image style={{ borderRadius: 15, marginTop: 60, boxShadow:'0.5px 0px 10px 1px #5c5c5c2b;'}} src="/banner-mob5.svg" width={1000} height={200} alt="img1" />
            </div>
          )}
          {width > 1024 ? (
            <section className="mt-20 flex items-center justify-center gap-10 border-t border-solid border-paleGray pt-20">
              <Image style={{ borderRadius: 15 }} src="/1.svg" width={300} height={400} alt="img1" />
              <Image  style={{ borderRadius: 15 }} src="/2.svg" width={300} height={400} alt="img2" />
              <Image  style={{ borderRadius: 15 }} src="/3.svg" width={300} height={400} alt="img3" />
            </section>
          ) : (
            <section className="mt-10 w-full border-t border-solid border-paleGray pt-10">
              <Splide
                options={{
                  width: "100%",
                  perPage: 1,
                  perMove: 1,
                  drag: true,
                  gap: "15px",
                  arrows: false,
                  pagination: true,
                }}
              >
                <SplideSlide>
                  <Image  style={{ borderRadius: 15 }} src="/1.svg" width={477} height={400} alt="img1" />
                </SplideSlide>
                <SplideSlide>
                  <Image  style={{ borderRadius: 15 }} src="/2.svg" width={477} height={400} alt="img2" />
                </SplideSlide>
                <SplideSlide>
                  <Image  style={{ borderRadius: 15 }} src="/3.svg" width={477} height={400} alt="img3" />
                </SplideSlide>
              </Splide>
            </section>
          )}
          <section className="case mt-14 flex w-full flex-col items-center justify-start md:mt-32 md:gap-5">
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
              <h2 style={{ marginBottom: 40 }}  className="text-[34px] font-bold text-black">Join thousands of adult creators on fanse now!</h2>
            </div>
            <a
                  href="https://test.connect.scrile.com/login"
                  target="blank"
                  style={{ maxWidth: 350 , fontSize: 17}}
                  className="flex h-[50px]  w-full items-center justify-center gap-3 rounded-full rounded-full border border-black bg-black p-1.5 px-8 text-base text-sm font-bold text-white transition-all transition-all duration-100 hover:bg-white hover:text-black text-[17px]"
                >
                  {" "}
                  Join fanse now
                </a>
              
                <a
                  href="/faq"
                  target="blank"
                  style={{ marginTop:20, maxWidth: 150 , fontSize: 14 }}
                  className="flex h-[40px]  w-full items-center justify-center gap-3 rounded-full rounded-full border border-black bg-black p-1.5 px-8 text-base text-sm font-bold text-white transition-all transition-all duration-100 hover:bg-white hover:text-black text-[17px]"
                >
                  {" "}
                  FAQ
                </a>
                </div>
          </section>
        </div>
      </div>
    </>
  );
}

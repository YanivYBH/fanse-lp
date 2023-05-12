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
                className={`absolute left-1/2 top-1/2 z-20 grid h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2  place-items-center rounded-full border border-solid border-white bg-primary ${
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
                <p className="text-xl sm:text-[28px]">🚀</p>
                <h3 className="text-xl font-bold leading-[1.3] text-black sm:text-[28px]">
                  become a member & <br /> launch your creator hub.
                </h3>
              </div>
              <div className="flex flex-col items-center justify-start gap-2 py-4 text-center">
                <p className="text-sm font-bold text-black">
                  - build your fanbase -
                </p>
                <p className="text-sm font-semibold text-black">
                  sign up for one month free from fees
                </p>
              </div>
              <form className="flex w-full flex-col items-start justify-start gap-4 pb-4 ">
                <InputField
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
                />
                <SelectMenu
                  value={formData.type}
                  label="user type"
                  handler={(value) =>
                    setFormData((prev) => ({ ...prev, type: value }))
                  }
                  options={["creator", "brand", "agency/manager"]}
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
                  working with an agency or group of talent? <br /> email us at{" "}
                  <a
                    href="mailto:agency@fanse.io"
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
                  Join Us Now
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
            <section className="mt-20 flex items-center justify-center gap-10 border-t border-solid border-paleGray pt-20">
              <Image src="/img1.webp" width={277} height={400} alt="img1" />
              <Image src="/img2.webp" width={277} height={400} alt="img2" />
              <Image src="/img3.webp" width={277} height={400} alt="img3" />
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
                  <Image src="/img1.webp" width={477} height={400} alt="img1" />
                </SplideSlide>
                <SplideSlide>
                  <Image src="/img2.webp" width={477} height={400} alt="img2" />
                </SplideSlide>
                <SplideSlide>
                  <Image src="/img3.webp" width={477} height={400} alt="img3" />
                </SplideSlide>
              </Splide>
            </section>
          )}
          <section className="case mt-14 flex w-full flex-col items-center justify-start md:mt-32 md:gap-5">
            <div className="flex flex-col items-center justify-start text-center">
              <h2 className="text-[28px] font-bold text-black">Case studies</h2>
              <p className="text-base font-normal text-black">
                View these case studies from the Creator Marketplace for
                inspiration
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
                    perPage: 1,
                  
                  },
                },
              }}
            >
              <SplideSlide>
                <CaseStudiesBox
                  poster="/card (4).webp"
                  video="video.mp4"
                  name="Oops…🤭"
                  tag="@GorigeCrone"
                />
              </SplideSlide>
              <SplideSlide>
                <CaseStudiesBox
                  poster="/card (2).webp"
                  video="video.mp4"
                  name="naughty stuff 🤫"
                  tag="@LoxDayz"
                />
              </SplideSlide>
              <SplideSlide>
                <CaseStudiesBox
                  poster="/card (3).webp"
                  video="video.mp4"
                  name="Lani Nani"
                  tag="@itslaninani"
                />
              </SplideSlide>
              <SplideSlide>
                <CaseStudiesBox
                  poster="/card (5).webp"
                  video="video.mp4"
                  name="Come see my big🍒"
                  tag="@Jessthebeauty"
                />
              </SplideSlide>
              <SplideSlide>
                <CaseStudiesBox
                  poster="/card (2).webp"
                  video="video.mp4"
                  name="Newton Baby"
                  tag="@tayandthetwins"
                />
              </SplideSlide>
              <SplideSlide>
                <CaseStudiesBox
                  poster="/card (3).webp"
                  video="video.mp4"
                  name="Newton Baby"
                  tag="@tayandthetwins"
                />
              </SplideSlide>
              
            </Splide>
          </section>
          
          {/* <section className="mt-14 flex w-full flex-col items-center justify-between  gap-10 md:mt-32 lg:flex-row">
            <div className="flex flex-col items-center justify-start gap-3 text-center lg:items-start lg:text-left">
              <h2 className="text-[28px] font-bold text-black">
                Let{"'"}s get started!
              </h2>
              <p className="text-lg font-normal text-black">
                Create an account to start using the TikTok <br /> Creator
                Marketplace
              </p>
              <button className="mt-3 h-[44px] w-[140px] rounded bg-[#ff0258] text-base text-white hover:brightness-90">
                Sign up
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-start sm:gap-12">
              <div className="flex flex-col items-center justify-start gap-4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#5783fc"
                  className="h-12 w-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                  />
                </svg>
                <p className="text-base font-semibold text-[#333]">
                  150+ Markets
                </p>
              </div>
              <div className="flex flex-col items-center justify-start gap-4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#5783fc"
                  className="h-12 w-12"
                >
                  <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                  <path
                    fillRule="evenodd"
                    d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zM12 10.5a.75.75 0 01.75.75v4.94l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72v-4.94a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-base font-semibold text-[#333]">
                  #1 Downloaded app <br /> in 40+ countries
                </p>
              </div>
              <div className="flex flex-col items-center justify-start gap-4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#5783fc"
                  className="h-12 w-12"
                >
                  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                </svg>

                <p className="text-base font-semibold text-[#333]">
                  35+ Languages
                </p>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
}

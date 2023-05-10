"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useWindowSize } from "usehooks-ts";
import React, { useState, useRef } from "react";
import Image from "next/image";
import InputField from "@/components/home/InputField";
import SelectMenu from "@/components/home/SelectMenu";
import ToggleSwitch from "@/components/home/ToggleSwitch";
import { AlignCenter } from "lucide-react";

export default function Home() {

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
        <div className="flex w-[90%] max-w-[900px] flex-col items-center justify-start">
          <section className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row ">
            
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
                className={`absolute left-1/2 top-1/2 z-20 grid h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2  place-items-center rounded-full bg-primary ${
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
        </div>
      </div>
    </>
  );
}

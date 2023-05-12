import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  video: string;
  tag: string;
  name: string;
  poster: string;
};

// const CaseStudiesBox = ({ video, tag, name, poster }: Props) => {
//   const [hovering, setHovering] = useState(false);
//   const [muted, setMuted] = useState(true);
//   const [videoLoading, setVideoLoading] = useState(false);
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   useEffect(() => {
//     if (videoRef.current) {
//       if (hovering) {
//         videoRef.current?.play();
//         if (videoRef.current.currentTime >= 0) {
//           setVideoLoading(false);
//         } else {
//           setVideoLoading(true);
//         }
//       } else {
//         videoRef.current?.pause();
//         videoRef.current.currentTime = 0;
//       }
//     }
//   }, [hovering]);

//   return (
//     <div
//       onMouseEnter={() => setHovering(true)}
//       onMouseLeave={() => setHovering(false)}
//       className="flex w-full max-w-[250px] flex-col items-start  justify-start overflow-hidden rounded-xl bg-white shadow-lg  md:max-w-none"
//     >
//       <div className="group relative h-[400px] w-full bg-lightShadow">
//         {hovering && (
//           <button
//             onClick={() => setMuted((prev) => !prev)}
//             className="absolute left-3 top-3  z-20 grid h-7 w-7 place-items-center rounded-full bg-white bg-opacity-60 text-white"
//           >
//             {muted ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="h-5 w-5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="h-5 w-5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
//                 />
//               </svg>
//             )}
//           </button>
//         )}

//         <button
//           onClick={() => setMuted((prev) => !prev)}
//           className="pointer-events-none absolute left-1/2 top-1/2 z-20  grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white bg-opacity-60 text-white transition-all duration-300 group-hover:opacity-0"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="h-8 w-8"
//           >
//             <path
//               fillRule="evenodd"
//               d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//         {videoLoading && (
//           <div className="pointer-events-none absolute left-1/2 top-1/2 z-20  -translate-x-1/2 -translate-y-1/2 ">
//             <Image src="/loader.gif" alt="loader" width={30} height={30} />
//           </div>
//         )}
//         <video
//           ref={videoRef}
//           className="h-full w-full object-cover"
//           src={video}
//           muted={muted}
//           poster={poster}
//           controls={hovering}
//           loop
//           playsInline
//         ></video>
//       </div>
//       <div className="flex flex-col items-start justify-start px-6 py-3 ">
//         <h4 className="text-lg font-bold text-black">{tag}</h4>
//         <p className="text-lg text-[#333]">{name}</p>
//       </div>
//     </div>
//   );
// };
const CaseStudiesBox = ({ tag, name, poster }: Props) => {
  return (
    <div className="flex w-full max-w-[350px] flex-col items-start  justify-start overflow-hidden rounded-xl bg-white shadow-lg  md:max-w-none">
      <div className="group relative h-[400px] w-full bg-lightShadow">
        <Image style={{ objectFit: "cover" }}  src={poster} alt={name} fill />
      </div>
      <div className="flex flex-col items-start justify-start px-6 py-3 ">
        <h4 style={{ fontSize: 13 }}className="font-bold text-black">{tag}</h4>
        <p  style={{ fontSize: 12 }} className="text-[#333]">{name}</p>
      </div>
    </div>
  );
};

export default CaseStudiesBox;

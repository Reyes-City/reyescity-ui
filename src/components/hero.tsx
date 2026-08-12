// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import { useEffect, useRef, useState } from "react";
// import { TiLocationArrow } from "react-icons/ti";

// import { Button } from "./button";
// import { VIDEO_LINKS } from "@/constants";

// gsap.registerPlugin(ScrollTrigger);

// export const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const [hasClicked, setHasClicked] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [loadedVideos, setLoadedVideos] = useState(0);

//   const nextVideoRef = useRef<HTMLVideoElement>(null);

//   const totalVideos = 4;
//   const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

//   const handleMiniVideoClick = () => {
//     setHasClicked(true);

//     setCurrentIndex(upcomingVideoIndex);
//   };

//   const VIDEO_KEYS = ["hero1", "hero2", "hero3", "hero4"] as const;
//   const getVideoSrc = (i: number) => {
//     const key = VIDEO_KEYS[i - 1]; // Subtract 1 because the array is 0-indexed, but the video indices are 1-based
//     return VIDEO_LINKS[key];
//   };

//   const handleVideoLoad = () => {
//     setLoadedVideos((prevVideos) => prevVideos + 1);
//   };

//   useEffect(() => {
//     if (loadedVideos === totalVideos - 1) setIsLoading(false);
//   }, [loadedVideos]);

//   useGSAP(
//     () => {
//       if (hasClicked) {
//         gsap.set("#next-video", { visibility: "visible" });

//         gsap.to("#next-video", {
//           transformOrigin: "center center",
//           scale: 1,
//           width: "100%",
//           height: "100%",
//           duration: 1,
//           ease: "power1.inOut",
//           onStart: () => {
//             void nextVideoRef.current?.play();
//           },
//         });

//         gsap.from("#current-video", {
//           transformOrigin: "center center",
//           scale: 0,
//           duration: 1.5,
//           ease: "power1.inOut",
//         });
//       }
//     },
//     { dependencies: [currentIndex], revertOnUpdate: true }
//   );

//   useGSAP(() => {
//     gsap.set("#video-frame", {
//       clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
//       borderRadius: "0 0 40% 10%",
//     });

//     gsap.from("#video-frame", {
//       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//       borderRadius: "0 0 0 0",
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: "#video-frame",
//         start: "center center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });
//   });

//   return (
//     <section id="hero" className="relative h-dvh w-screen overflow-x-hidden">
//       {isLoading && (
//         <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
//           <div className="three-body">
//             <div className="three-body__dot" />
//             <div className="three-body__dot" />
//             <div className="three-body__dot" />
//           </div>
//         </div>
//       )}

//       <div
//         id="video-frame"
//         className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
//       >
//         <div>
//           <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
//             <div
//               onClick={handleMiniVideoClick}
//               className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
//             >
//               <video
//                 ref={nextVideoRef}
//                 src={getVideoSrc(upcomingVideoIndex)}
//                 loop
//                 muted
//                 id="current-video"
//                 className="size-64 origin-center scale-150 object-cover object-center"
//                 onLoadedData={handleVideoLoad}
//               />
//             </div>
//           </div>

//           <video
//             ref={nextVideoRef}
//             src={getVideoSrc(currentIndex)}
//             loop
//             muted
//             id="next-video"
//             className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
//             onLoadedData={handleVideoLoad}
//           />

//           <video
//             src={getVideoSrc(
//               currentIndex === totalVideos - 1 ? 1 : currentIndex
//             )}
//             autoPlay
//             loop
//             muted
//             className="absolute left-0 top-0 size-full object-cover object-center"
//             onLoadedData={handleVideoLoad}
//           />
//         </div>

//         <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
//           <b>Roleplay</b>
//         </h1>

//         <div className="absolute left-0 top-0 z-40 size-full">
//           <div className="mt-24 px-5 sm:px-10">
//             <h1 className="special-font hero-heading text-blue-100">
//               <b>REYES CITY</b>
//             </h1>

//             <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
//               Welcome to the Next-Gen City <br />
//                Activate the Future of Play & Economy

//             </p>

//             <Button
//               id="watch-trailer"
//               leftIcon={TiLocationArrow}
//               containerClass="bg-yellow-300 flex-center gap-1"
//             >
//               Watch Trailer
//             </Button>
//           </div>
//         </div>
//       </div>

//       <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
//         <b>Roleplay</b>
//       </h1>
//     </section>
//   );
// };

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import { Button } from "./button";
import { VIDEO_LINKS } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  // 🔒 Single video only
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 👉 Use ONLY ONE video
  const HERO_VIDEO_SRC = VIDEO_LINKS.hero1;

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  /* ================================
     GSAP FRAME CLIP ANIMATION
  ================================= */
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <section id="hero" className="relative h-dvh w-screen overflow-hidden">
      {/* ================= LOADER ================= */}
      {isLoading && (
        <div className="absolute inset-0 z-[100] flex items-center justify-center bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      {/* ================= VIDEO FRAME ================= */}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black"
      >
        {/* 🎥 MAIN HERO VIDEO (ONLY ONE) */}
        <video
          ref={videoRef}
          src={HERO_VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />

        {/* ================= OVERLAY TEXT ================= */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          <b>Roleplay</b>
        </h1>

        <div className="absolute inset-0 z-40">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              <b>REYES CITY</b>
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Welcome to the Next-Gen City <br />
              Activate the Future of Play & Economy
            </p>

            <Button
              id="watch-trailer"
              leftIcon={TiLocationArrow}
              containerClass="bg-yellow-300 flex-center gap-1"
              onClick={() => {
                // 🔜 Later: open trailer modal or route
                console.log("Watch Trailer clicked");
              }}
            >
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>

      {/* Shadow heading for depth */}
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        <b>Roleplay</b>
      </h1>
    </section>
  );
};

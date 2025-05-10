'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Check() {
  const videoRefs = useRef([]); // Array of refs

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        gsap.fromTo(
          video,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: video,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="w-full lg:w-1/2 z-20">
      {[1, 2].map((_, i) => (
        <section
          key={i}
          className="lg:h-screen h-[125dvh] flex items-center flex-wrap justify-center px-3"
        >
          <div className="max-w-2xl md:pt-0">
            <h1 className="text-md font-bold text-[#3b61d1]">Modular solutions</h1>
            <p className="mt-4 text-4xl mb-10 font-bold">
              A fully integrated suite of financial and payments products
            </p>
            <p className="mt-2 text-md text-gray-800">
              Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform.
              Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.
            </p>
          </div>

          <video
            ref={(el) => (videoRefs.current[i] = el)}
            src="/ani9.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-80 lg:h-96 sm:block lg:hidden object-cover rounded-xl w-full opacity-0"
          />
        </section>
      ))}
    </div>
  );
}

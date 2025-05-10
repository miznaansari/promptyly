'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Button from './components/Button';
import Video from './components/Video';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hello from './test/Hello';

gsap.registerPlugin(ScrollTrigger);
const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const videoSources = ['/ani9.mp4', '/ani2.mp4', '/ani8.mp4', '/ani9.mp4', '/ani.gif'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('section');
      let current = 0;

      sectionElements.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          current = index;
        }
      });

      setActiveIndex(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint
  };

  checkMobile(); // Initial check
  window.addEventListener("resize", checkMobile); // Update on resize

  return () => window.removeEventListener("resize", checkMobile);
}, []);
  return (
    <div className="bg-[#f6f9fc] w-full px-0 md:px-10 lg:px-0">
      <div className="lg:w-[860px] md:w-full sm:w-full mx-3 md:mx-auto  border border-gray-200 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Text Sections */}
          <div className="w-full md:w-1/2 z-20 ">
            {/* Section 1 */}
            <section className="md:h-[100vh] lg:h-screen   flex items-center flex-wrap  justify-center px-3   ">
              <div className="max-w-2xl pt-10  md:pt-0">
                <h1 className="text-md font-bold text-[#3b61d1]">Modular solutions</h1>
                <p className="mt-4 text-4xl mb-10 font-bold" >
                  A fully integrated suite of financial and payments products
                </p>
                <p className="mt-2 text-md text-gray-800">
                  Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform.

                  Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.
                </p>
               {isMobile && 
               <div className='my-10 flex justify-center'>
                <Hello />
               </div>
               } 
              </div>
              {/* <video
                ref={(el) => (videoRefs.current[0] = el)}
                src="/ani9.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-80 lg:h-96 sm:block my-16  lg:my-0 md:hidden object-cover rounded-xl opacity-0"
              /> */}

            </section>

            {/* Section 2 */}
            <section className="md:h-[100vh] lg:h-screen   flex items-center flex-wrap justify-center px-3">

              <div className="max-w-2xl">
                <div className="flex items-center gap-2">
                  <svg
                    className="ProductIcon ProductIcon--Payments HomepageFrontdoor__copyCaptionIcon w-4 h-4"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Payments</title>

                    <path d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z" fill="url(#product-icon-payments-PaymentsSection-a)"></path><path d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z" fill="#96F"></path><path d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z" fill="url(#product-icon-payments-PaymentsSection-b)"></path><defs><linearGradient id="product-icon-payments-PaymentsSection-a" x1="20" y1="4.13" x2="20" y2="21.13" gradientUnits="userSpaceOnUse"><stop stopColor="#11EFE3"></stop><stop offset="1" stopColor="#21CFE0"></stop></linearGradient><linearGradient id="product-icon-payments-PaymentsSection-b" x1="35" y1="11.28" x2="35" y2="28.72" gradientUnits="userSpaceOnUse"><stop stopColor="#0048E5"></stop><stop offset="1" stopColor="#9B66FF"></stop></linearGradient></defs>
                  </svg>
                  <h1 className="text-sm font-bold">Payments</h1>

                </div>
                <p className="mt-4 text-3xl font-bold mb-6">
                  Accept and optimise payments, globally
                </p>
                <p className="mt-2 text-md text-gray-800">
                  Increase authorisation rates, offer local payment methods to boost conversion, and reduce fraud using AI.
                </p>
                <Button name={"Start with Payment"} />
                <p className="font-semibold text-sm mt-8 mb-2 ">See also</p>
                <p className='text-xs mt-1  text-gray-800'><span className="text-[#3b61d1] font-bold">Tax</span> for automating tax registration, collection, and filing</p>
                <p className='text-xs mt-1  text-gray-800'><span className="text-[#3b61d1] font-bold">Radar</span> for AI-powered fraud protection</p>
                <p className='text-xs mt-1  text-gray-800'><span className="text-[#3b61d1] font-bold">Terminal</span> for custom in-person payments</p>
              </div>
              <video
                ref={(el) => (videoRefs.current[1] = el)}
                src="/ani2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-80 lg:h-96 sm:block md:hidden  my-16  lg:my-0  object-cover rounded-xl opacity-0"
              />
            </section>

            {/* Section 3 */}
            <section className="md:h-[100vh] lg:h-screen   flex items-center flex-wrap justify-center px-3">

              <div className="max-w-2xl">
                <div className='flex items-center gap-4'>
                  <svg className='w-4 h-4' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Billing</title>
                    <path d="M26 2.46C26 1.1 24.9 0 23.53 0H2.47A2.47 2.47 0 0 0 0 2.46v30.08a2.46 2.46 0 0 0 3.47 2.25l10.2-4.53 10.86-4.83c.9-.4 1.47-1.27 1.47-2.25V2.46z" fill="url(#a)" />
                    <path d="M26.5 39a13.5 13.5 0 1 0 0-27 13.5 13.5 0 0 0 0 27z" fill="#00D924" />
                    <path d="M26 12v11.18c0 .98-.57 1.86-1.47 2.25l-10.7 4.76A13.5 13.5 0 0 1 26 12z" fill="url(#b)" />
                    <defs>
                      <linearGradient id="a" x1="13" y1="6.35" x2="13" y2="35.03" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFD748" /><stop offset="1" stopColor="#FFC148" />
                      </linearGradient>
                      <linearGradient id="b" x1="19.5" y1="12.01" x2="19.5" y2="30.19" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00A600" /><stop offset="1" stopColor="#00D924" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h1 className="text-md font-bold">Billing</h1>
                </div>
                <p className="mt-4 text-3xl font-bold mb-10">
                  Capture recurring revenue
                </p>
                <p className="mt-2 text-md text-gray-800">
                  Support recurring business models, minimise churn, and automate finance operations.
                </p>
                <Button name={"Start with Billing"} />
                <p className="font-semibold text-sm mt-8 mb-2 ">See also</p>
                <p className='text-xs mt-1 text-gray-800'><span className="text-[#3b61d1] font-bold">Tax</span> for automating tax registration, collection, and filing</p>
                <p className='text-xs mt-1  text-gray-800'><span className="text-[#3b61d1] font-bold">Radar</span> for AI-powered fraud protection</p>
                <p className='text-xs mt-1  text-gray-800'><span className="text-[#3b61d1] font-bold">Terminal</span> for custom in-person payments</p>
              </div>
              <video
                ref={(el) => (videoRefs.current[2] = el)}
                src="/ani9.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-80 lg:h-96 sm:block   my-16  lg:my-0  md:hidden object-cover rounded-xl opacity-0"
              />
            </section>



            {/* Section 4 */}
            <section className="md:h-[100vh] lg:h-screen  sm:mb-10 flex items-center flex-wrap justify-center px-3">

              <div className="max-w-2xl">
                <div className='flex items-center gap-2'>
                  <Image src="https://res.cloudinary.com/apideck/image/upload/v1619319111/icons/stripe-connect.svg" alt="hello" width={20} height={10} />
                  <h1 className="text-xl font-bold">Connect</h1>
                </div>
                <p className="mt-4 text-3xl font-bold mb-10">
                  Set up multi-party payments and payouts
                </p>
                <p className="mt-2 text-md text-gray-800">
                  Integrate payments into your platform or marketplace for end-to-end payments experiences.
                </p>
                <Button name={"Start with Connect"} />
                <p className="font-semibold text-sm mt-8 mb-2 ">See also</p>
                <p className='text-xs mt-1  text-gray-800'><span className="text-[#3b61d1] font-bold">Terminal </span> for custom in-person payments</p>
                <p className='text-xs mt-1  text-gray-800'><span className="text-[#3b61d1] font-bold">Instant Payouts</span> for fast payments to users</p>
                <p className='text-xs mt-1  text-gray-800'><span className="text-[#3b61d1] font-bold">Payment Elements </span>  for customisable UIs</p>
              </div>
              <video
                ref={(el) => (videoRefs.current[3] = el)}
                src="/ani9.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-80 lg:h-96 sm:block   my-16  lg:my-0  md:hidden object-cover rounded-xl opacity-0"
              />
            </section>


            {/* Section 5 */}
            <section className="md:h-[100vh] lg:h-screen h-[125vh]  flex items-center flex-wrap justify-center px-3">

              <div className="max-w-2xl">
                <div className='flex items-center gap-2'>
                  <svg className="ProductIcon ProductIcon--Issuing HomepageFrontdoor__copyCaptionIcon w-4 h-4" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <title>Issuing</title>

                    <path d="M7.62 26.48l-.02-.03a2.44 2.44 0 0 1-.7-1.48 2.49 2.49 0 0 1 .11-1.05c.05-.28.13-.54.24-.77l.08-.17L14.67 10h21.85A2.52 2.52 0 0 1 39 12.37l.01.16v22.92A2.52 2.52 0 0 1 36.67 38l-.16.01H19a2.5 2.5 0 0 0 .64-1.97c-.07-.66-.43-1.09-.95-1.47l-.15-.1-10.62-7.73-.14-.1v-.01l.14.1a2.52 2.52 0 0 1-.27-.21l-.03-.03z" fill="url(#product-icon-issuing-IssuingSection-a)"></path><path d="M22.05 2.1c.7-.15 1.41 0 1.99.41l6.56 4.72a2.5 2.5 0 0 1 .92 2.8V10l-8.5 26-.05.2-.03.08-.03.09-.15.32-.02.04-.19.29-.03.04a2.9 2.9 0 0 1-.23.25l-.03.02a2.24 2.24 0 0 1-.58.4l-.03.03c-.1.05-.2.1-.31.13h-.05l-.33.08h-.05a2.3 2.3 0 0 1-.36.03H3.53A2.53 2.53 0 0 1 1 35.45v-22.9C1 11.14 2.13 10 3.53 10H16.6l3.8-6.7a2.5 2.5 0 0 1 1.46-1.15l.18-.05z" fill="#0073E6"></path><path d="M31.38 10l-8.37 26-.02.1-.02.1-.03.08-.03.09-.07.16-.08.16-.02.04-.1.15-.09.14-.03.04-.11.13-.12.12-.03.02c-.08.09-.17.16-.26.23l-.15.1-.17.08-.03.02-.15.07-.16.06h-.05l-.16.05-.1.01.1-.1c.4-.51.59-1.17.51-1.82-.07-.66-.43-1.09-.95-1.47l-.15-.1-10.62-7.73-.14-.1a2.54 2.54 0 0 1-.26-.26l-.04-.05a2.48 2.48 0 0 1-.12-.14l-.02-.04-.03-.04a2.43 2.43 0 0 1-.17-.3l-.03-.06a2.5 2.5 0 0 1-.15-.42l-.01-.07-.02-.1-.01-.06a2.51 2.51 0 0 1 .05-1.01l.02-.09a2.5 2.5 0 0 1 .04-.1c.03-.25.1-.5.21-.74l.1-.17L16.66 10h14.71z" fill="url(#product-icon-issuing-IssuingSection-b)"></path><defs><linearGradient id="product-icon-issuing-IssuingSection-a" x1="22.92" y1="11.68" x2="22.92" y2="39.68" gradientUnits="userSpaceOnUse"><stop offset=".1" stopColor="#FF80FF"></stop><stop offset=".39" stopColor="#FF7BF9"></stop><stop offset=".77" stopColor="#FF6EEA"></stop><stop offset="1" stopColor="#FF62DC"></stop></linearGradient><linearGradient id="product-icon-issuing-IssuingSection-b" x1="31.38" y1="27.93" x2="11.62" y2="27.93" gradientUnits="userSpaceOnUse"><stop stopColor="#0073E6"></stop><stop offset="1" stopColor="#00299C"></stop></linearGradient></defs>
                  </svg>
                  <h1 className="text-xl font-bold">Issuing</h1>
                </div>
                <p className="mt-4 text-3xl font-bold mb-10">
                  Build a fintech offering with banking-as-a-service
                </p>
                <p className="mt-2 text-md text-gray-800">
                  Launch, manage, and scale a commercial card programme without any setup fees
                </p>


                <Button name={"Start with Issuing"} />
                <p className="font-semibold text-sm mt-8 mb-2 ">See also</p>
                <p className='text-xs mt-1  text-gray-800'><span className="text-[#3b61d1]  font-bold">Treasury </span>  for financial accounts</p>
                <p className='text-xs mt-1  text-gray-800'><span className="text-[#3b61d1] font-bold">Capital</span> for offering fast, flexible financing</p>
                <p className='text-xs mt-1  text-gray-800'><span className="text-[#3b61d1] font-bold">Connect </span>  for powering platform payments</p>
              </div>
              <video
                ref={(el) => (videoRefs.current[4] = el)}
                src="/ani2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-80 lg:h-96  my-16  lg:my-0  sm:block md:hidden object-cover rounded-xl opacity-0"
              />
            </section>
          </div>

          {/* Sticky Video Panel */}
          <div className="w-full md:block sm:hidden md:w-1/2 sticky md:top-0 lg:top-0 h-screen hidden md:flex items-center justify-center ">
            <AnimatePresence mode="wait">
              {activeIndex === 0 ? (
                <motion.div
                  key="0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full flex justify-center items-center"
                >
                  <Hello />
                </motion.div>
              ) : videoSources[activeIndex].endsWith('.gif') ? (
                <motion.img
                  key={activeIndex}
                  src={videoSources[activeIndex]}
                  alt="GIF"
                  className="w-full max-w-md object-contain sm:hidden md:block aspect-video rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              ) : (
                <motion.video
                  key={activeIndex}
                  src={videoSources[activeIndex]}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-80 md:h-96 object-cover rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

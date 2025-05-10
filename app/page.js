'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Button from './components/Button';
import Video from './components/Video';

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

  return (
    <div className="bg-[#f6f9fc] w-full">
      <div className="mx-4 lg:mx-61 border border-gray-200 rounded-lg">
        <div className="flex flex-col lg:flex-row">
          {/* Text Sections */}
          <div className="w-full lg:w-1/2 z-20">
            {/* Section 1 */}
            <section className="lg:h-screen   flex items-center flex-wrap  justify-center px-6">
              <div className="max-w-2xl">
                <h1 className="text-lg font-bold text-[#3b61d1]">Modular solutions</h1>
                <p className="mt-4 text-3xl font-bold mb-10">
                  A fully integrated suite of financial and payments products
                </p>
                <p className="mt-2 text-lg">
                  Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform.
                </p>
                <p className="mt-2 text-lg">
                  Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.
                </p>
              </div>
              <motion.video
                key={1}
                src={'/ani9.mp4'}
                autoPlay
                loop
                muted
                playsInline
                className="h-80 lg:h-96 sm:block lg:hidden object-cover rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </section>

            {/* Section 2 */}
            <section className="lg:h-screen  flex items-center flex-wrap justify-center px-6">

              <div className="max-w-2xl">
                <div className="flex items-center gap-2">
                  <svg
                    className="ProductIcon ProductIcon--Payments HomepageFrontdoor__copyCaptionIcon w-6 h-6"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Payments</title>

                    <path d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z" fill="url(#product-icon-payments-PaymentsSection-a)"></path><path d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z" fill="#96F"></path><path d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z" fill="url(#product-icon-payments-PaymentsSection-b)"></path><defs><linearGradient id="product-icon-payments-PaymentsSection-a" x1="20" y1="4.13" x2="20" y2="21.13" gradientUnits="userSpaceOnUse"><stop stop-color="#11EFE3"></stop><stop offset="1" stop-color="#21CFE0"></stop></linearGradient><linearGradient id="product-icon-payments-PaymentsSection-b" x1="35" y1="11.28" x2="35" y2="28.72" gradientUnits="userSpaceOnUse"><stop stop-color="#0048E5"></stop><stop offset="1" stop-color="#9B66FF"></stop></linearGradient></defs>
                  </svg>
                  <h1 className="text-xl font-bold">Payments</h1>

                </div>
                <p className="mt-4 text-3xl font-bold mb-10">
                  Accept and optimise payments, globally
                </p>
                <p className="mt-2 text-lg">
                  Increase authorisation rates, offer local payment methods to boost conversion, and reduce fraud using AI.
                </p>
                <Button name={"Start with Payment"} />
                <p className="font-bold mt-8">See also</p>
                <p><span className="text-[#3b61d1] font-bold">Tax</span> for automating tax registration, collection, and filing</p>
                <p><span className="text-[#3b61d1] font-bold">Radar</span> for AI-powered fraud protection</p>
                <p><span className="text-[#3b61d1] font-bold">Terminal</span> for custom in-person payments</p>
              </div>
              <motion.video
                key={1}
                src={'/ani2.mp4'}
                autoPlay
                loop
                muted
                playsInline
                className="h-80 lg:h-96 sm:block lg:hidden object-cover rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </section>

            {/* Section 3 */}
            <section className="lg:h-screen  flex items-center flex-wrap justify-center px-6">

              <div className="max-w-2xl">
                <div className='flex items-center gap-4'>
                  <svg width="15" height="15" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <h1 className="text-xl font-bold">Billing</h1>
                </div>
                <p className="mt-4 text-3xl font-bold mb-10">
                  Capture recurring revenue
                </p>
                <p className="mt-2 text-lg">
                  Support recurring business models, minimise churn, and automate finance operations.
                </p>
                <Button name={"Start with Payments"} />
                <h6 className="mt-6 text-lg font-semibold">See also</h6>
                <ul className="mt-2 list-disc ml-6">
                  <li>Invoicing for invoice creation, collection, and tracking</li>
                  <li>Revenue Recognition for streamlined accrual accounting</li>
                  <li>Sigma for custom revenue reports – no SQL required</li>
                </ul>
              </div>
              <motion.video
                key={1}
                src={'/ani8.mp4'}
                autoPlay
                loop
                muted
                playsInline
                className="h-80 lg:h-96 sm:block lg:hidden object-cover rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </section>

            {/* Section 4 */}
            <section className="lg:h-screen  flex items-center flex-wrap justify-center px-6">

              <div className="max-w-2xl">
                <div className='flex items-center gap-2'>
                  <Image src="https://res.cloudinary.com/apideck/image/upload/v1619319111/icons/stripe-connect.svg" alt="hello" width={20} height={10} />
                  <h1 className="text-xl font-bold">Issuing</h1>
                </div>
                <p className="mt-4 text-3xl font-bold mb-10">
                  Build a fintech offering with banking-as-a-service
                </p>
                <p className="mt-2 text-lg">
                  Launch, manage, and scale a commercial card programme without any setup fees
                </p>
                <button className="mt-4 bg-white text-green-600 px-4 py-2 rounded">Start with Issuing</button>
                <button
                  className={`mt-4 p-1 rounded-full text-white flex items-center transition duration-300 ease-in-out
                    ${hovered ? 'bg-[#114f9a]' : 'bg-[#3b61d1]'}`}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <span className="mr-2">Start with Payments</span>
                  <FaArrowRight className={`transform transition-all duration-300 ${hovered ? 'scale-x-125' : ''}`} />
                </button>
                <p className="font-bold mt-8">See also</p>
                <p className='text-gray-900'><span className="text-[#3b61d1]  font-bold">Treasury </span>  for financial accounts</p>
                <p className='text-gray-900'><span className="text-[#3b61d1] font-bold">Capital</span> for offering fast, flexible financing</p>
                <p className='text-gray-900'><span className="text-[#3b61d1] font-bold">Connect </span>  for powering platform payments</p>
              </div>
             <motion.video
                key={1}
                src={'/ani9.mp4'}
                autoPlay
                loop
                muted
                playsInline
                className="h-80 lg:h-96 sm:block lg:hidden object-cover rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </section>

            {/* Section 5 */}
            <section className="lg:h-screen  flex items-center flex-wrap justify-center px-6">

              <div className="max-w-2xl">
                <div className='flex items-center gap-2'>
                  <Image src="https://res.cloudinary.com/apideck/image/upload/v1619319111/icons/stripe-connect.svg" alt="hello" width={20} height={10} />
                  <h1 className="text-xl font-bold">Connect</h1>
                </div>
                <p className="mt-4 text-3xl font-bold mb-10">
                  Set up multi-party payments and payouts
                </p>
                <p className="mt-2 text-lg">
                  Integrate payments into your platform or marketplace for end-to-end payments experiences.
                </p>
                <Button name={"Start with Connect"} />
                <p className="font-bold mt-8">See also</p>
                <p className='text-gray-900'><span className="text-[#3b61d1] font-bold">Terminal </span> for custom in-person payments</p>
                <p className='text-gray-900'><span className="text-[#3b61d1] font-bold">Instant Payouts</span> for fast payments to users</p>
                <p className='text-gray-900'><span className="text-[#3b61d1] font-bold">Payment Elements </span>  for customisable UIs</p>
              </div>
            </section>
            <motion.img
              key={activeIndex}
              src={videoSources[activeIndex]}
              alt="GIF"
              className="max-h-[90vh] w-full hidden max-w-md object-contain  aspect-video rounded-xl"

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Sticky Video Panel */}
          <div className="w-ful lg:block sm:hidden l lg:w-1/2 sticky top-0 h-screen hidden lg:flex items-center justify-center ">
            <AnimatePresence mode="wait">
              {videoSources[activeIndex].endsWith('.gif') ? (
                <motion.img
                  key={activeIndex}
                  src={videoSources[activeIndex]}
                  alt="GIF"
                  className="max-h-[90vh] w-full max-w-md object-contain sm:hidden lg:block  aspect-video rounded-xl"

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
                  className="h-80 lg:h-96 object-cover  rounded-xl"
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

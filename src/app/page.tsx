"use client";
import Navbar from "./navbar";
import React, { useState, useEffect, useRef } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Footer from "./footer";

export default function Home() {
  const [imageNum, setImageNum] = useState(1);
  const [dimensions, setDimensions] = useState({ width: 490, height: 250 });
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const sliderImages = [
    {
      url: "https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    },
    {
      url: "https://thumbs.dreamstime.com/b/lone-tree-meadow-sunriseidyllic-fabulous-landscapes-39659821.jpg",
    },
    {
      url: "https://i.pinimg.com/474x/81/ca/47/81ca47eaae35615ba9a9bb57560aaa3c.jpg",
    },
  ];

  useEffect(() => {
    function handleResize() {
      if (sliderRef.current) {
        setDimensions({
          width: sliderRef.current.clientWidth,
          height: sliderRef.current.clientWidth * 0.4,
        });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial dimensions

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div ref={sliderRef} className="w-full max-w-screen-3xl mt-8">
        <SimpleImageSlider
          width={dimensions.width}
          height={dimensions.height}
          images={sliderImages}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          onStartSlide={(index, length) => {
            setImageNum(index);
          }}
          autoPlayDelay={3}
        />
      </div>

      <div>
        <div className="flex flex-col items-center text-center space-y-4 mt-20 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-700">
            Welcome to
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-900">
            Aparna Public School for Children
          </h1>
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-500">
            The Mission of Aparna Public School is to empower our children to
            achieve their greatest potential both as students and as members of
            their communities.
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4 p-4 mt-20">
          <a href="/">
            <div className="w-64 h-60 bg-cyan-700 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <img src="https://tbcsc.org/files/_cache/b8f9c222e5dfde109cf0795d09815d06.png" alt="" className="w-20 h-20" />
                <h1 className="text-white text-3xl mt-4">Enroll</h1>
              </div>
            </div>
          </a>
          <a href="/">
            <div className="w-64 h-60 bg-cyan-700 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <img src="https://tbcsc.org/files/_cache/8a3146e154e3465699b7d8015d8110d3.png" alt="" className="w-20 h-20" />
                <h1 className="text-white text-3xl mt-4">Teach</h1>
              </div>
            </div>
          </a>
          <a href="/">
            <div className="w-64 h-60 bg-cyan-700 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <img src="https://tbcsc.org/files/_cache/ce2a9da9e420145cca9e78339f0882b9.png" alt="" className="w-20 h-20" />
                <h1 className="text-white text-3xl mt-4">Support</h1>
              </div>
            </div>
          </a>
          <a href="/">
            <div className="w-64 h-60 bg-cyan-700 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <img src="https://tbcsc.org/files/_cache/0917084b9a1f188e1e7eaa9656d7a3c0.png" alt="" className="w-20 h-20" />
                <h1 className="text-white text-3xl mt-4">Grow</h1>
              </div>
            </div>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center p-4 space-y-4 md:space-y-0 mt-20 gap-4">
          {[
            {
              title: "Instruction",
              image: "https://tbcsc.org/files/galleries/Denise1-1.jpg",
              description:
                "We believe that a rigorous academic program combined with a supportive social-emotional curriculum leads to scholar success. APS academic program reflects the practices that are associated with high-performing urban schools.",
            },
            {
              title: "Resources",
              image: "https://tbcsc.org/files/galleries/resources.jpg",
              description:
                "At the APS we are committed to supporting our families. Our APS Family is here to offer to parents and caregivers in need of support due to family stressors, such as children's mental health issues, parenting difficulties, financial struggles, or chemical usage.",
            },
            {
              title: "Leadership",
              image: "https://tbcsc.org/files/galleries/leadership.jpg",
              description:
                "Get to know the incredible people that make up our team here at APS! Our team is composed of a number of passionate individuals who are dedicated to their work and helping children's growth. Find out more!",
            },
          ].map((section, index) => (
            <div key={index} className="relative group w-full md:w-1/3 p-4">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-base md:text-sm lg:text-base px-2">
                  {section.description}
                </p>
              </div>
              <div className="absolute top-0 left-0 right-0 bg-black text-white text-center text-lg md:text-xl lg:text-2xl py-2">
                {section.title}
              </div>
            </div>
          ))}
        </div>

        <div
          className="relative w-full h-64 md:h-96 bg-cover bg-center mt-20"
          style={{ backgroundImage: `url('support.jpg')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
              We Need Your Support!
            </h1>
            <p className="text-white text-sm md:text-lg lg:text-xl mt-2 text-bold mt-4">
              The APS is working harder than ever to ensure that our scholars
              receive intensive <br /> academic interventions and extended
              learning opportunities.
            </p>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white text-lg font-semibold rounded hover:bg-red-600 transition-colors duration-300">
              Join Us
            </button>
          </div>
        </div>

        <div className="container mx-auto py-8 px-4 mt-10">
          <h2 className="text-center text-5xl font-bold mb-8">Connect With Us</h2>
          <div className="flex flex-col items-center">
            <div className="bg-blue-400 text-white rounded-lg p-6 w-full lg:w-1/2 mb-8">
              <h3 className="text-xl font-bold mb-4">Keep in Touch</h3>
              <p className="mb-4">Send your query.</p>
              <form>
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="text"
                    id="name"
                    name="name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="number">
                    Phone Number
                  </label>
                  <input
                    className="w-full px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="number"
                    id="number"
                    name="number"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    className="w-full px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    id="description"
                    name="description"
                  />
                </div>
                <button className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded font-bold">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}

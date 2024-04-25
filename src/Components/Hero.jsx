import React from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default function Hero() {

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen px-4 py-32 flex  lg:h-screen lg:items-center">
        <div className="mx-auto max-w-7xl  text-center ">
          <h1
            className="font-sans bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-7xl "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            URLs Become SnapShots,
            <span className="sm:block pt-4">And Moments Last Forever.</span>
          </h1>

          <p
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="font-mono font-bold leading-loose mx-auto  mt-8 sm:mt-12  sm:text-xl/relaxed text-justify"
          >
            Welcome to SnapAPI! How we capture the essence of a moment defines
            the depth of our understanding. With SnapAPI, every URL becomes a
            canvas, every screenshot a testament to the power of visualization.
            Simply enter the URL of your desired webpage, and within moments,
            we'll send you a snapshot that encapsulates its unique identity.
            Experience the power of instant visualization with SnapAPI – where
            every URL unveils a world of possibilities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="800"
                data-aos-once="true" 
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              to="/"
            >
              Get Started
            </Link>

            <Link
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-once="true" 
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              to="/"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

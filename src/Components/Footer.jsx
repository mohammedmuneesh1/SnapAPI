import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer data-aos="fade-zoom-in" dat-aos-once="true" data-aos-duration="1000"  className=" mx-auto w-full relative text-center bg-blue-600 text-white">
    <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
        Ready to capture your website's snapshot? <br/>Dive into our community today
        </h2>
        <div className="mt-14 xl:mt-20">
            <nav className="flex flex-wrap justify-center text-lg font-medium">
                <div className="px-5 py-2"><Link to="/">Contact</Link></div>
                <div className="px-5 py-2"><Link to="/">Pricing</Link></div>
                <div className="px-5 py-2"><Link to="/">Privacy</Link></div>
                <div className="px-5 py-2"><Link to="/">Terms</Link></div>
                <div className="px-5 py-2"><Link to="/">Twitter</Link></div>
            </nav>
            <p className="mt-7 text-base">© 2024 SnapAPI with ♥ for the people of the internet.</p>
        </div>
    </div>
</footer>
  )
}

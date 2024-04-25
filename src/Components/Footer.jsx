import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className=" mx-auto w-full relative text-center bg-blue-600 text-white">
    <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
        Ready to capture your website's snapshot? <br/>Dive into our community today
        </h2>
        <Link className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-blue-800 rounded-full shadow-xl border border-transparent hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
            to="/">Get
            started</Link>
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

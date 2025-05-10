'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className=" w-full top-0 left-0 z-50 bg-white shadow-md h-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image src="/B9slYC01.svg" alt="myManzil Logo" width={170} height={80} priority />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-12 text-xl font-sans">
                <li>
                  <a className="hover-scale !text-black font-medium" href="/buy">
                    Buy
                  </a>
                </li>
                <li>
                  <a className="hover-scale !text-black font-medium" href="#">
                    Rent
                  </a>
                </li>
                <li>
                  <a className="hover-scale !text-black font-medium" href="#">
                    Sell
                  </a>
                </li>
                <li>
                  <a className="hover-scale !text-black font-medium" href="#">
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="hover-scale rounded-md bg-teal-600 px-6 py-3 text-base font-medium text-white shadow-sm"
                href="#"
              >
                Login
              </a>
              <a
                className="hover-scale rounded-md bg-gray-100 px-6 py-3 text-base font-medium !text-black shadow-sm"
                href="#"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

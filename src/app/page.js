import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="absolute w-full top-0 left-0 z-10 bg-transparent shadow-none p-4">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <Image src="/B9slYC01.svg" alt="myManzil Logo" width={170} height={80} priority />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-12 text-xl font-sans">
                  <li>
                    <a className="hover-scale text-white font-medium" href="#">
                      {' '}
                      Buy{' '}
                    </a>
                  </li>

                  <li>
                    <a className="hover-scale text-white font-medium" href="#">
                      {' '}
                      Rent{' '}
                    </a>
                  </li>

                  <li>
                    <a className="hover-scale text-white font-medium" href="#">
                      {' '}
                      Sell{' '}
                    </a>
                  </li>

                  <li>
                    <a className="hover-scale text-white font-medium" href="#">
                      {' '}
                      About{' '}
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

      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0">
          <Image
            src="/vj-von-art-BP1Ze0qcp-c-unsplash.jpg"
            alt="Hero background"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white pt-20"></div>
      </section>

      {/* Property Listings Placeholder */}
      <section className="max-w-6xl mx-auto py-10">
        <h3 className="text-2xl font-semibold mb-6">Featured Listings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Property card goes here */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src="/vj-von-art-BP1Ze0qcp-c-unsplash.jpg"
                alt="House"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">€450,000</h4>
              <p className="text-sm text-gray-600">3 Bed • 2 Bath • Dublin</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

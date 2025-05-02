
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header over the hero image */}
      <header className="absolute w-full top-0 left-0 z-10 bg-transparent shadow-none p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Use the logo with a transparent background */}
          <Image
            src="/B9slYC01.svg"
            alt="myManzil Logo"
            width={300}
            height={80}
            priority
          />
          <nav className="space-x-4">
            <a href="#" className="text-white hover:text-blue-600">Buy</a>
            <a href="#" className="text-white hover:text-blue-600">Rent</a>
            <a href="#" className="text-white hover:text-blue-600">About</a>
          </nav>
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
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white pt-20">
          <h2 className="text-4xl font-semibold mb-4">Find Your Perfect Home</h2>
          <p className="text-xl mb-6">Browse homes for rent or sale across the country</p>
          {/* <div className="bg-white p-4 rounded-lg shadow-md flex gap-4 justify-center">
            <input type="text" placeholder="Search by location..." className="w-2/3 p-2 border rounded" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Search</button>
          </div> */}
        </div>
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
  );
}

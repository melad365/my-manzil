'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'

export default function BuyPage() {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    const fetchProperties = async () => {
      const res = await fetch('/api/properties')
      const data = await res.json()
      setProperties(data)
    }

    fetchProperties()
  }, [])

  return (
    <main className="min-h-screen bg-gray-100 pt-24 px-4">
      <Header />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Properties for Sale</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property?.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={property?.image}
                  alt={property?.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">{property?.title}</h3>
                <p className="text-gray-600">{property?.description}</p>
                <p className="text-teal-600 font-bold mt-2">€{property?.price.toLocaleString()}</p>
                <p className="text-sm text-gray-500">{property?.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

// app/api/homes/route.js
import { NextResponse } from 'next/server'

const homesForSale = [
  {
    id: 1,
    title: '3 Bed House in Dublin',
    price: 450000,
    description: 'Beautiful 3 bedroom house with 2 baths',
    location: 'Dublin',
    image: '/vj-von-art-BP1Ze0qcp-c-unsplash.jpg',
  },
  {
    id: 2,
    title: '2 Bed Apartment in Cork',
    price: 320000,
    description: 'Modern apartment with sea views',
    location: 'Cork',
    image: '/vj-von-art-BP1Ze0qcp-c-unsplash.jpg',
  },
  {
    id: 3,
    title: '4 Bed Detached in Galway',
    price: 580000,
    description: 'Spacious family home with a garden',
    location: 'Galway',
    image: '/vj-von-art-BP1Ze0qcp-c-unsplash.jpg',
  },
  {
    id: 4,
    title: '1 Bed Studio in Limerick',
    price: 210000,
    description: 'Compact studio ideal for students',
    location: 'Limerick',
    image: '/vj-von-art-BP1Ze0qcp-c-unsplash.jpg',
  },
  {
    id: 5,
    title: '3 Bed Semi-Detached in Waterford',
    price: 390000,
    description: 'Quiet neighborhood close to schools',
    location: 'Waterford',
    image: '/vj-von-art-BP1Ze0qcp-c-unsplash.jpg',
  },
  {
    id: 6,
    title: '2 Bed Cottage in Kerry',
    price: 275000,
    description: 'Charming cottage in the countryside',
    location: 'Kerry',
    image: '/vj-von-art-BP1Ze0qcp-c-unsplash.jpg',
  },
  {
    id: 7,
    title: '3 Bed Townhouse in Sligo',
    price: 340000,
    description: 'Modern townhouse near the city centre',
    location: 'Sligo',
    image: '/vj-von-art-BP1Ze0qcp-c-unsplash.jpg',
  },
  {
    id: 8,
    title: '5 Bed Luxury Villa in Wicklow',
    price: 950000,
    description: 'High-end villa with mountain views',
    location: 'Wicklow',
    image: '/vj-von-art-BP1Ze0qcp-c-unsplash.jpg',
  },
  {
    id: 9,
    title: '2 Bed Apartment in Drogheda',
    price: 310000,
    description: 'Well-connected apartment near transit',
    location: 'Drogheda',
    image: '/vj-von-art-BP1Ze0qcp-c-unsplash.jpg',
  },
  {
    id: 10,
    title: '4 Bed Bungalow in Donegal',
    price: 420000,
    description: 'Coastal bungalow with large plot',
    location: 'Donegal',
    image: '/vj-von-art-BP1Ze0qcp-c-unsplash.jpg',
  },
  {
    id: 11,
    title: '1 Bed Flat in Kilkenny',
    price: 230000,
    description: 'Affordable flat for first-time buyers',
    location: 'Kilkenny',
    image: '/vj-von-art-BP1Ze0qcp-c-unsplash.jpg',
  },
  {
    id: 12,
    title: '3 Bed Duplex in Athlone',
    price: 365000,
    description: 'Stylish duplex with balcony',
    location: 'Athlone',
    image: '/vj-von-art-BP1Ze0qcp-c-unsplash.jpg',
  },
]

export async function GET() {
  return NextResponse.json(homesForSale)
}

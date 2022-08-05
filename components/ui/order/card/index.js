import next from 'next'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Card(props) {
  console.log(props.data)
  return (
  <section className="grid md:grid-cols-1 place-items-center lg:grid-cols-2 gap-4 mb-5">
  { props.data.map((data) =>
    <div key={data.id} className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="flex h-full">
        <div className="md:flex-shrink-0">
          <Image 
//  className="h-48 w-full object-cover md:w-48"
        className='object-cover'
        layout='fixed'
        width="200"
        height="230"
        src={data.coverImage} 
        alt={data.title} 
    />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{data.type}</div>
          <Link href={`/courses/${data.slug}/`}>
          <a  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{data.title}</a>
          </Link>
          <p className="mt-2 text-gray-500">{data.description}</p>
        </div>
      </div>
    </div>
  )}
</section>
  )
}

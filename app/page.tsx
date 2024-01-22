import Image from 'next/image'
import { client } from './lib/sanity'
import Hero from './components/Hero'
import Newest from './components/Newest'

export default function Home() {
  const data = client.fetch(`*[_type == 'product']`)
  // console.log(data)
  return (
   <div className='bg-white pb-6 md:pb-8 lg:pb-12'>
    <Hero />
   <Newest />
   </div>
  )
}

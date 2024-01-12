import Image from 'next/image'
import { client } from './lib/sanity'

export default function Home() {
  const data = client.fetch(`*[_type == 'product']`)
  // console.log(data)
  return (
   <div>
FETCHING....
   </div>
  )
}

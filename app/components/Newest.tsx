import Link from "next/link"
import { simplifiedProduct } from "../lib/interface"
import { client } from "../lib/sanity"
import { ArrowRight } from "lucide-react"
import Image from "next/image"





async function getData() {
  const query = `*[_type == 'product'][0...4]|order(_createdAt desc){
    _id,
    name,
    price,
    "imageUrl" :images[0].asset->url,
    "slug" :  slug.current,
    "categoryName": category->name  
    }
    `
  const res = await client.fetch(query)
  return res
}

export default async function Newest() {
  const data: simplifiedProduct[] = await getData()
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">Our Newest Product</h2>
          <Link href="/all" className="text-primary flex items-center gap-x-1 font-semibold transition duration-100 hover:text-gray-500">See All <span><ArrowRight /></span></Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
            data.map((product) => (
              <div key={product._id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-300 group-hover:opacity-75 lg:h-80">
                  <Image src={product.imageUrl} alt={product.slug} className="w-full h-full object-cover object-center lg:h-full lg:w-full" width={300} height={300} />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/product/${product.slug}`}>{product.name}</Link>
                    </h3>
                    <p className="mt-1 text-gray-500 text-sm">{product.categoryName}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">RS.{product.price}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}


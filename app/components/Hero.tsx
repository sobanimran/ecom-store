import Image from "next/image";
import { client, urlFor } from "../lib/sanity"
import Link from "next/link";

async function getData() {
    const query = `*[_type == 'heroImage'][0]`
    const data = await client.fetch(query)
    return data;
}
export default async function Hero() {
    const data = await getData()
  
  return (
    <section className="mx-auto max-w-2xl  px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
        <div className="mb-8 md:mb-16 flex flex-wrap justify-between">
            <div className="mb-6 sm:mb-12 lg:mb-0 flex flex-col justify-center w-full  lg:w-1/3 lg:pb-24 lg:pt-48">
                <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl md:mb-8 md:text-6xl">
                    Top Fashion For a top price!
                </h2>
                <h4 className="max-w-md leading-relaxed text-gray-500 xl:text-lg">We sell only the most exclusive and high quality products for you ,
                    We are the best so come and shop with us.
                </h4>
            </div>
            <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                <div className="relative left-12 top-12 z-10 -ml-12 rounded-lg overflow-hidden bg-gray-100 shadow-lg md:left-16  md:top-16 lg:ml-0">
                      <Image src={urlFor(data.image1).url()} priority width={5000} height={5000} className="w-full h-full object-cover object-center" alt="Hero image" />  
                </div>
                <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                 <Image src={urlFor(data.image2).url()} width={500 } priority height={500} className="w-full h-full object-cover object-center" alt="Hero image" />  

                </div>
        </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex  h-12 w-64 divide-x overflow-hidden rounded-lg border">
                <Link className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 " href="/Men">Men</Link>
                <Link className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200" href="/Women">Women</Link>
                <Link className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200" href="/Teens">Teens</Link>
            </div>
        </div>
    </section>
  )
}

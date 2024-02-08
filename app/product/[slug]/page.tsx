import AddToBag from "@/app/components/AddToBag"
import ImageGallery from "@/app/components/ImageGallery"
import { detailedProduct } from "@/app/lib/interface"
import { client } from "@/app/lib/sanity"
import { Button } from "@/components/ui/button"
import { Star, Truck } from "lucide-react"

const getData = async (productSlug:string)=>{
  const query = `*[_type == 'product' && slug.current=="${productSlug}"][0]{
    _id,
    name,
    price,
    description,
    "categoryName" : category->name,
    images,
    "slug":slug.current
  }`
  const res = await client.fetch(query)
  return res
}
export default async function page({params}:{params:{slug:string}}) {
  const data:detailedProduct = await getData(params.slug)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 ">
          <ImageGallery images={data.images}  />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500">{data.categoryName}</span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{data.name}</h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-10 ">
              <Button variant="default" className="rounded-full gap-x-2 ">
                <span className=" text-sm ">4.2</span>
                <Star className="h-5 w-5"/>
              </Button>
              <span className="text-sm text-gray-500 transition duration-100">56 Ratings </span>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl md:text-2xl text-gray-800 font-semibold">RS.{data.price}</span>
                <span className="text-red-500 line-through text-sm mb-0.5">RS.{data.price*1.3}</span>
              </div>
              <span className="text-sm text-gray-500">Inc. Val plus shipping</span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500 ">
                  <Truck className="w-6 h-6"/>
                  <span className="text-sm">2-4 Day Shipping</span>
            </div>
            <div className="flex gap-2.5">
              <AddToBag 
              currency="PKR" 
              description={data.description} 
              name={data.name}  
              price={data.price}
              image={data.images[0]}
              id={data._id}
              />
                <Button variant="secondary">Checkout Now</Button>
            </div>
            
            <p className="mt-12 text-base tracking-wide text-gray-500">{data.description}</p>
          </div>
        </div>

      </div>

    </div>
  )
}

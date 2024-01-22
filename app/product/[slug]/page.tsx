import { detailedProduct } from "@/app/lib/interface"
import { client } from "@/app/lib/sanity"

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
  console.log(data)
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">

        </div>

      </div>

    </div>
  )
}

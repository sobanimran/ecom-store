export interface simplifiedProduct {
  _id: string
  name: string
  price: number
  imageUrl: string
  slug: string
  categoryName: string
}

export interface detailedProduct {
  _id: string,
  name: string,
  price: number,
  description: string,
  categoryName: string,
  images: Iimages[],
  slug: string
}




export interface Iimages {
  _type: string, _key: string, asset: Iasset
}
interface Iasset {
  _ref: string,
  _type: string
}
"use client"
import React, { useState } from "react";
import { Iimages } from "../lib/interface"
import { urlFor } from "../lib/sanity"
import Image from "next/image"

export default function ImageGallery({ images }: Iimages[] | any)  {
    const [bigImage, setBigImage] = useState(images[0])
    const handleSmallImageClick = (image: any) => {
        setBigImage(image);
      };
    return (
        <div className="grid gap-4 lg:grid-cols-5 " >
            <div className="order-last flex gap-4 lg:order-none  lg:flex-col">
                {images.map((image: Iimages, idx: React.Key | null | undefined) => (
                    <div key={idx} className="overflow-hidden rounded-lg bg-gray-200" onClick={()=>handleSmallImageClick(image)}>
                        <Image src={urlFor(image).url()} alt="Product Image" width={200} height={200} className="h-full w-full object-cover object-center cursor-pointer" />
                    </div>
                ))}
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-200 lg:col-span-4">
                <Image src={urlFor(bigImage).url()} alt="Photo" className="h-full w-full object-cover object-center" width={500} height={500} />
                    <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white  z-20">Sale</span>
            </div>
        </div>
    )
}
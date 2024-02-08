"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { useShoppingCart } from "use-shopping-cart"

export default function ShoppingCartModel() {
    const {cartCount ,cartDetails, shouldDisplayCart , handleCartClick} = useShoppingCart()
    return (

        <Sheet  open={shouldDisplayCart} onOpenChange={()=>handleCartClick()} >

            <SheetContent className="sm:max-w-lg w-[90vw]">
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>

                </SheetHeader>
               <div className="h-full flex flex-col justify-between">
                <div className="mt-8 flex-1 overflow-y-auto"> 
                <ul className="-my-6 divide-y divide-gray-200">
                {cartCount === 0 ?(
                    <h1 className=" py-6">you don't have any items in cart</h1>
                ):(
                    <>
                    {Object.values(cartDetails ?? {}).map((entry)=>(
                        <li key={entry.id} className="py-6 flex">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <Image src={entry.image as string}  alt="Product Image" width={100} height={100}/>
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>{entry.name}</h3>
                                        <p className="ml-4">PKR.{entry.price}</p>
                                    </div>
                                   
                                </div>
                                   
                            </div>
                        </li>
                        ))}
                    </>
                )}
                </ul>
                </div>
               </div>

            </SheetContent>
        </Sheet>
    )
}
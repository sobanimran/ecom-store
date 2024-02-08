"use client"
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { Iimages } from "../lib/interface";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
    name:string;
    description : string;
    price :number;
    currency :string;
    image : Iimages |any;
    id:string;

}
export default function AddToBag ({currency , description ,image , name ,price , id}:ProductCart) {
    const {addItem , handleCartClick} = useShoppingCart()
    const product = {
        name ,
        description ,
        price ,
        currency ,
        image : urlFor(image).url(),
        id
    }
    return (
        <Button onClick={()=>{ 
        addItem(product)
        handleCartClick()
        }}>
        Add to Cart</Button>
    )
}
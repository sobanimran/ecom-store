"use client"
import { Button } from "@/components/ui/button"

import { link } from "fs";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
const links = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Men',
        href: '/Men'
    },
    {
        name: 'Women',
        href: '/Women'
    },
    {
        name: 'Teens',
        href: '/Teens'
    },
]
export default function Navbar() {
    const pathname = usePathname()
    const {handleCartClick} = useShoppingCart()
    return (
        <header className="mb-8 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <h2 className="text-2xl md:text-4xl font-bold">Feshion<span className="text-primary">Fusion</span></h2>
                </Link>

                <nav className="hidden gap-12 lg:flex 2xl:ml-16">

                    {links.map((link, i) => (
                        <div key={i}>
                            {
                                pathname === link.href ? (
                                    <Link href={link.href} className="text-lg font-semibold text-primary">{link.name}</Link>
                                ) : (
                                    <Link href={link.href} className="text-lg font-semibold transition duration-100 text-gray-600 hover:text-primary">{link.name}</Link>
                                )
                            }
                        </div>
                    ))}
                </nav>
                <div className="flex divide-x border-r sm:border-l">
                    <Button onClick={()=>handleCartClick()} variant="outline" className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:-24 md:h-24 rounded-none">
                        <ShoppingBagIcon /><span className="hidden text-xs font-semibold text-gray-500 sm:block">cart</span>
                        </Button>

                </div>
            </div>
        </header>
    )
}
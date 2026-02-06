"use client"

import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Projetos',
        href: '/projetos'
    }
]

export const Header = () => {
    return (
        <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
            {/* z-10: controla a ordem de empilhamento (eixo Z) dos elementos que se sobrepõem */}
            {/* h-24: altura fixa de 24 unidades (equivalente a 6rem) */}
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <Image
                    width={58}
                    height={49}
                    src="/images/logo.svg"
                    alt="Logo Mateus Dev"
                    // unoptimized
                    />
                </Link>

                <nav className="flex items-center gap-4 sm:gap-10"> 
                    {/* gap-10 quando a tela for maior que sm, se não, será gap-4 */}
                    {NAV_ITEMS.map((item) => (
                        // <NavItem key={item.href} label={item.label} href={item.href} />
                        <NavItem key={item.href} {...item} />
                        // Destructuring acima é equivalente ao comentário de cima
                    ))}
                </nav>
            </div>
        </header>
    )
}
import NextLink from "next/link"
import { cn } from "@/app/lib/utils";
import { ComponentProps } from "react"

type LinkProps = ComponentProps<typeof NextLink>;

export const Link = ({ className, children, ...props }: LinkProps) => {
    return (
        <NextLink {...props} className={cn(
            "flex items-center gap-2 text-gray-300 text-sm hover:text-emerald-500 transition-colors",
            className
        )}>
            {children}
        </NextLink>
    )
}
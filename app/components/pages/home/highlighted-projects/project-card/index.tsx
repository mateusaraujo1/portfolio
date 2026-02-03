import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image
                    width={420}
                    height={304}
                    src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
                    alt="Thumbnail do projeto Bookwise"
                    className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
                />
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image 
                        src="/images/icons/project-title-icon.svg" 
                        width={20} 
                        height={20} 
                        alt="Ícone de projeto"
                    />
                    BookWise
                </h3>

                <p className="text-gray-400 my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores necessitatibus harum quis, quia voluptate repudiandae, accusantium minus veniam ducimus voluptatem odit? Obcaecati nostrum quod magnam alias officiis! Voluptatem, suscipit sit!</p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                </div>

                <Link href="/projects/bookwise">
                    Ver projeto
                    <HiArrowNarrowRight/>
                </Link>

            </div>
        </div>
    )
}
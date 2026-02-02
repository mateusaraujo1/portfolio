import { Button } from "@/app/components/button"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb"
import { icons } from "react-icons/lib"

const MOCK_CONTACTS = [
    {
        url: "https://github.com/mateusaraujo1",
        icon: <TbBrandGithub/>,
    },
    {
        url: "https://linkedin.com/in/mateusaraujo1",
        icon: <TbBrandLinkedin/>,
    },
    {
        url: "https://wa.me/5588996889306?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento",
        icon: <TbBrandWhatsapp/>,
    },
]

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Mateus Araújo</h2>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">Sou um desenvolvedor full stack apaixonado por tecnologia. Formando em Ciências da Computação e realizando diversos projetos de desenvolvimento web, meu objetivo é criar soluções inovadoras e eficientes que transformem ideias em realidade e agreguem valor aos usuários.</p>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <TechBadge name="Next.js"/>
                        ))}
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="w-max shadow-button">
                            Entre em contato
                            <HiArrowNarrowRight size={18}/>
                        </Button>

                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a 
                                key={`contact-${index}`}
                                href={contact.url}
                                target="_blank"
                                className="hover:text-gray-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <Image 
                    width={420}
                    height={404}
                    src="https://github.com/mateusaraujo1.png"
                    alt="Mateus Araújo - Desenvolvedor Full Stack"
                    className="rounded-full w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl object-cover"
                />
            </div>
        </section>
    )
}
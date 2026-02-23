import { cn } from "@/app/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation";

type NavItemProps = {
    label: string;
    href: string;
}

export const NavItem = ({ label, href }: NavItemProps) => {
    const pathname = usePathname();

    const isActive = pathname === href;
    
    const sectionId = href.split('#')[1];

    // Função para gerenciar o clique e forçar o scroll suave
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Verifica se é um link de âncora (começa com /#) e se já estamos na Home
        if (href.startsWith('/#') && pathname === '/') {
            e.preventDefault(); // Impede o pulo seco do Next.js Link
            
            const element = document.getElementById(sectionId);
            
            if (element) {
                // Força a rolagem suave nativa do navegador
                element.scrollIntoView({ behavior: 'smooth' });
                
                // Atualiza a URL no navegador sem recarregar a página
                window.history.pushState(null, '', `/#${sectionId}`);
            }
        }
    };

    return (
        <Link 
            href={href} 
            onClick={handleClick} // Dispara a nossa função customizada
            className={cn(
                "text-gray-400 flex items-center gap-2 font-medium font-mono transition-colors",
                isActive && "text-gray-50 font-bold"
            )}
        >
            <span className="text-emerald-400">#</span>
            {label}
        </Link>
    )
}
import { CMSIcon } from "@/app/components/cms-icon";
import { KnownTech as IKnownTech } from "@/app/types/projects";
// import { getRelativeTimeString } from "@/app/utils/get-relative-time";
//

type KnownTechProps = {
    tech: IKnownTech
};

export const KnownTech = ({ tech }: KnownTechProps) => {
    // const relativeTime = getRelativeTimeString(new Date(tech.startDate), 'pt-BR').replace('há ', '');
    return (
        <div className="p-6 rounded-lg bg-gray-600/20 text-gray-400 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all duration-300 group relative items-center justify-center">
            <div className="flex flex-col items-center justify-between">
                <CMSIcon icon={tech.iconSvg} />
            </div>

            <span className="
                absolute -bottom-8 opacity-0 translate-y-2
                text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded
                transition-all duration-300
                group-hover:opacity-100 group-hover:translate-y-0
            ">
                {tech.name}
            </span>
        </div>
    )
}
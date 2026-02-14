import { PorjectDetails } from "@/app/components/pages/project/project-details";
import { PorjectSections } from "@/app/components/pages/project/project-sections";
import { ProjectPageData } from "@/app/types/page-info";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";

type ProjectProps = {
    params: {
        slug: string
    }
}

const getProjectDetails = async (slug: string):Promise<ProjectPageData> => {
      const query = `
        query ProjectQuery {
            project(where: {slug: "${slug}"}) {
            pageThumbnail {
                url
            }
            thumbnail {
                url
            }
            sections {
                title
                image {
                url
                }
            }
            title
            shortDescription
            description {
                raw
                text
            }
            technologies {
                name
            }
            liveProjectUrl
            githubUrl
            }
        }
        `
    return fetchHygraphQuery(
        query,
        60 * 60 * 24
    )
}

export default async function Project({ params: { slug } }: ProjectProps) {
    const { project } = await getProjectDetails(slug)

    console.log(project)

    return (
        <>
            <PorjectDetails project={project} />
            <PorjectSections sections={project.sections} />
        </>
    )
}
export interface IProject {
    id: number
    preview: string
    name: string
    description: string
    repositoryLink: string
    HostedLink: string
    techStack: string[]
}

export interface ISkill {
    id: number
    name: string
    imageSrc: string
}
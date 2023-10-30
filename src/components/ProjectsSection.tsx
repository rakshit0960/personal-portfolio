import ProjectsList from "./ProjectsList"

export default function ProjectsSection() {
  return (
    <section className="min-h-screen flex flex-col justify-between py-10 px-8">
      <code className="text-4xl">{'<Projects>'}</code>
        <ProjectsList />
      <code className="text-4xl">{'</Projects>'}</code>
    </section>
  )
}

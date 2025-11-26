import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export function ProjectsPage() {
  return (
    <div className="py-12">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-slate-900 mb-4">Projects</h1>
          <p className="text-slate-600 max-w-3xl">
            A collection of data analytics projects showcasing my skills in Power BI, Python, SQL, 
            and business intelligence. Each project demonstrates end-to-end data analysis from 
            problem definition to actionable insights.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              summary={project.summary}
              tools={project.tools}
              tags={project.tags}
              thumbnail={project.thumbnail}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

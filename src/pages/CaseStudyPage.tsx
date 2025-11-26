import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { projects } from '../data/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CaseStudyPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-slate-900 mb-4">Project Not Found</h2>
        <Link to="/projects" className="text-blue-600 hover:text-blue-700">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link to="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
        
        <h1 className="text-slate-900 mb-6">{project.title}</h1>
        
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tools.map((tool) => (
            <span key={tool} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg">
              {tool}
            </span>
          ))}
        </div>

        <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl overflow-hidden mb-12">
          <ImageWithFallback
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Problem */}
        <section>
          <h2 className="text-slate-900 mb-4">Problem Statement</h2>
          <p className="text-slate-600 bg-slate-50 p-6 rounded-xl border border-slate-200">
            {project.problem}
          </p>
        </section>

        {/* Dataset */}
        <section>
          <h2 className="text-slate-900 mb-4">Dataset Description</h2>
          <p className="text-slate-600 bg-slate-50 p-6 rounded-xl border border-slate-200">
            {project.dataset}
          </p>
        </section>

        {/* Approach */}
        <section>
          <h2 className="text-slate-900 mb-4">Approach & Methodology</h2>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <ul className="space-y-4">
              {project.approach.map((step, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-slate-600 pt-1">{step}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Key Insights */}
        <section>
          <h2 className="text-slate-900 mb-4">Key Insights</h2>
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100">
            <ul className="space-y-3">
              {project.keyInsights.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{insight}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Business Impact */}
        <section>
          <h2 className="text-slate-900 mb-4">Business Impact</h2>
          <div className="bg-slate-900 text-white p-8 rounded-xl">
            <p>{project.businessImpact}</p>
          </div>
        </section>

        {/* Visuals Placeholder */}
        <section>
          <h2 className="text-slate-900 mb-4">Dashboard Preview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center border-2 border-dashed border-blue-300">
              <p className="text-blue-600">Dashboard Visual 1</p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center border-2 border-dashed border-blue-300">
              <p className="text-blue-600">Dashboard Visual 2</p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center border-2 border-dashed border-blue-300">
              <p className="text-blue-600">Dashboard Visual 3</p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center border-2 border-dashed border-blue-300">
              <p className="text-blue-600">Dashboard Visual 4</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

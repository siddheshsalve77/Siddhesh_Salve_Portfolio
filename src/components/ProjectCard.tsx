import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  id: string;
  title: string;
  summary: string;
  tools: string[];
  tags: string[];
  thumbnail: string;
}

export function ProjectCard({ id, title, summary, tools, tags, thumbnail }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 relative overflow-hidden">
        <ImageWithFallback
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 mb-4 line-clamp-2">{summary}</p>
        
        <div className="mb-4">
          <div className="text-slate-700 mb-2">Tools Used</div>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <Link 
          to={`/projects/${id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors group"
        >
          View Case Study 
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

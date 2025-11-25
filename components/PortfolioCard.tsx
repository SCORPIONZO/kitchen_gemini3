import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const PortfolioCard: React.FC = () => {
  return (
    <div className="w-full max-w-[400px] h-[500px] bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-0 shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10">
      
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-5 bg-gradient-to-b from-slate-900/50 to-transparent z-10 sticky top-0 backdrop-blur-sm">
        <div>
          <h2 className="text-2xl font-serif text-white tracking-wide">Кухни</h2>
          <p className="text-[10px] text-slate-400 tracking-widest uppercase mt-0.5">Портфолио 2024</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-amber-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </div>
      </div>

      {/* Gallery List */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-5 pt-0 space-y-6">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
        
        <div className="py-4 text-center">
             <p className="text-[10px] text-slate-600 tracking-[0.2em] uppercase">
                 Больше работ в Instagram
             </p>
        </div>
      </div>
    </div>
  );
};

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative w-full h-[280px] rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-amber-900/20 hover:scale-[1.02]">
      {/* Background Image */}
      <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      
      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
             <span className="h-[1px] w-6 bg-amber-500"></span>
             <p className="text-[10px] text-amber-500 font-medium tracking-widest uppercase">{project.category}</p>
        </div>
        <h3 className="text-xl font-serif text-white leading-tight drop-shadow-md">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

export default PortfolioCard;
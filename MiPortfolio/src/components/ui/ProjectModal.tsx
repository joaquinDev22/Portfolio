import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ExternalLink, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import Icon from "./Icon";
import type { Project } from "../../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function Carousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 250);
    },
    [animating, current]
  );

  const prev = () => goTo((current - 1 + images.length) % images.length);
  const next = () => goTo((current + 1) % images.length);

  // Reset carousel when images change (different project)
  useEffect(() => {
    setCurrent(0);
  }, [images]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  if (images.length === 0) {
    return (
      <div className="w-full h-64 flex flex-col items-center justify-center bg-slate-900/60 rounded-xl border border-white/10 gap-3">
        <ImageOff className="w-10 h-10 text-gray-600" />
        <p className="text-gray-500 text-sm font-mono">Sin imágenes disponibles</p>
      </div>
    );
  }

  return (
    <div className="relative w-full select-none">
      
      <div className="relative h-64 sm:h-80 overflow-hidden rounded-xl border border-white/10 bg-slate-950">
        <img
          key={current}
          src={images[current]}
          alt={`${title} - imagen ${current + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${
            animating ? "opacity-0" : "opacity-100"
          }`}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://placehold.co/800x450/0f172a/3b82f6?text=Imagen+No+Disponible";
          }}
        />
        
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />

        
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-slate-950/80 border border-white/10 text-white hover:bg-blue-600/80 hover:border-blue-500/50 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente imagen"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-slate-950/80 border border-white/10 text-white hover:bg-blue-600/80 hover:border-blue-500/50 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        
        {images.length > 1 && (
          <span className="absolute bottom-3 right-4 text-xs font-mono text-gray-400 bg-slate-950/80 border border-white/10 px-2.5 py-1 rounded-full">
            {current + 1} / {images.length}
          </span>
        )}
      </div>

      
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === current
                  ? "w-6 h-2 bg-blue-500"
                  : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      )}

      
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-thin">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                i === current
                  ? "border-blue-500 opacity-100"
                  : "border-white/10 opacity-50 hover:opacity-80"
              }`}
            >
              <img
                src={src}
                alt={`Thumbnail ${i + 1}`}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://placehold.co/80x56/0f172a/3b82f6?text=?";
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project || !mounted) return null;

  const carouselImages =
    project.images && project.images.length > 0
      ? project.images
      : project.image
      ? [project.image]
      : [];

  const hasLiveDemo =
    project.liveUrl && project.liveUrl !== project.githubFrontUrl;

  return createPortal(
    <div
      id="project-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalles de ${project.title}`}
      onClick={(e) => {
        if ((e.target as HTMLElement).id === "project-modal-backdrop") onClose();
      }}
      className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-modal-fade-in"
    >
      
      <div className="relative z-10000 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl animate-modal-slide-up scrollbar-thin">
        
        <div
          className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-linear-to-r ${project.imageColor}`}
        />

        
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-slate-800/80 border border-white/10 text-gray-400 hover:text-white hover:bg-slate-700 hover:border-white/20 transition-all duration-200 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="mb-6 pr-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 text-xs font-mono uppercase bg-slate-950/80 border border-white/15 text-blue-400 rounded-lg">
                {project.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {project.title}
            </h2>
          </div>

          
          <Carousel images={carouselImages} title={project.title} />

          
          <div className="mt-6 space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-widest text-blue-400">
              Sobre el proyecto
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.longDescription ?? project.description}
            </p>
          </div>

          
          <div className="mt-6">
            <h3 className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-3">
              Tecnologías
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-slate-800 border border-white/10 text-gray-300 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

         
          <div className="h-px w-full bg-white/5 my-6" />

          
          <div className="flex flex-wrap gap-3">
            {project.githubFrontUrl && (
              <a
                href={project.githubFrontUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-36 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-slate-800 border border-white/10 hover:border-white/25 text-gray-300 hover:text-white transition-all duration-200"
              >
                <Icon name="github" className="w-4 h-4" />
                {project.githubBackUrl ? "Front-End" : "Ver Código"}
              </a>
            )}

            {project.githubBackUrl && (
              <a
                href={project.githubBackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-36 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-slate-800 border border-white/10 hover:border-white/25 text-gray-300 hover:text-white transition-all duration-200"
              >
                <Icon name="github" className="w-4 h-4" />
                Back-End
              </a>
            )}

            {hasLiveDemo && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-36 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-lg shadow-blue-600/20"
              >
                <ExternalLink className="w-4 h-4" />
                Ver Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

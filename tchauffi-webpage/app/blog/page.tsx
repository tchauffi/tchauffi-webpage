import AnimatedLine from "../components/AnimatedLine";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: "training-diffusion-models-from-scratch",
      title: "Training Diffusion Models from Scratch",
      date: "2026",
      description: "A comprehensive guide to understanding and implementing diffusion models from the ground up. Covers the mathematical foundations, practical implementation details, and training strategies for building your own diffusion model using PyTorch.",
      link: "https://medium.com/@thibaut.chauffier/training-diffusion-models-from-scratch-21d7a1f18e9e",
      tags: ["Diffusion Models", "PyTorch", "Deep Learning", "Generative AI"],
      platform: "Medium"
    },
    {
      id: "exploring-3d-gaussian-splatting",
      title: "Exploring 3D Gaussian Splatting",
      date: "2024",
      description: "An exploration of 3D Gaussian Splatting, a revolutionary technique for real-time rendering and 3D reconstruction. Covers the core concepts, implementation details, and practical applications of this cutting-edge computer graphics method.",
      link: "https://medium.com/@thibaut.chauffier/exploring-3d-gaussian-splatting-e50b8c9cee93",
      tags: ["3D Vision", "Gaussian Splatting", "Computer Graphics", "Real-time Rendering"],
      platform: "Medium"
    }
  ];

  return (
    <div className="min-h-screen bg-navy">
      {/* Header */}
      <header className="px-8 md:px-16 lg:px-24 py-12 border-b border-border">
        <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
          ← Back to Home
        </Link>
      </header>

      {/* Blog Section */}
      <section className="px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide animate-fade-in-up hover-glow">
            Blog
          </h1>
          
          <p className="text-lg text-white/70 font-light leading-relaxed mb-12 animate-fade-in-up delay-200">
            Writings on machine learning, diffusion models, and AI research.
          </p>
          
          <AnimatedLine variant="thin" width="192px" className="mb-12 delay-400" />
          
          {/* Blog Posts List */}
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="group project-item animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 150}ms` }}
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-white/40 text-sm">
                    {String(index + 1).padStart(3, '0')}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h2 className="text-2xl text-white font-light">
                        {post.title}
                      </h2>
                      {post.platform && (
                        <span className="text-white/40 text-xs uppercase tracking-wider">
                          {post.platform}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="ml-12">
                  <p className="text-white/40 text-sm mb-3">{post.date}</p>
                  <p className="text-white/60 mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-white/40 text-sm px-3 py-1 border border-white/20 rounded hover:border-white/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white/70 hover:text-white hover:translate-x-2 transition-all"
                  >
                    Read Article →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 lg:px-24 py-12 border-t border-border mt-20">
        <div className="max-w-4xl">
          <p className="text-white/40 text-sm">
            © 2026 Thibaut Chauffier
          </p>
        </div>
      </footer>
    </div>
  );
}

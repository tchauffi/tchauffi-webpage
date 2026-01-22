import AnimatedLine from "./components/AnimatedLine";

export default function Home() {
  return (
    <div className="min-h-screen bg-navy">
      {/* Hero Section - Brand Manual Style */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl">
          {/* Name as main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide animate-fade-in-up hover-glow">
            Thibaut Chauffier
          </h1>
          
          {/* Title */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-12 animate-fade-in-up delay-200">
            Senior Machine Learning<br />
            Research Engineer
          </p>
          
          {/* Lumon-style horizontal lines */}
          <div className="lumon-lines-animated w-full max-w-2xl mb-12 delay-400"></div>
          
          {/* Edition/subtitle */}
          <p className="text-white/70 text-sm tracking-widest uppercase animate-fade-in delay-600">
            Paris, France · Edition 2026
          </p>
        </div>
      </section>

      {/* Core Directive Section */}
      <section className="px-8 md:px-16 lg:px-24 py-20 border-t border-border">
        <div className="max-w-4xl">
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-8">
            Senior ML Research Engineer with a rare combination: deep generative AI expertise meets production-hardened engineering.
Transforms advanced research (diffusion models, transformer based architecture, 3D Gaussian splatting) into deployed systems
serving millions globally. 8+ years spanning robotics to beauty tech, with a track record of making complex
ML accessible through elegant production architectures.
          </p>
          
          <AnimatedLine variant="thin" width="192px" className="mb-8" />
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="animate-fade-in-up delay-100 hover-lift p-4 -m-4 rounded-lg transition-all">
              <div className="text-3xl md:text-4xl font-light text-white stat-number">8+</div>
              <div className="text-sm text-white/50 uppercase tracking-wider mt-1">Years</div>
            </div>
            <div className="animate-fade-in-up delay-200 hover-lift p-4 -m-4 rounded-lg transition-all">
              <div className="text-3xl md:text-4xl font-light text-white stat-number">5</div>
              <div className="text-sm text-white/50 uppercase tracking-wider mt-1">Patents</div>
            </div>
            <div className="animate-fade-in-up delay-300 hover-lift p-4 -m-4 rounded-lg transition-all">
              <div className="text-3xl md:text-4xl font-light text-white stat-number">1M+</div>
              <div className="text-sm text-white/50 uppercase tracking-wider mt-1">Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-8 md:px-16 lg:px-24 py-20 border-t border-border">
        <div className="max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4 hover-glow">
            Project Archive
          </h2>
          <AnimatedLine variant="thin" width="128px" className="mb-12" />
          
          <div className="space-y-12">
            {/* Project 1 */}
            <div className="group project-item">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-white/40 text-sm">001</span>
                <h3 className="text-xl text-white font-light">Controllable Face Aging</h3>
              </div>
              <p className="text-white/60 ml-12 mb-2">
                Custom Latent Diffusion model for real-time face aging on iPad Pro.
                Published at ICCV 2025 (Oral).
              </p>
              <div className="ml-12 flex gap-4 text-sm">
                <span className="text-white/40">Diffusion · PyTorch · CoreML</span>
                <a href="https://arxiv.org/abs/2507.21600" target="_blank" rel="noopener noreferrer" 
                   className="text-white/70 hover:text-white transition-colors">
                  → Publication
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group project-item">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-white/40 text-sm">002</span>
                <h3 className="text-xl text-white font-light">3D Facial Capture Pipeline</h3>
              </div>
              <p className="text-white/60 ml-12 mb-2">
                Novel 2D/3D Gaussian Splatting + FLAME pipeline for high-fidelity facial reconstruction.
              </p>
              <div className="ml-12">
                <span className="text-white/40 text-sm">3D Vision · Gaussian Splatting · FLAME</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group project-item">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-white/40 text-sm">003</span>
                <h3 className="text-xl text-white font-light">Global Skin Tone Detection</h3>
              </div>
              <p className="text-white/60 ml-12 mb-2">
                CNN-based system deployed across 9 L'Oréal brands globally. Real-time inference API.
              </p>
              <div className="ml-12 flex gap-4 text-sm">
                <span className="text-white/40">Computer Vision · ONNX · FastAPI</span>
                <a href="https://www.lancome-usa.com/e-shade-finder.html" target="_blank" rel="noopener noreferrer"
                   className="text-white/70 hover:text-white transition-colors">
                  → eShadefinder
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group project-item">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-white/40 text-sm">004</span>
                <h3 className="text-xl text-white font-light">AI Formulation Engine</h3>
              </div>
              <p className="text-white/60 ml-12 mb-2">
                Real-time formulation prediction for YSL Rouge-Sur-Mesure. Customer-designed lipsticks via embedded AI.
              </p>
              <div className="ml-12 flex gap-4 text-sm">
                <span className="text-white/40">Embedded ML · Real-time · Production</span>
                <a href="https://www.yslbeautyus.com/rouge-sur-mesure/rouge-sur-mesure-custom-lip-color-creator/WW-50912YSL.html" target="_blank" rel="noopener noreferrer"
                   className="text-white/70 hover:text-white transition-colors">
                  → Rouge-Sur-Mesure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-8 md:px-16 lg:px-24 py-20 border-t border-border">
        <div className="max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4 hover-glow">
            Employment Record
          </h2>
          <AnimatedLine variant="thin" width="128px" className="mb-12" />
          
          <div className="space-y-12">
            {/* Role 1 */}
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                <span className="text-white/40 text-sm md:w-32">2022 — Present</span>
                <div>
                  <h3 className="text-xl text-white font-light">Senior ML Research Engineer</h3>
                  <p className="text-white/50">L'Oréal · Paris</p>
                </div>
              </div>
              <ul className="md:ml-40 space-y-2 text-white/60">
                <li>Lead AI and computer vision initiatives across global R&D programs</li>
                <li>Designed and deployed production ML systems serving millions of users worldwide</li>
                <li>Drove exploratory research projects within the diagnostic team, from prototyping to validation</li>
              </ul>
            </div>

            {/* Role 2 */}
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                <span className="text-white/40 text-sm md:w-32">2017 — 2022</span>
                <div>
                  <h3 className="text-xl text-white font-light">Mechatronics Engineer</h3>
                  <p className="text-white/50">L'Oréal · Paris</p>
                </div>
              </div>
              <ul className="md:ml-40 space-y-2 text-white/60">
                <li>Led the design and development of an ML-powered self-calibration robotic system</li>
                <li>Managed and mentored the embedded software team through full product lifecycle</li>
              </ul>
            </div>

            {/* Role 3 */}
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                <span className="text-white/40 text-sm md:w-32">2016 — 2017</span>
                <div>
                  <h3 className="text-xl text-white font-light">Mechatronics Engineer</h3>
                  <p className="text-white/50">Civic Drone · Paris</p>
                </div>
              </div>
              <ul className="md:ml-40 space-y-2 text-white/60">
                <li>Developed real-time UAV fall detection using sensor fusion and Kalman filtering</li>
                <li>Achieved a 44 percent efficiency improvement through ML-based optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section className="px-8 md:px-16 lg:px-24 py-20 border-t border-border">
        <div className="max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4 hover-glow">
            Technical Capabilities
          </h2>
          <AnimatedLine variant="thin" width="128px" className="mb-12" />
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="hover-lift p-4 -m-4 rounded-lg">
              <h3 className="text-white/50 text-sm uppercase tracking-wider mb-4">ML/AI</h3>
              <ul className="space-y-2 text-white/70">
                <li>Diffusion Models</li>
                <li>GANs</li>
                <li>Transformers</li>
                <li>Self-Supervised Learning</li>
                <li>3D Vision</li>
                <li>LoRA/PEFT</li>
              </ul>
            </div>
            
            <div className="hover-lift p-4 -m-4 rounded-lg">
              <h3 className="text-white/50 text-sm uppercase tracking-wider mb-4">Frameworks</h3>
              <ul className="space-y-2 text-white/70">
                <li>PyTorch</li>
                <li>TensorFlow</li>
                <li>HuggingFace</li>
                <li>FastAPI</li>
                <li>Docker</li>
              </ul>
            </div>
            
            <div className="hover-lift p-4 -m-4 rounded-lg">
              <h3 className="text-white/50 text-sm uppercase tracking-wider mb-4">Production</h3>
              <ul className="space-y-2 text-white/70">
                <li>ONNX</li>
                <li>CUDA</li>
                <li>GCP/Vertex AI</li>
                <li>CI/CD</li>
                <li>Quantization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Open Source */}
      <section className="px-8 md:px-16 lg:px-24 py-20 border-t border-border">
        <div className="max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 hover-glow">
                Education
              </h2>
              <AnimatedLine variant="thin" width="96px" className="mb-8" />
              
              <div>
                <p className="text-white/40 text-sm mb-2">2010 — 2015</p>
                <h3 className="text-lg text-white font-light mb-1">
                  Université de Technologie de Compiègne
                </h3>
                <p className="text-white/50 text-sm mb-2">Sorbonne University Alliance</p>
                <p className="text-white/60">Engineering Degree in System Engineering (MSc.)</p>
              </div>
            </div>

            {/* Open Source */}
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 hover-glow">
                Open Source
              </h2>
              <AnimatedLine variant="thin" width="96px" className="mb-8" />
              
              <div className="space-y-6">
                <a href="https://github.com/tchauffi/diffusion-pytorch" target="_blank" rel="noopener noreferrer"
                   className="block group">
                  <h3 className="text-white/70 group-hover:text-white transition-colors">
                    diffusion-pytorch →
                  </h3>
                  <p className="text-white/40 text-sm">Latent Diffusion Models from scratch</p>
                </a>

                <a href="https://github.com/tchauffi/ChessTransformer" target="_blank" rel="noopener noreferrer"
                   className="block group">
                  <h3 className="text-white/70 group-hover:text-white transition-colors">
                    ChessTransformer →
                  </h3>
                  <p className="text-white/40 text-sm">Transformer-based chess engine</p>
                </a>
                
                <a href="https://github.com/tchauffi/rust-rasterizer" target="_blank" rel="noopener noreferrer"
                   className="block group">
                  <h3 className="text-white/70 group-hover:text-white transition-colors">
                    rust-rasterizer →
                  </h3>
                  <p className="text-white/40 text-sm">Real-time raytracer in WebAssembly</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 md:px-16 lg:px-24 py-20 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4 hover-glow">
            Contact
          </h2>
          <AnimatedLine variant="thin" width="96px" className="mb-12" />
          
          <div className="space-y-4">
            <a href="mailto:tchauffi@gmail.com" 
               className="block text-white/70 hover:text-white hover:translate-x-2 transition-all text-lg">
              tchauffi@gmail.com →
            </a>
            <a href="https://linkedin.com/in/thibautchauffier" target="_blank" rel="noopener noreferrer"
               className="block text-white/70 hover:text-white hover:translate-x-2 transition-all text-lg">
              LinkedIn →
            </a>
            <a href="https://github.com/tchauffi" target="_blank" rel="noopener noreferrer"
               className="block text-white/70 hover:text-white hover:translate-x-2 transition-all text-lg">
              GitHub →
            </a>
            <a href="https://medium.com/@thibaut.chauffier" target="_blank" rel="noopener noreferrer"
               className="block text-white/70 hover:text-white hover:translate-x-2 transition-all text-lg">
              Medium →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 lg:px-24 py-12 border-t border-border">
        <div className="max-w-5xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Thibaut Chauffier
          </p>
          <p className="text-white/30 text-xs animate-glow-pulse">
            The work is mysterious and important.
          </p>
        </div>
      </footer>
    </div>
  );
}

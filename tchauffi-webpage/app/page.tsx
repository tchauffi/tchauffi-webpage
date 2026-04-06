import AnimatedLine from "./components/AnimatedLine";
import Link from "next/link";

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

          <p className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-4 animate-fade-in-up delay-200">
            Senior ML Research Engineer<br />
            <span className="text-white/60 text-lg md:text-xl lg:text-2xl">Computer Vision · Generative AI</span>
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
            Senior ML Research Engineer bridging deep research and production impact — published author,
            inventor, and technical lead across research and engineering teams. 8+ years advancing
            generative models, 3D scene representations, and self-supervised vision systems, with
            rare end-to-end ownership: from novel architecture design to low-latency systems
            serving millions globally across robotics, UAVs, and beauty tech.
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

      {/* Publication — moved up, before Projects */}
      <section className="px-8 md:px-16 lg:px-24 py-20 border-t border-border">
        <div className="max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4 hover-glow">
            Publications &amp; Patents
          </h2>
          <AnimatedLine variant="thin" width="128px" className="mb-12" />

          <div className="space-y-10">
            {/* ICCV Paper */}
            <div className="group project-item">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-white/40 text-sm">2025</span>
                <div>
                  <h3 className="text-xl text-white font-light">
                    Locally Controlled Face Aging with Latent Diffusion Models
                  </h3>
                  <p className="text-white/40 text-sm mt-1">
                    ICCV 2025 P13N Workshop · <span className="text-white/60 font-medium">Oral Presentation</span> · Co-author
                  </p>
                </div>
              </div>
              <div className="ml-12 flex gap-4 text-sm mt-3">
                <span className="text-white/40">Diffusion · Spatial Conditioning · Face Synthesis</span>
                <a href="https://arxiv.org/abs/2507.21600" target="_blank" rel="noopener noreferrer"
                   className="text-white/70 hover:text-white transition-colors">
                  → arXiv:2507.21600
                </a>
              </div>
            </div>

            {/* Patents */}
            <div className="group project-item">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-white/40 text-sm">–</span>
                <div>
                  <h3 className="text-xl text-white font-light">5 Granted Patents</h3>
                  <p className="text-white/60 mt-1 text-sm leading-relaxed">
                    Spanning ML-driven robotics (active learning self-calibration), computer vision
                    (skin tone detection &amp; shade matching), and embedded AI inference systems.
                  </p>
                </div>
              </div>
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
                Custom Latent Diffusion model with efficient spatial conditioning for real-time
                face aging on iPad Pro. Accepted as Oral at ICCV 2025.
              </p>
              <div className="ml-12 flex gap-4 text-sm">
                <span className="text-white/40">Diffusion · PyTorch · CoreML · Edge Inference</span>
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
                Novel 2D/3D Gaussian Splatting + FLAME pipeline for high-fidelity facial
                reconstruction, optimized for production deployment.
              </p>
              <div className="ml-12">
                <span className="text-white/40 text-sm">3D Gaussian Splatting · NeRF · FLAME · Computer Vision</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group project-item">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-white/40 text-sm">003</span>
                <h3 className="text-xl text-white font-light">Self-Supervised Facial Foundation Model</h3>
              </div>
              <p className="text-white/60 ml-12 mb-2">
                Foundation model trained with self-supervised objectives to learn
                semantically rich facial representations, enabling zero-shot transfer across
                multiple downstream tasks.
              </p>
              <div className="ml-12">
                <span className="text-white/40 text-sm">Self-Supervised Learning · Transfer Learning · PyTorch</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group project-item">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-white/40 text-sm">004</span>
                <h3 className="text-xl text-white font-light">Global Skin Tone Detection</h3>
              </div>
              <p className="text-white/60 ml-12 mb-2">
                Low-latency CNN-based system for skin tone detection and foundation shade matching,
                deployed across 9 L'Oréal brands on mobile and web. Sub-100ms inference via
                model serving pipeline.
              </p>
              <div className="ml-12 flex gap-4 text-sm">
                <span className="text-white/40">Computer Vision · ONNX · FastAPI · MLOps</span>
                <a href="https://www.lancome-usa.com/e-shade-finder.html" target="_blank" rel="noopener noreferrer"
                   className="text-white/70 hover:text-white transition-colors">
                  → eShadefinder
                </a>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group project-item">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-white/40 text-sm">005</span>
                <h3 className="text-xl text-white font-light">AI Formulation Engine</h3>
              </div>
              <p className="text-white/60 ml-12 mb-2">
                Real-time edge inference formulation prediction for YSL Rouge-Sur-Mesure,
                enabling customer-designed lipsticks under strict embedded constraints.
              </p>
              <div className="ml-12 flex gap-4 text-sm">
                <span className="text-white/40">Embedded ML · Edge Inference · Real-time</span>
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
                  <h3 className="text-xl text-white font-light">Senior ML Research Engineer · Technical Lead</h3>
                  <p className="text-white/50">L'Oréal · Paris</p>
                </div>
              </div>
              <ul className="md:ml-40 space-y-2 text-white/60">
                <li>Technical lead across AI and computer vision research and engineering teams</li>
                <li>Designed and deployed low-latency ML systems serving millions of users globally</li>
                <li>Led exploratory research (diffusion models, 3D Gaussian splatting, self-supervised learning) from prototyping to production</li>
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
                <li>Designed ML-powered self-calibration system using Gaussian Process Regression with active learning — reduced material waste by 71% and downtime by 83%</li>
                <li>Managed and mentored the embedded software team through full product lifecycle and safety certification</li>
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
                <li>Achieved 44% propulsion efficiency gain and 10% power reduction via ML-based optimization</li>
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
              <h3 className="text-white/50 text-sm uppercase tracking-wider mb-4">ML / AI Research</h3>
              <ul className="space-y-2 text-white/70">
                <li>Diffusion Models</li>
                <li>Gaussian Splatting · NeRF</li>
                <li>Transformers</li>
                <li>Self-Supervised Learning</li>
                <li>Multimodal Models</li>
                <li>LoRA / PEFT Fine-tuning</li>
                <li>GANs</li>
              </ul>
            </div>

            <div className="hover-lift p-4 -m-4 rounded-lg">
              <h3 className="text-white/50 text-sm uppercase tracking-wider mb-4">Frameworks</h3>
              <ul className="space-y-2 text-white/70">
                <li>PyTorch</li>
                <li>TensorFlow</li>
                <li>HuggingFace (Transformers, Diffusers)</li>
                <li>FastAPI</li>
                <li>Docker</li>
              </ul>
            </div>

            <div className="hover-lift p-4 -m-4 rounded-lg">
              <h3 className="text-white/50 text-sm uppercase tracking-wider mb-4">Production &amp; MLOps</h3>
              <ul className="space-y-2 text-white/70">
                <li>Model Serving</li>
                <li>Edge Inference</li>
                <li>ONNX</li>
                <li>CUDA</li>
                <li>GCP / Vertex AI</li>
                <li>Quantization · Distillation</li>
                <li>CI/CD</li>
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
                <p className="text-white/40 text-sm mt-2">
                  Computer Science · Mathematics · Statistics · Physics · Mechatronics
                </p>
              </div>
            </div>

            {/* Open Source */}
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 hover-glow">
                Open Source
              </h2>
              <AnimatedLine variant="thin" width="96px" className="mb-8" />

              <div className="space-y-6">
                <a href="https://github.com/tchauffi/ChessTransformer" target="_blank" rel="noopener noreferrer"
                   className="block group">
                  <h3 className="text-white/70 group-hover:text-white transition-colors">
                    ChessTransformer →
                  </h3>
                  <p className="text-white/40 text-sm">Transformer-based chess engine trained on the Lichess database</p>
                </a>

                <a href="https://github.com/tchauffi/rust-rasterizer" target="_blank" rel="noopener noreferrer"
                   className="block group">
                  <h3 className="text-white/70 group-hover:text-white transition-colors">
                    rust-rasterizer →
                  </h3>
                  <p className="text-white/40 text-sm">Real-time raytracer in Rust, running in-browser via WebAssembly</p>
                </a>

                <a href="https://github.com/tchauffi" target="_blank" rel="noopener noreferrer"
                   className="block group">
                  <h3 className="text-white/70 group-hover:text-white transition-colors">
                    github.com/tchauffi →
                  </h3>
                  <p className="text-white/40 text-sm">Active contributor · generative AI and applied ML</p>
                </a>

                <a href="https://medium.com/@thibaut.chauffier" target="_blank" rel="noopener noreferrer"
                   className="block group">
                  <h3 className="text-white/70 group-hover:text-white transition-colors">
                    Medium articles →
                  </h3>
                  <p className="text-white/40 text-sm">Technical writing on generative AI and applied ML</p>
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
            <a href="/CV_V2_TC_2025.pdf" download
               className="block text-white/70 hover:text-white hover:translate-x-2 transition-all text-lg font-light">
              Resume (PDF) →
            </a>
            <Link href="/blog"
               className="block text-white/70 hover:text-white hover:translate-x-2 transition-all text-lg">
              Blog →
            </Link>
            <a href="mailto:tchauffi+persosite@gmail.com"
               className="block text-white/70 hover:text-white hover:translate-x-2 transition-all text-lg">
              Email →
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
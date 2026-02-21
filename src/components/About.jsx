import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const About = () => {
  const [headingRef, isHeadingVisible] = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface"
    >
      <div className="max-w-4xl mx-auto">
        <div ref={headingRef} className="mb-4 text-center overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span 
              className={`inline-block opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up' : ''}`} 
              style={{ animationFillMode: 'forwards' }}
            >
              About
            </span>{' '}
            <span 
              className={`text-gradient-animated inline-block opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up-delayed' : ''}`} 
              style={{ animationFillMode: 'forwards' }}
            >
              Me
            </span>
          </h2>
        </div>
        <div 
          className={`w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-12 opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up-delayed-2' : ''}`} 
          style={{ animationFillMode: 'forwards' }} 
        />

        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            With over <strong className="text-white">3 years of experience</strong> in full-stack development, I specialize in building high-performance web applications using modern technologies like <strong className="text-white">Angular</strong>, <strong className="text-white">React</strong>, <strong className="text-white">TypeScript</strong>, and <strong className="text-white">Node.js</strong>.
          </p>

          <p>
            I don't just write code; I <strong className="text-white">architect systems</strong> that are scalable, maintainable, and user-friendly. My passion lies in solving complex problems and turning abstract ideas into tangible, high-quality products.
          </p>

          <p>
            Currently, I'm focused on building <strong className="text-white">scalable backend architectures</strong> and optimizing application performance. When I'm not coding, you'll find me exploring the latest tech trends or contributing to the developer community.
          </p>

          <div className="mt-8 p-6 bg-dark-card rounded-lg border border-dark-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">3+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">3+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

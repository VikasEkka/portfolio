import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/FullStack.pdf')
      const contentType = response.headers.get('content-type')
      
      // Verify we got an actual PDF, not an HTML fallback
      if (!response.ok || (contentType && contentType.includes('text/html'))) {
        throw new Error('Resume file not found')
      }
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Vikas_Ekka_Resume.pdf'
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
      alert('Could not download resume. Please try again later.')
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Animated Background Glow */}
      <div className="hero-bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div 
        className="hero-bg-glow absolute top-1/3 right-1/4 opacity-20"
        style={{ 
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          animationDelay: '1.5s'
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Main Heading with Word-by-Word Animation */}
        <div className="mb-8 overflow-hidden">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            {['Building', 'digital', 'products', 'that', 'scale', '&', 'perform'].map((word, index) => (
              <span
                key={index}
                className="inline-block mr-3 md:mr-4 opacity-0"
                style={{
                  animation: `wordReveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.12}s forwards`,
                }}
              >
                <span className="relative inline-block group">
                  {index === 4 || index === 6 ? (
                    <span className="text-gradient-animated relative z-10" style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))' }}>
                      {word}
                    </span>
                  ) : (
                    <span className="text-white group-hover:text-gradient-animated transition-all duration-500">
                      {word}
                    </span>
                  )}
                </span>
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle with Staggered Animation */}
        <div className="mb-10 overflow-hidden">
          <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-2xl mx-auto">
            <span 
              className="inline-block animate-slow-slide-up-delayed-2 opacity-0" 
              style={{ animationFillMode: 'forwards' }}
            >
              MEAN Stack Developer | Backend-Focused Engineer
            </span>
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            <span 
              className="inline-block animate-slow-slide-up-delayed-3 opacity-0" 
              style={{ animationFillMode: 'forwards' }}
            >
              3+ years of experience crafting robust APIs and server-side solutions
            </span>
          </p>
        </div>

        {/* CTA Buttons with Slow Motion */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-500 transform hover:scale-110 shadow-lg shadow-accent-primary/30 hover:shadow-accent-primary/50 animate-slow-slide-up-delayed-3 opacity-0"
            style={{ animationFillMode: 'forwards' }}
          >
            View Projects
          </a>
          <button
            onClick={handleDownloadResume}
            className="px-8 py-3 bg-dark-card border border-dark-border text-gray-100 rounded-lg font-semibold hover:bg-dark-surface transition-all duration-500 transform hover:scale-110 flex items-center gap-2 animate-slow-slide-up-delayed-3 opacity-0"
            style={{ animationFillMode: 'forwards', animationDelay: '1.5s' }}
          >
            <FaDownload className="animate-float" />
            Download Resume
          </button>
          <a
            href="#contact"
            className="px-8 py-3 border border-accent-primary text-accent-primary rounded-lg font-semibold hover:bg-accent-primary hover:text-white transition-all duration-500 transform hover:scale-110 animate-slow-slide-up-delayed-3 opacity-0"
            style={{ animationFillMode: 'forwards', animationDelay: '1.8s' }}
          >
            Contact Me
          </a>
        </div>

        {/* Social Links with Slow Motion */}
        <div className="flex justify-center gap-6 text-gray-400">
          <a
            href="https://www.linkedin.com/in/vikas-ekka-877b8a239/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-primary transition-all duration-500 transform hover:scale-125 hover:rotate-12 animate-slow-slide-up-delayed-4 opacity-0"
            style={{ animationFillMode: 'forwards' }}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/vikas-ekka"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-primary transition-all duration-500 transform hover:scale-125 hover:rotate-12 animate-slow-slide-up-delayed-4 opacity-0"
            style={{ animationFillMode: 'forwards', animationDelay: '2.1s' }}
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:vikasekka08@gmail.com"
            className="hover:text-accent-primary transition-all duration-500 transform hover:scale-125 hover:rotate-12 animate-slow-slide-up-delayed-4 opacity-0"
            style={{ animationFillMode: 'forwards', animationDelay: '2.4s' }}
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Scroll Indicator with Slow Motion */}
        <div className="mt-16 animate-slow-slide-up-delayed-4 opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '2.7s' }}>
          <a
            href="#about"
            className="inline-block text-gray-500 hover:text-accent-primary transition-all duration-500"
            aria-label="Scroll to about"
          >
            <div className="flex flex-col items-center animate-float">
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

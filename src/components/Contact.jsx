import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const Contact = () => {
  const [headingRef, isHeadingVisible] = useIntersectionObserver({ threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg"
    >
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="mb-4 text-center overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span 
              className={`inline-block opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up' : ''}`} 
              style={{ animationFillMode: 'forwards' }}
            >
              Get In
            </span>{' '}
            <span 
              className={`text-gradient-animated inline-block opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up-delayed' : ''}`} 
              style={{ animationFillMode: 'forwards' }}
            >
              Touch
            </span>
          </h2>
        </div>
        <div 
          className={`w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-12 opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up-delayed-2' : ''}`} 
          style={{ animationFillMode: 'forwards' }} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                I'm always open to discussing new opportunities, interesting projects, or
                just having a conversation about technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:vikasekka08@gmail.com"
                className="flex items-center gap-4 p-4 bg-dark-card rounded-lg border border-dark-border hover:border-accent-primary/50 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
                  <FaEnvelope className="text-accent-primary" size={20} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Email</div>
                  <div className="text-white font-medium">vikasekka08@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/vikas-ekka-877b8a239/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-dark-card rounded-lg border border-dark-border hover:border-accent-primary/50 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
                  <FaLinkedin className="text-accent-primary" size={20} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">LinkedIn</div>
                  <div className="text-white font-medium">linkedin.com/in/vikas-ekka-877b8a239</div>
                </div>
              </a>

              <a
                href="https://github.com/vikas-ekka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-dark-card rounded-lg border border-dark-border hover:border-accent-primary/50 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
                  <FaGithub className="text-accent-primary" size={20} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">GitHub</div>
                  <div className="text-white font-medium">github.com/vikas-ekka</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-dark-card rounded-lg border border-dark-border">
                <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-accent-primary" size={20} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Location</div>
                  <div className="text-white font-medium">Indore, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-card p-6 rounded-lg border border-dark-border">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

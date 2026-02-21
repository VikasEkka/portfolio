import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-surface border-t border-dark-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Vikas Ekka. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/vikas-ekka-877b8a239/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/vikas-ekka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="mailto:vikasekka08@gmail.com"
              className="text-gray-400 hover:text-accent-primary transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-dark-border text-center">
          <p className="text-gray-500 text-xs">
            Built with React & Tailwind CSS • Designed for performance & accessibility
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

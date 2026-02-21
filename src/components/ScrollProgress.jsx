import { useState, useEffect } from 'react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollableHeight = documentHeight - windowHeight
      const progress = (scrollTop / scrollableHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', calculateScrollProgress)
    return () => window.removeEventListener('scroll', calculateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-dark-border z-50">
      <div
        className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollProgress

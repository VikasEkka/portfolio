import { useState, useEffect, useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const SkillBar = ({ skill, level, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.5 }
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current)
      }
    }
  }, [delay])

  return (
    <div ref={barRef} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">{skill}</span>
        <span className="text-gray-500 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-dark-card rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-1000 ease-out ${
            isVisible ? 'w-full' : 'w-0'
          }`}
          style={{ width: isVisible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

const Skills = () => {
  const [headingRef, isHeadingVisible] = useIntersectionObserver({ threshold: 0.2 })

  const skillCategories = {
    Backend: [
      { name: 'Node.js', level: 95 },
      { name: 'Express.js', level: 90 },
      { name: 'REST APIs', level: 92 },
      { name: 'Microservices Architecture', level: 85 },
    ],
    Frontend: [
      { name: 'Angular', level: 80 },
      { name: 'React', level: 50 },
    ],
    Database: [
      { name: 'Firebase', level: 80 },
      { name: 'BigQuery', level: 98 },
      { name: 'Google Buckets', level: 80 },
      { name: 'Database Design', level: 88 },
    ],
    'Tools & Concepts': [
      { name: 'Performance Optimization', level: 90 },
      { name: 'System Design', level: 85 },
      { name: 'Git', level: 92 },
      { name: 'Debugging', level: 95 },
    ],
  }

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg"
    >
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="mb-4 text-center overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span 
              className={`inline-block opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up' : ''}`} 
              style={{ animationFillMode: 'forwards' }}
            >
              Technical
            </span>{' '}
            <span 
              className={`text-gradient-animated inline-block opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up-delayed' : ''}`} 
              style={{ animationFillMode: 'forwards' }}
            >
              Skills
            </span>
          </h2>
        </div>
        <div 
          className={`w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-12 opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up-delayed-2' : ''}`} 
          style={{ animationFillMode: 'forwards' }} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <div
              key={category}
              className="bg-dark-card p-6 rounded-lg border border-dark-border hover:border-accent-primary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gradient">
                {category}
              </h3>
              <div>
                {skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 100 + index * 50}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

import { FaBriefcase } from 'react-icons/fa'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const ExperienceItem = ({ experience, index }) => {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-dark-border last:border-l-0 last:pb-0">
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent-primary rounded-full border-4 border-dark-bg" />
      <div className="bg-dark-card p-6 rounded-lg border border-dark-border hover:border-accent-primary/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
            <p className="text-accent-primary font-medium">{experience.company}</p>
          </div>
          <span className="text-gray-500 text-sm whitespace-nowrap ml-4">
            {experience.period}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-4">{experience.location}</p>
        <ul className="space-y-2">
          {experience.contributions.map((contribution, idx) => (
            <li key={idx} className="text-gray-300 text-sm flex items-start">
              <span className="text-accent-primary mr-2 mt-1">▸</span>
              <span>{contribution}</span>
            </li>
          ))}
        </ul>
        {experience.impact && (
          <div className="mt-4 pt-4 border-t border-dark-border">
            <p className="text-sm text-gray-400">
              <strong className="text-white">Impact:</strong> {experience.impact}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

const Experience = () => {
  const [headingRef, isHeadingVisible] = useIntersectionObserver({ threshold: 0.2 })

  const experiences = [
    {
      role: 'Senior Backend Developer',
      company: 'Tech Solutions Inc.',
      location: 'Indore, India',
      period: '2023 - Present',
      contributions: [
        'Engineered a scalable reports microservice executing ETL on 10M+ records daily to drive a real-time analytics dashboard; leveraged Looker Studio for direct visualization (reducing UI effort by 30%) and implemented automated email/Slack alerts for ETL failures and data anomalies to maintain system reliability',
        'Built a queue-backed webhook delivery system processing 100K+ daily events with integrations to WebEngage, MoEngage, and CleverTap; implemented exponential retry mechanism, rate limiting, and auto-pause safeguards, achieving high delivery reliability while protecting client endpoints from overload',
        'Developed a customer churn prediction feature using Google ML and BigQuery, which improved customer loyalty by 15% over six months by providing actionable insights into customer behavior',
        'Designed and implemented an anomaly detection system using Node.js and machine learning models, training supervised models on large-scale BigQuery datasets for real-time traffic analysis, reducing bot attacks by 40% and onboarding of key enterprise clients through enhanced security capabilities',
        'Built a real-time billing analytics system with Node.js, Express.js, and RESTful APIs, processing 10M+ records monthly for 500+ clients; automated invoice computation and vendor reconciliation, cutting manual effort by ~60% and achieving ~99% billing accuracy',
        'Migrated RabbitMQ consumers to Kubernetes with horizontal pod auto-scaling and health checks, improving system availability to 99.9% and enabling seamless scaling under peak traffic',
        'Implemented Redis caching with TTL for high-frequency polling endpoints, preventing repeated identical DB queries from client reload abuse, reducing DB load by 40% and improving API response time by 35%',
        'Optimized CI/CD pipelines and enforced structured peer code reviews within an Agile workflow, reducing release cycle time, improving sprint velocity by 25%, and decreasing production defects by 30%',
      ],
      impact:
        'Improved system availability to 99.9%, reduced manual effort by 60%, improved customer loyalty by 15%, and enhanced development velocity by 25%',
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Innovations Pvt. Ltd.',
      location: 'Indore, India',
      period: '2022 - 2023',
      contributions: [
        'Created reusable Angular components integrated with NgRx for efficient state management, significantly enhancing code maintainability and boosting development speed by 40%',
        'Developed a File System and sharing utility using Google Buckets and Firebase, enabling users to upload files and generate shareable links, handling over 10,000 file transactions monthly with 99.9% uptime',
        'Built RESTful APIs for mobile and web clients with JWT authentication and comprehensive error handling',
        'Worked with MongoDB for data modeling and implemented efficient database queries with proper indexing',
        'Integrated third-party APIs and payment gateways, ensuring seamless data flow and transaction processing',
        'Participated in code reviews and contributed to improving codebase quality and best practices',
      ],
      impact:
        'Enhanced development speed by 40%, achieved 99.9% uptime for file system utility, and improved code maintainability through reusable components',
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg"
    >
      <div className="max-w-4xl mx-auto">
        <div ref={headingRef} className="flex items-center justify-center mb-12 overflow-hidden">
          <FaBriefcase 
            className={`text-accent-primary mr-3 opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up' : ''}`} 
            size={32} 
            style={{ animationFillMode: 'forwards' }} 
          />
          <h2 className="text-4xl md:text-5xl font-bold">
            <span 
              className={`inline-block opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up' : ''}`} 
              style={{ animationFillMode: 'forwards' }}
            >
              Professional
            </span>{' '}
            <span 
              className={`text-gradient-animated inline-block opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up-delayed' : ''}`} 
              style={{ animationFillMode: 'forwards' }}
            >
              Experience
            </span>
          </h2>
        </div>
        <div 
          className={`w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-12 opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up-delayed-2' : ''}`} 
          style={{ animationFillMode: 'forwards' }} 
        />

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} index={index} />
          ))}
        </div>

        <div className="mt-12 p-6 bg-dark-card rounded-lg border border-dark-border text-center">
          <p className="text-gray-300 mb-2">
            <strong className="text-white">Notice Period:</strong> 30 days
          </p>
          <p className="text-gray-400 text-sm">
            Open to relocation opportunities
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience

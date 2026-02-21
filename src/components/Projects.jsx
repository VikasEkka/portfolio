import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-dark-card rounded-lg border border-dark-border overflow-hidden hover:border-accent-primary/50 transition-all duration-300 transform hover:scale-[1.02] group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-primary transition-colors"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-dark-surface text-gray-300 text-sm rounded-full border border-dark-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-4 text-gray-300">
          <div>
            <h4 className="text-white font-semibold mb-2">Problem Statement</h4>
            <p className="text-sm leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Architecture Overview</h4>
            <p className="text-sm leading-relaxed">{project.architecture}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Solution Implemented</h4>
            <p className="text-sm leading-relaxed">{project.solution}</p>
          </div>

          <div className="pt-4 border-t border-dark-border">
            <h4 className="text-white font-semibold mb-2">Impact</h4>
            <div className="flex flex-wrap gap-2">
              {project.impact.map((impact, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-sm rounded-full border border-accent-primary/20"
                >
                  {impact}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const [headingRef, isHeadingVisible] = useIntersectionObserver({ threshold: 0.2 })

  const projects = [
    {
      title: 'Real-Time Analytics Dashboard API',
      techStack: ['Node.js', 'Express.js', 'Angular', 'TypeScript', 'Sequelize', 'BigQuery', 'Firebase', 'ETL', 'RESTful APIs', 'RabbitMQ'],
      problem:
        'Developed a real-time analytics system processing 10M+ data points daily, requiring sub-second query responses and live data visualization capabilities.',
      architecture:
        'Event-driven architecture with RabbitMQ for message queuing, BigQuery for data warehousing, Firebase for real-time data synchronization and authentication, ETL pipelines for data extraction, transformation, and loading, Sequelize ORM for database operations, and RESTful APIs for communication. Angular frontend with TypeScript for type-safe development. Implemented data aggregation pipelines and caching layers.',
      solution:
        'Built optimized BigQuery queries with proper partitioning and clustering. Implemented incremental data processing to reduce query costs by 60%. Created RESTful API endpoints for dashboard data retrieval. Used RabbitMQ for asynchronous message processing and task queuing. Integrated Firebase for real-time data synchronization and user authentication. Designed efficient caching strategy using Redis to reduce database load. Angular frontend provides real-time data visualization with TypeScript ensuring type safety.',
      impact: [
        'Sub-second Query Response',
        '60% Cost Reduction',
        'Processes 10M+ Data Points',
        'Real-time Analytics',
      ],
      github: '#',
      live: '#',
    },
    {
      title: 'Content Delivery Network (CDN) Management API',
      techStack: ['Node.js', 'Express.js', 'React', 'MySQL', 'Google Buckets'],
      problem:
        'Developed a CDN management system for distributing and caching content globally, requiring efficient file upload, processing, and distribution with analytics tracking.',
      architecture:
        'Serverless functions for file processing, MySQL for metadata storage, Google Buckets for object storage and distribution. React frontend for user interface. Implemented job queues for async processing and webhook system for status updates.',
      solution:
        'Built RESTful APIs for file upload with multipart support and progress tracking. Implemented image optimization and format conversion pipelines. Created CDN invalidation system for cache management using Google Buckets. Built analytics API for tracking bandwidth usage and request patterns.',
      impact: [
        'Workflow Automation',
        'Faster Content Rollout',
        'Reduced Coordination Overhead',
        'Hands-Free Distribution',
      ],
      github: '#',
      live: '#',
    },
    {
      title: 'Webhooks for Clients',
      techStack: ['Node.js', 'Express.js', 'RabbitMQ', 'Redis', 'RESTful APIs'],
      problem:
        'Need for a reliable way to notify client systems of event updates in real-time with high delivery success rate and protection against endpoint overload.',
      architecture:
        'Queue-based delivery system with exponential backoff and signature verification. RabbitMQ for job queue management and message queuing, Redis for caching and state management. Implemented rate limiting and auto-pause safeguards to protect client endpoints.',
      solution:
        'Built a queue-backed webhook delivery system processing 100K+ daily events with integrations to WebEngage, MoEngage, and CleverTap. Implemented exponential retry mechanism for failed deliveries, rate limiting to prevent endpoint overload, and auto-pause safeguards. Achieved high delivery reliability while protecting client endpoints from overload through intelligent retry logic and signature verification for security.',
      impact: [
        '1M+ Daily Webhooks',
        '99.99% Delivery Success',
        '100K+ Events Processed',
        'Highly Scalable System',
      ],
      github: '#',
      live: '#',
    },
    {
      title: 'Customer Churn Prediction System',
      techStack: ['Node.js', 'Google Cloud ML', 'BigQuery', 'RESTful APIs'],
      problem:
        'Sales teams were losing customers without prior warning signs, leading to unexpected revenue loss and missed opportunities for retention.',
      architecture:
        'Data pipeline pulling behavioral data from BigQuery into Google ML models that are directly trained from BigQuery data. Node.js backend integrated with Google Cloud ML models for real-time churn probability scoring. RESTful APIs for delivering insights to sales teams.',
      solution:
        'Integrated Google Cloud ML models with Node.js backend to provide real-time churn probability scores. Built data pipeline that extracts behavioral data from BigQuery and trains Google ML models directly from this data. Models are automatically trained and updated based on BigQuery data, providing accurate predictions. Created RESTful API endpoints that deliver churn insights to sales teams, enabling proactive customer outreach and retention strategies.',
      impact: [
        '15% Churn Reduction',
        'Real-time Predictions',
        'Proactive Outreach',
        'ML-driven Insights',
      ],
      github: '#',
      live: '#',
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="mb-4 text-center overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span 
              className={`inline-block opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up' : ''}`} 
              style={{ animationFillMode: 'forwards' }}
            >
              Featured
            </span>{' '}
            <span 
              className={`text-gradient-animated inline-block opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up-delayed' : ''}`} 
              style={{ animationFillMode: 'forwards' }}
            >
              Projects
            </span>
          </h2>
        </div>
        <div 
          className={`w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-12 opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up-delayed-2' : ''}`} 
          style={{ animationFillMode: 'forwards' }} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

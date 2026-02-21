import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const CaseStudy = () => {
  const [headingRef, isHeadingVisible] = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section
      id="case-study"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface"
    >
      <div className="max-w-4xl mx-auto">
        <div ref={headingRef} className="mb-4 text-center overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span 
              className={`inline-block opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up' : ''}`} 
              style={{ animationFillMode: 'forwards' }}
            >
              Performance
            </span>{' '}
            <span 
              className={`text-gradient-animated inline-block opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up-delayed' : ''}`} 
              style={{ animationFillMode: 'forwards' }}
            >
              Optimization
            </span>
          </h2>
        </div>
        <div 
          className={`w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-12 opacity-0 ${isHeadingVisible ? 'animate-slow-slide-up-delayed-2' : ''}`} 
          style={{ animationFillMode: 'forwards' }} 
        />

        <div className="bg-dark-card rounded-lg border border-dark-border p-8 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
              <span className="w-2 h-2 bg-accent-primary rounded-full mr-3" />
              Problem
            </h3>
            <p className="text-gray-300 leading-relaxed">
              A production <strong className="text-white">RabbitMQ-based Node.js microservice</strong> began crashing intermittently due to sudden memory spikes. Heap usage was increasing from around <strong className="text-white">~350MB to 1.5GB</strong>, eventually causing out-of-memory (OOM) failures and service restarts. This directly affected system stability and delayed downstream processing.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
              <span className="w-2 h-2 bg-accent-primary rounded-full mr-3" />
              Root Cause Analysis
            </h3>
            <p className="text-gray-300 leading-relaxed">
              After analyzing memory usage patterns and message flow, I identified that <strong className="text-white">oversized message payloads containing 500K+ records per message were being processed in a single batch</strong>. The RabbitMQ consumer was attempting to load and handle too much data in memory at once, which led to excessive heap consumption and OOM crashes.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
              <span className="w-2 h-2 bg-accent-primary rounded-full mr-3" />
              Solution
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I re-architected the messaging approach by <strong className="text-white">breaking large payloads into controlled batches of 1K records per message</strong> and applied <code className="bg-dark-bg px-2 py-1 rounded text-accent-primary">channel.prefetch(5)</code> for backpressure control. This reduced peak memory allocation, stabilized heap usage, and eliminated OOM crashes in production.
            </p>
          </div>

          <div className="pt-6 border-t border-dark-border">
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
              <span className="w-2 h-2 bg-accent-primary rounded-full mr-3" />
              Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-dark-bg p-4 rounded-lg border border-dark-border text-center">
                <div className="text-3xl font-bold text-gradient mb-2">~65%</div>
                <div className="text-gray-400 text-sm">Peak Memory Reduction</div>
              </div>
              <div className="bg-dark-bg p-4 rounded-lg border border-dark-border text-center">
                <div className="text-3xl font-bold text-gradient mb-2">2×</div>
                <div className="text-gray-400 text-sm">Higher Traffic Support</div>
              </div>
              <div className="bg-dark-bg p-4 rounded-lg border border-dark-border">
                <div className="text-white font-semibold mb-2">✓ Eliminated recurring production crashes</div>
              </div>
              <div className="bg-dark-bg p-4 rounded-lg border border-dark-border">
                <div className="text-white font-semibold mb-2">✓ Improved service reliability with backpressure control</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy

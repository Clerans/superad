import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';


export function Portfolio() {
  const projects = [
    {
      title: 'Billboard Campaign 2024',
      category: 'Outdoor Advertising',
      image: 'https://images.unsplash.com/photo-1769578911474-af7aae3f84e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYmlsbGJvYXJkJTIwbWFya2V0aW5nfGVufDF8fHx8MTc2OTY3MjAyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Strategic outdoor campaign reaching 2M+ impressions',
    },
    {
      title: 'Promotional Booth',
      category: 'Event Marketing',
      image: 'https://images.unsplash.com/photo-1761195689615-9469b65dac01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9tb3Rpb25hbCUyMGV2ZW50JTIwYm9vdGh8ZW58MXx8fHwxNzY5NjcyMDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Interactive booth generating 5000+ leads in 3 days',
    },
    {
      title: 'Creative Campaign',
      category: 'Digital Integration',
      image: 'https://images.unsplash.com/photo-1542744174-a35e40ade835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG1hcmtldGluZyUyMGNhbXBhaWdufGVufDF8fHx8MTc2OTU5Njc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Multi-channel campaign achieving 150% ROI',
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 border-t-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border-2 border-primary">
            <span className="text-primary font-semibold">Our Work</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-secondary">
            Success Stories &{' '}
            <span className="text-primary">Campaign Highlights</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Explore our portfolio of successful campaigns that have helped brands connect with their audiences and achieve remarkable results.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border-4 border-accent hover:shadow-2xl hover:border-primary transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}

              </div>

              {/* Content */}
              <div className="p-6 bg-gradient-to-br from-white to-accent/5 text-center">
                <div className="inline-block px-4 py-1.5 bg-secondary text-accent rounded-full mb-4 border-2 border-accent shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '200+', label: 'Happy Clients' },
            { number: '50+', label: 'Industry Awards' },
            { number: '10M+', label: 'People Reached' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-secondary to-secondary/90 rounded-xl border-4 border-primary shadow-lg">
              <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-white/90">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
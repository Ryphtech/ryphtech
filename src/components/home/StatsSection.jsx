import { motion } from 'framer-motion';
import { Award, Users, Star, CheckCircle } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Award },
    { number: '25+', label: 'Happy Clients', icon: Users },
    { number: '4.9', label: 'Client Rating', icon: Star },
    { number: '24/7', label: 'Support Available', icon: CheckCircle }
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-purple-600 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

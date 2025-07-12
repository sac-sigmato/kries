import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface InternalPageHeaderProps {
  title: string;
  description: string;
  backgroundImageUrl?: string;
  className?: string;
}

const InternalPageHeader: React.FC<InternalPageHeaderProps> = ({
  title,
  description,
  backgroundImageUrl = '/g2.jpeg',
  className = '',
}) => {
  return (
    <section
      className={clsx(
        "relative text-white h-[400px] bg-cover bg-center flex items-center justify-center overflow-hidden",
        className
      )}
      style={{
        backgroundImage: `url('${backgroundImageUrl}')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-orange-500/10 z-0" />

      {/* Animated Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
          className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-sm"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default InternalPageHeader;

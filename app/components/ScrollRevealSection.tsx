'use client';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,       // jemný posun
    scale: 0.98, // jemný zoom pre prirodzený efekt
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 55,   // menšia tuhosť → pomalší efekt
      damping: 18,
      mass: 1.1,
      bounce: 0.12,
      duration: 1.4,   // len pre fallback
    },
  },
};

export default function ScrollRevealSection({ children }: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: '0px 0px -10% 0px',
  });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={revealVariants}
      className="transform-gpu will-change-[opacity,transform]"
    >
      {children}
    </motion.div>
  );
}

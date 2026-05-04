import { Variants } from 'framer-motion';

export const ease = [0.25, 0.46, 0.45, 0.94] as const;

// Page-level fade+slide for route transitions
export const pageVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease } },
};

// Container that staggers children
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

// Individual staggered items (cards, list rows)
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

// Header / title block
export const headerVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

// Back button fade-in from left
export const backButtonVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease } },
};

// Hover/tap states for interactive cards
export const cardHover = {
  scale: 1.015,
  transition: { duration: 0.18, ease },
};

export const cardTap = {
  scale: 0.985,
};

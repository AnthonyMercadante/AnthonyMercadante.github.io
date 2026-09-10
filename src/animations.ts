import { Variants } from 'framer-motion';

export const ease = [0.22, 1, 0.36, 1] as const;
export const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.22 } },
  exit: { opacity: 0, transition: { duration: 0.12 } },
};
export const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035 } },
};
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease } },
};
export const headerVariants = itemVariants;
export const backButtonVariants = itemVariants;
export const cardHover = { y: -3, transition: { duration: 0.2, ease } };
export const cardTap = { scale: 0.985 };

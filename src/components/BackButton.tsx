import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { backButtonVariants } from '../animations';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <motion.button
      onClick={() => navigate(-1)}
      aria-label="Go back"
      className="fixed top-5 left-5 z-20 flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md text-zinc-400 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-colors"
      variants={backButtonVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
    >
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </motion.button>
  );
};

export default BackButton;

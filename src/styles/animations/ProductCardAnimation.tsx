import React from 'react';

import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  productName: string;
}

const ProductCardAnimation = ({ children, productName }: Props) => {
  return (
    <motion.section
      key={productName}
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      }}
    >
      {children}
    </motion.section>
  );
};

export default ProductCardAnimation;

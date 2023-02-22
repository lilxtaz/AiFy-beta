import React from 'react';
import { motion} from "framer-motion/dist/framer-motion";

const Footer = () => {
  return (
    <motion.footer 
    
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    
    style={styles.footer}>
      <p style={styles.text}>
        Copyright &copy; {new Date().getFullYear()} AiFy. All rights reserved.
      </p>
    </motion.footer>
  );
};

const styles = {
  footer: {
    color: '#fff',
    padding: '2rem',
    textAlign: 'center',
  },
  text: {
    margin: 0,
  },
};

export default Footer;
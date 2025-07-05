import { motion } from "motion/react";
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="container mx-auto justify-center bg-background flex items-center text-sm text-text/50"
    >
      <span className="py-2">
        Developed by
        <a
          href="https://github.com/Devucef"
          className="text-accent hover:underline ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          devucef
        </a>
      </span>
    </motion.footer>
  );
};


export default Footer;

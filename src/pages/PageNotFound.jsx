import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-[#f3f5f8]">
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-center px-4"
      >
        <motion.h1
          className="text-gray-800 text-2xl md:text-3xl font-semibold mb-1"
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-gray-500 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.3 }}
        >
          Page Not Found
        </motion.p>
      </motion.div>
    </div>
  );
}

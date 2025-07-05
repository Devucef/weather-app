import Modal from "./modal";
import { AnimatePresence, motion } from "motion/react";
import { useSelector } from "react-redux";

export default function ModalContainer() {

  const isOpen = useSelector(({ modal }) => modal.isOpen);
  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full backdrop-blur-2xl z-50 flex items-center justify-center"
          >
            <Modal />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

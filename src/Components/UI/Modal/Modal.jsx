import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../App/Features/Slices/ModalSlice";
import { motion } from "motion/react";

export default function Modal() {
  const dispatch = useDispatch();
  const { modalContent } = useSelector(({ modal }) => modal);
  const { title, message, type } = modalContent || {};
  const TypeColor = {
    error_text: "text-red-600",
    success_text: "text-green-600",
    info_text: "text-blue-600",
  };
  const TypeIcons = {
    error: <i className="ri-close-circle-line text-red-500 text-3xl" />,
    warning: <i className="ri-error-warning-line text-yellow-500 text-3xl" />,
    success: <i className="ri-checkbox-circle-line text-green-500 text-3xl" />,
    info: <i className="ri-information-line text-blue-500 text-3xl" />,
  };
  const ModalContent = () => {
    const textClass = TypeColor[`${type}_text`] || "text-text";
    const icon = TypeIcons[type] || TypeIcons.info;

    return (
      <div className="flex flex-col items-center justify-center text-center p-6 md:p-8 max-w-md w-full">
        <div className="mb-4 animate-pulse">{icon}</div>

        <h2 className={`text-xl md:text-2xl font-bold ${textClass} mb-2`}>
          {title}
        </h2>

        <p className={`text-base md:text-lg font-medium ${textClass}`}>
          {message}
        </p>
      </div>
    );
  };
  return (
    <>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4  }}
          className="w-full py-16  relative md:w-lg md:aspect-video bg-background rounded-lg z-50 p-4"
        >
          <button
            onClick={() => dispatch(closeModal())}
            className="absolute top-4 right-4"
          >
            <i className="ri-close-line text-2xl text-text hover:text-red-600 transition-colors absolute top-4 right-4 cursor-pointer"></i>
          </button>
          <div className="flex flex-col items-center justify-center h-full">
            <ModalContent />
          </div>
        </motion.div>
    </>
  );
}

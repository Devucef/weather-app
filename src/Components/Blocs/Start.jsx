import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { getCurrentPosition } from "../../hooks/useCurrentPostion";
import { useDispatch } from "react-redux";
import { openModal } from "../../app/features/slices/ModalSlice";
import Search from "../common/Search";
import { setCoords } from "../../app/features/slices/WeekInfoSlice";

export default function Start() {
  const [isStart, setIsStart] = useState(true);
  const [buttonLoding, setButtonLoding] = useState(false);
  const dispatch = useDispatch();
  const getPosition = async () => {
    try {
      setButtonLoding(true);
      const location = await getCurrentPosition();
      dispatch(
        setCoords({
          lat: location.latitude,
          lon: location.longitude,
        })
      );
      setIsStart(false);
    } catch (error) {
      console.error("Could not fetch location:", error);
      setButtonLoding(false);
      dispatch(
        openModal({
          modalContent: {
            title: "Location Error",
            message: "Oops! Location failed. Try again.",
            type: "error",
          },
        })
      );
    }
  };
  const handleClose = () => {
    setIsStart(false);
    document.body.style.overflow = "auto";
  };
  const SelectCity = () => {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-full">
          <div>
            <h1 className="text-2xl md:text-3xl text-center font-bold mb-6 relative text-text">
              Welcome to <span className="text-primary ">ClimoScope</span>
              <p className="bg-gradient-to-r from-text  to-primary clip-text absolute -top-4 inset-0  text-center text-xs tracking-[2px] md:tracking-[4px]  text-nowrap italic">
                A weather app to keep you updated
              </p>
            </h1>
          </div>
          <p className="text-text/70 text-sm md:text-base">
            Please select your city to get started
          </p>
          <div className="relative w-[95%] rounded-xl">
            <Search
              onSuccess={() => {
                handleClose();
              }}
            />
          </div>
          <hr className="w-full p-[1px] mt-8 bg-card border-none" />
          <p className="text-text/70 mt-4 text-xs">Or</p>
          <button
            onClick={getPosition}
            className="px-4 cursor-pointer py-1 mt-2 bg-accent rounded-full text-white hover:bg-accent/80 transition-colors flex items-center"
          >
            <i className="ri-map-pin-line"></i>
            <span className="ml-2">
              {buttonLoding ? (
                <>
                  <span className="flex items-center gap-x-2">
                    <p>loading</p>
                    <i className="content-center text-center ri-loader-line animate-spin block" />
                  </span>
                </>
              ) : (
                "Use Current Location"
              )}
            </span>
          </button>
        </div>
      </>
    );
  };

  useEffect(() => {
    if (isStart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isStart]);

  return (
    <>
      <AnimatePresence>
        {isStart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-screen justify-center flex items-center backdrop-blur-xl z-20"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 50,
              }}
              transition={{ duration: 0.4 }}
              className="w-lg bg-background rounded-2xl shadow-xl md:aspect-video"
            >
              <div className="flex w-full flex-col items-center justify-center h-full p-8">
                <SelectCity />
              </div>
            </motion.div>
            <DevFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const DevFooter = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute self-start pt-2 md:bottom-4 right-4 flex items-center text-xs text-text/50"
    >
      <span className="">
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

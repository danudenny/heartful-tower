import Image from "next/image";
import { AiFillRightCircle, AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <motion.div
            className="fixed inset-0 bg-black opacity-70"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
          ></motion.div>
          <motion.div
            className="relative p-2 bg-white z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <AiOutlineClose
              className="absolute top-4 right-4 text-dark text-2xl cursor-pointer bg-white rounded-full p-1"
              onClick={onClose}
            />
            <Image
              src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167096/heartful/bird-eye-stand-3_ap8pzl.png"
              alt="modal-popup"
              width={600}
              height={600}
              sizes={"100vw"}
              priority={true}
            />
            <button
              onClick={onClose}
              className="absolute flex items-center justify-center bottom-8 mx-auto bg-dark text-white rounded-full px-4 py-2 text-xl font-bold tracking-widest hover:bg-white hover:text-dark transition-colors duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer w-2/3 h-8 sm:h-10 uppercase"
            >
              Get Information
              <AiFillRightCircle className="ml-2" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

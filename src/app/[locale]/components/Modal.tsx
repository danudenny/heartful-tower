import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { CldImage } from "next-cloudinary";

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
            className="fixed inset-0 bg-black opacity-70 pointer-events-none"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
          ></motion.div>
          <motion.div
            className="relative p-2 bg-white z-50 "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <AiOutlineClose
              className="absolute top-4 right-4 text-dark text-2xl cursor-pointer bg-white rounded-full p-1"
              onClick={onClose}
            />
            <CldImage
              src="v1697440886/Heartfultower-Billboard_ximt0n.jpg"
              alt="modal-popup"
              width={300}
              height={600}
              priority={true}
              quality={80}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

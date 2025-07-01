import React from 'react';
import Toast from './Toast';
import { motion } from 'motion/react';

const CopyEmailButton = () => {
  const [copied, setCopied] = React.useState(false);

  const email = "towfiqtomalgg@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <motion.button
        onClick={copyToClipboard}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 1.05 }}
        className="relative px-2 py-4 text-sm text-center font-extralight rounded-full bg-primary w-[9rem] cursor-pointer overflow-hidden text-wrap"
      >
        <p className="flex items-center justify-center gap-2 cover">
          <img src="assets/copy.svg" className="w-5 h-5" alt="email icon" />
          Copy Email Address
        </p>
      </motion.button>
      <Toast message="Email copied to clipboard!" show={copied} />
    </>
  );
};

export default CopyEmailButton;

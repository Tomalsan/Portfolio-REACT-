import {motion} from 'motion/react';
const Card = ({ text, style, image, containerRef, onClick }) => {
  return image && !text ? (
    <motion.img
      className='absolute w-15 cursor-grab'
      src={image}
      style={style}
      whileHover={{ scale: 1.10 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className='absolute px-1 py-4 text-xl text-center rounded-full ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab'
      style={style}
      whileHover={{ scale: 1.10 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      onClick={onClick}
      tabIndex={0} // for accessibility
      role="button"
    >
      {text}
    </motion.div>
  );
};

export default Card;
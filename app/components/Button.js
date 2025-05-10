import React, { useState } from 'react';
import { FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Button = ({ name }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            className={`mt-4 flex items-center px-3 p-1.5 rounded-full text-xs font-bold text-white flex items-center transition duration-300 ease-in-out cursor-pointer
        ${hovered ? 'bg-[#114f9a]' : 'bg-[#3b61d1]'}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span className="mr-2">{name}</span>
            <motion.span
                className="text-lg"
                transition={{ duration: 0.3 }} // Adjust the duration for the transition
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: hovered ? 1 : 0.6, x: hovered ? 2 : 0 }} // Animate opacity and movement
            >
                {hovered ? <FaArrowRight className='h-3 w-3' /> : <FaChevronRight className='h-3 w-3' />}
            </motion.span>
        </button>
    );
};

export default Button;

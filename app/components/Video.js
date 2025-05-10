import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const Video = ({ url }) => {
    return (
        <motion.video
            key={1}
            src={url}
            autoPlay
            loop
            muted
            playsInline
            className="h-80 lg:h-96 object-cover  rounded-xl sm:block lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        />
    )
}

export default Video

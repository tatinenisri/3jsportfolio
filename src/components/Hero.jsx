import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { wavingRotateEffect } from "../utils/animations";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
  <div
    className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
  >
    {/* Dot + Animated Gradient Stick (In Sync) */}
    <div className="flex flex-col justify-center items-center mt-5">
      {/* Head (Dot) */}
      <div className="animated-gradient-head"></div>
      {/* Stick */}
      <div className="sm:h-80 h-40 animated-gradient-stick"></div>
    </div>

    {/* Hero Text */}
    <div>
      <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm{" "} 
        <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
          Sri <span className="hidden sm:inline">Tatineni</span>
        </span>
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        I develop enterprise web applications, user <br className='sm:block hidden' />
        interfaces and product development
      </p>
    </div>
  </div>

       {/* Apply Smooth Waving Rotation to ComputersCanvas */}
      <motion.div
        variants={wavingRotateEffect(0.3, 2)} // Adjust delay & duration
        initial="hidden"
        animate="show"
        className="relative w-full h-full flex justify-center items-center"
      >
        <ComputersCanvas />
      </motion.div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      
    </section>
  );
};

export default Hero;

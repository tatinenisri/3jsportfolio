export const wavingRotateEffect = (delay, duration) => {
    return {
      
      show: {
        rotateY: [0, -20, 20, -15, 15, -10, 10, 0], // Smooth rotation left & right
        opacity: 1,
        transition: {
          delay: delay,
          duration: duration,
          ease: "easeInOut",
          repeat: 0, 
          repeatType: "reverse", // Reverses direction each time
          times: [0, 0.2, 0.4, 0.7, 0.85,  1], // Timing for natural movement
        },
      },
    };
  };
  
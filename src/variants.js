export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5, // This is the long delay (2 seconds)
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-background-light bg-opacity-100 overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="ellipse-container absolute w-[clamp(7rem,30vw,25rem)] h-[clamp(12rem,40vw,35rem)] top-[10%] left-[5%] animate-random-move-1">
          <div className="ellipse bg-accent1-quaternary opacity-70 blur-2xl w-full h-full rounded-full rotate-[120deg]"></div>
        </div>
        <div className="ellipse-container absolute w-[clamp(7rem,30vw,25rem)] h-[clamp(12rem,40vw,35rem)] top-[10%] right-[5%] animate-random-move-2">
          <div className="ellipse bg-system-successful opacity-25 blur-3xl w-full h-full rounded-full rotate-[-140deg]"></div>
        </div>
        <div className="ellipse-container absolute w-[clamp(7rem,30vw,25rem)] h-[clamp(12rem,40vw,35rem)] bottom-[10%] left-[5%] animate-random-move-3">
          <div className="ellipse bg-system-successful opacity-25 blur-3xl w-full h-full rounded-full rotate-[-130deg]"></div>
        </div>
        <div className="ellipse-container absolute w-[clamp(7rem,30vw,25rem)] h-[clamp(12rem,40vw,35rem)] bottom-[10%] right-[5%] animate-random-move-4">
          <div className="ellipse bg-accent1-quaternary opacity-70 blur-2xl w-full h-full rounded-full rotate-[100deg]"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;

import { StyledButton,MainButton } from "../components/button";

export default function Home() {
  return (
    <>
    
    <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-1/2 pl-8 md:pl-16 relative z-20 space-y-5">
        <StyledButton/>
        <p className="text-4xl text-left md:text-7xl font-bold bg-clip-text  bg-gradient-to-b dark:text-white">
          Visualize Your<br />
          Component Before<br />
          Setting up...
        </p>
        <p className="text-sm sm:text-xl mt-5  text-zinc-500 dark:text-zinc-300 antialiased max-w-2xl">Render your favourite component before setting up on the actual page </p>
        <MainButton/>
      </div>
    </div>
    </>
    
  );
}


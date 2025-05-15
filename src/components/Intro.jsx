// import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Saily
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Jadhav
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I engineer sophisticated web applications with React and Angular,
            blending modern architecture with a thoughtful design. Driven by a
            passion for intuitive UX and scalable front-end systems, I deliver
            elegant, high-performance interfaces that elevate digital
            experiences.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>

          {/* <Link
            to="projects"
            smooth={true}
            duration={1200} // duration in milliseconds
            offset={-80} // adjust if you have a fixed navbar
            className="cosmic-button cursor-pointer"
          >
            View My Work
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Intro;

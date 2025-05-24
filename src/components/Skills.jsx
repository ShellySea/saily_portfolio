import { skillsImage } from "../skillsUtils/skillsImage";
import { skillsData } from "../skillsUtils/skills";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div
        id="skills"
        className="relative z-10 border-t my-12 lg:my-24 border-[#25213b]"
      >
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-3/4 relative">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
            <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent blur-sm opacity-60" />
          </div>
        </div>

        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Skills
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="w-full my-12">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div
                key={id}
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.25)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] bg-card"
              >
                <div className="h-full w-full rounded-lg border border-border bg-card transition-all duration-500 group-hover:border-violet-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6 bg-card text-foreground">
                    <div className="h-8 sm:h-10">
                      <img
                        src={skillsImage(skill)}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                    <p className="text-foreground text-sm sm:text-lg">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;

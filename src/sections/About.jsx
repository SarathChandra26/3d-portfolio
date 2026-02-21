import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";
import { bentoSocialLinks } from "../constants";


const About = () => {
  return (
    <section id="about" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />

      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="About Me"
          number="01"
          text="AI Automation Engineer & Builder"
        />

        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            {/* Profile Card */}
            <div className="md:col-span-5 col-span-15 row-span-9">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div>
                  <img
                    src="/images/flower.svg"
                    alt="flower"
                    className="md:w-32 w-16 flower"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-blue-50 md:text-5xl text-3xl">
                    Sarath Chandra
                  </h1>
                  <p className="md:text-2xl mt-2">
                    I am a Computer Science undergraduate specializing in full-stack web development, with a strong focus on backend system design, API integration, and building structured, maintainable applications using Python. I have experience developing end-to-end web applications and workflow automation systems, with an emphasis on clarity, reliability, and long-term maintainability.

I am comfortable working in English-speaking technical environments and am actively learning the Japanese language and professional culture, with the goal of building a long-term engineering career in Japan within a global SaaS organization.
                  </p>
                  
                </div>
              </div>
            </div>

            

            

            {/* Skill Card 1 */}
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    AI Automation & Agents
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Designing intelligent AI agents that automate emails,
                    documents, workflows, and repetitive tasks using free and
                    scalable tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Skill Card 2 */}
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    Full Stack & Intelligent Systems
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Developing end-to-end applications by combining frontend
              interfaces, backend services, and intelligent logic, with an
              emphasis on clean architecture, scalability, and long-term
              maintainability
                  </p>

                </div>
              </div>
            </div>

            {/* Motivation Block */}
            <div className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    AUTOMATE SMART!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    THINK IN SYSTEMS!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    BUILD WITH AI!
                  </h1>
                </div>
              </div>
            </div>

          {/* Social Links */}
{bentoSocialLinks.map((item, index) => (
  <a
    key={index}
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    className="md:col-span-4 col-span-12 row-span-2"
  >
    <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer hover:scale-[1.03] transition-all duration-300">

      <div className="flex justify-between items-center h-full">

        <div className="flex items-center md:gap-5">
          <img src={item.icon} alt={item.name} />

          <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">
            {item.name}
          </h1>
        </div>

        <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
          <img
            src="/images/arrowupright.svg"
            alt="arrow-up"
            className="md:scale-100 scale-50"
          />
        </div>

      </div>

    </div>
  </a>
))}
              </div>
            
          </div>
        </div>
      
    </section>
  );
};

export default About;

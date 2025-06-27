import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader, CTA } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { ComputerRoom, Sky } from "../models";
import { experiences, skills, projects, personalInfo } from "../constants";
import { arrow } from "../assets/icons";

import "react-vertical-timeline-component/style.min.css";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustComputerRoomForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [0, -2, -2];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -2, -2];
    }

    return [screenScale, screenPosition];
  };

  const [computerRoomScale, computerRoomPosition] =
    adjustComputerRoomForScreenSize();

  return (
    <div className="w-full" style={{ background: "black" }}>
      {/* Hero Section with 3D */}
      <section className="w-full h-screen relative">
        <div className="absolute top-20 sm:top-28 left-0 right-0 z-10 flex items-center justify-center px-4">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>

        <Canvas
          className={`w-full h-screen ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000, position: [0, 0, 5], fov: 75 }}
          style={{
            background: "black",
          }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight
              position={[5, 5, 5]}
              intensity={1.5}
              color="#ffffff"
            />
            <directionalLight
              position={[-5, 5, -5]}
              intensity={0.8}
              color="#4a90e2"
            />
            <ambientLight intensity={0.3} color="#1a1a1a" />
            <pointLight position={[0, 5, 0]} intensity={1.2} color="#00c6ff" />
            <pointLight position={[5, 0, 5]} intensity={0.8} color="#ff6b6b" />
            <spotLight
              position={[0, 10, 0]}
              angle={0.3}
              penumbra={1}
              intensity={1.5}
              color="#ffffff"
              castShadow
            />
            <hemisphereLight
              skyColor="#000000"
              groundColor="#000000"
              intensity={0.1}
            />

            <ComputerRoom
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={[1.7, 1.7, 1.7]}
            />
          </Suspense>
        </Canvas>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-container py-10 sm:py-20"
        style={{ minWidth: "100%" }}
      >
        <div className="text-center mb-10 sm:mb-16 px-4">
          <h1 className="head-text text-white">Code. Create. Innovate 🤖</h1>

          <div className="mt-5 flex flex-col gap-3 text-gray-300 max-w-2xl mx-auto">
            <p className="text-base sm:text-lg">
              {personalInfo.title} based in {personalInfo.location}
            </p>
            <p className="text-xs sm:text-sm">
              {personalInfo.phone} • {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-10 sm:mb-16 px-4">
          <h3 className="subhead-text text-center mb-6 sm:mb-8 text-white">
            Education
          </h3>
          <div
            className="rounded-xl p-6 sm:p-8 max-w-2xl mx-auto"
            style={{
              background: "linear-gradient(to right, #111111, #1a1a1a)",
            }}
          >
            <div className="text-center">
              <h4 className="text-lg sm:text-xl font-semibold text-white">
                {personalInfo.education.degree}
              </h4>
              <p className="text-base sm:text-lg text-gray-300 mt-2">
                {personalInfo.education.university}
              </p>
              <p className="text-sm sm:text-base text-gray-400 mt-1">
                {personalInfo.education.location}
              </p>
              <p className="text-sm sm:text-base text-gray-400">{personalInfo.education.duration}</p>
              <p className="text-sm sm:text-base text-gray-400">GPA: {personalInfo.education.gpa}</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="py-8 sm:py-10 flex flex-col px-4">
          <h3 className="subhead-text text-center mb-6 sm:mb-8 text-white">
            My Skills
          </h3>

          <div className="mt-10 sm:mt-16 flex flex-wrap gap-8 sm:gap-12 justify-center">
            {skills.map((skill) => (
              <div className="block-container w-16 h-16 sm:w-20 sm:h-20" key={skill.name}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section
        id="experience"
        className="max-container py-10 sm:py-20"
        style={{
          background: "black",
          minWidth: "100%",
        }}
      >
        <div className="text-center mb-10 sm:mb-16 px-4">
          <h3 className="subhead-text text-white">Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-gray-300 max-w-2xl mx-auto">
            <p className="text-sm sm:text-base">
              I've worked with innovative companies, leveling up my skills and
              teaming up with smart people. Here's my journey:
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 flex px-4">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div
                    className="flex justify-center items-center w-full h-full rounded-full overflow-hidden"
                    style={{ backgroundColor: "currentColor" }}
                  >
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "white",
                }}
              >
                <div>
                  <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-gray-300 font-medium text-sm sm:text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                  <p className="text-gray-400 font-medium text-xs sm:text-sm mt-1">
                    {experience.location}
                  </p>
                </div>

                <ul className="my-4 sm:my-5 list-disc ml-4 sm:ml-5 space-y-1 sm:space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-gray-400 font-normal pl-1 text-xs sm:text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="max-container py-10 sm:py-20"
        style={{
          background: "black",
          minWidth: "100%",
        }}
      >
        <div className="text-center mb-10 sm:mb-16 px-4">
          <h1 className="head-text text-white" style={{ marginBottom: "30px" }}>
            Highlights
          </h1>

          <p className="text-gray-300 mt-2 leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
            With 2 years of experience, I've developed strong full-stack
            expertise—delivering scalable, high-performance web applications by
            combining intuitive, responsive frontends with secure, efficient
            backend systems. I focus on end-to-end ownership, rapid feature
            delivery, and seamless integration of innovative technologies.
          </p>
        </div>

        <div className="flex flex-wrap my-12 sm:my-20 gap-8 sm:gap-16 justify-center px-4">
          {projects.map((project, index) => (
            <div
              className="w-full sm:w-[400px] p-4 sm:p-5 rounded-xl"
              key={project.name}
              style={{
                background: "linear-gradient(to right, #111111, #1a1a1a)",
              }}
            >
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  {project.iconUrl ? (
                    <img
                      src={project.iconUrl}
                      alt={project.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  ) : (
                    <div className="w-1/2 h-1/2 bg-gradient-to-br from-purple-600 to-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                      {project.customIcon}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 sm:mt-5 flex flex-col">
                <h4 className="text-xl sm:text-2xl font-poppins font-semibold text-white">
                  {project.name}
                </h4>
                <p className="mt-2 text-gray-300 text-sm sm:text-base">{project.description}</p>

                {/* Technologies used */}
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 text-white text-xs rounded-full"
                      style={{
                        background:
                          "linear-gradient(to right, #111111, #1a1a1a)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 sm:mt-5 flex items-center gap-2 font-poppins">
                  {index === 0 && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-white hover:text-blue-300 transition-colors text-sm sm:text-base"
                    >
                      View Details
                    </a>
                  )}
                  {index === 0 && (
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-gray-700" />

        <CTA />
      </section>
    </div>
  );
};

export default Home;

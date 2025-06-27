import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl text-lg sm:leading-snug leading-tight text-center neo-brutalism-blue py-4 px-4 sm:px-8 text-white mx-2 sm:mx-5 max-w-sm sm:max-w-none">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Aditya Bhadauria</span>
        👋
        <br />
        A Software Engineer from India 🇮🇳
        <br />
        <span className="flex items-center justify-center gap-2 mt-2">
          <span className="animate-bounce text-white">
            (swipe⬆️ to see more)
          </span>
        </span>
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box mx-2 sm:mx-5">
        <p className="font-medium sm:text-xl text-base text-center">
          Worked with many companies <br /> and picked up many skills along the
          way
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box mx-2 sm:mx-5">
        <p className="font-medium text-center sm:text-xl text-base">
          Led multiple projects to success over the years. <br /> Curious about
          the impact?
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box mx-2 sm:mx-5">
        <p className="font-medium sm:text-xl text-base text-center">
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;

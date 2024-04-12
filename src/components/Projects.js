import React from "react";
import FoodExpress from "../assets/projects/FoodExpress.jpg";
import YouTube from "../assets/projects/YouTube.jpeg";
import NetFlix from "../assets/projects/NetFlix.jpg";
import HappyBirthday from "../assets/projects/HappyBirthday.jpg";
import PigGame from "../assets/projects/PigGame.jpg";
import ReactQuiz from "../assets/projects/ReactQuiz.jpg";
import CardImg from "../assets/projects/CardImg.jpg";
import WeatherImg from "../assets/projects/WeatherImg.jpeg";
import RetroGuessNumber from "../assets/projects/RetroGuessNumber.png";
import RatingImg from "../assets/projects/RatingImg.jpg";
import Portfolio from "../assets/projects/PortFolioImg.jpg";
import PingImg from "../assets/projects/PingImg.png";
import PasswordChecker from "../assets/projects/PasswordImg.jpeg";
import Notify from "../assets/projects/NotificationImg.jpg";
import NewsGrid from "../assets/projects/NewsImg.jpg";
import FormValidation from "../assets/projects/FormValidatorImg.png";
import FAQ from "../assets/projects/FAQImg.jpg";
import AdviceGenerator from "../assets/projects/AdviceGeneratorImg.jpg";

const Projects = () => {
  return (
    <div name="projects" className="w-full h-full  text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6 font-semibold">Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 ">
          <div
            style={{ backgroundImage: `url(${FoodExpress})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                FOOD EXPRESS 🍟
              </span>
              <div className="pt-8 text-center">
                <a href="https://food-express-tau.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Vishwanathanselvamoorthy/FOOD-EXPRESS">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${YouTube})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                YOUTUBE 🎦
              </span>
              <div className="pt-8 text-center">
                <a href="https://youtube-omega-tan.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Vishwanathanselvamoorthy/youtube">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${NetFlix})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                NETFLIX 🍿
              </span>
              <div className="pt-8 text-center">
                <a href="https://netflix-gpt-24.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Vishwanathanselvamoorthy/NETFLIX-GPT24">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${HappyBirthday})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                AGE CALCULATOR 🧓🏼
              </span>
              <div className="pt-8 text-center">
                <a href="https://age-calculator-app-main-lime.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Vishwanathanselvamoorthy/age-calculator-app-main">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${PigGame})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                PIG GAME 🎲
              </span>
              <div className="pt-8 text-center">
                <a href="https://pig-game-steel.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Vishwanathanselvamoorthy/Pig-Game">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ReactQuiz})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                REACT QUIZ 🧠
              </span>
              <div className="pt-8 text-center">
                <a href="https://quizapp-seven-ochre.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Vishwanathanselvamoorthy/quizapp">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${FormValidation})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                FORM VALIDATOR ✔️
              </span>
              <div className="pt-8 text-center">
                <a href="https://intro-component-with-signup-form-master-tawny.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Vishwanathanselvamoorthy/intro-component-with-signup-form-master">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${CardImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                CARDIFY 🪪
              </span>
              <div className="pt-8 text-center">
                <a href="https://interactive-card-details-form-main-wheat.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Vishwanathanselvamoorthy/interactive-card-details-form-main">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${PasswordChecker})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                SECURE-PASS 🔒
              </span>
              <div className="pt-8 text-center">
                <a href="https://display-password-strength.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                {/* <a href="https://github.com/Vishwanathanselvamoorthy/interactive-card-details-form-main">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WeatherImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                WEATHER NOW 🌦️
              </span>
              <div className="pt-8 text-center">
                <a href="https://weather-app-liart-five.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                {/* <a href="https://github.com/Vishwanathanselvamoorthy/interactive-card-details-form-main">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${FAQ})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                📚 FAQ ACCORDION
              </span>
              <div className="pt-8 text-center">
                <a href="https://faq-accordion-main-green.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Vishwanathanselvamoorthy/faq-accordion-main">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${AdviceGenerator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                ADVICE GENERATOR 💬
              </span>
              <div className="pt-8 text-center">
                <a href="https://advice-generator-app-main-six-eta.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Vishwanathanselvamoorthy/advice-generator-app-main">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${RatingImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                RATE MY SUPPORT 🌟
              </span>
              <div className="pt-8 text-center">
                <a href="https://interactive-rating-component-main-gilt-eight.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Vishwanathanselvamoorthy/interactive-rating-component-main">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${NewsGrid})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                NEWS GRID 📰🔲
              </span>
              <div className="pt-8 text-center">
                <a href="https://news-homepage-main-eosin.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Vishwanathanselvamoorthy/news-homepage-main">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Notify})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                NOTIFY ME 🔔
              </span>
              <div className="pt-8 text-center">
                <a href="https://notifications-page-main-sandy.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Vishwanathanselvamoorthy/notifications-page-main">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${PingImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                PING-STAY NOTIFIED 📧🚀
              </span>
              <div className="pt-8 text-center">
                <a href="https://ping-coming-soon-page-master-eta.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Vishwanathanselvamoorthy/ping-coming-soon-page-master/tree/main">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                MY PORTFOLIO 👤
              </span>
              <div className="pt-8 text-center">
                <a href="https://my-portfolio-seven-ashy-40.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Vishwanathanselvamoorthy/My-Portfolio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${RetroGuessNumber})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto  bg-red-600 content-div"
          >
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-widest">
                RETRO NUMBER GUESSER! 🎮
              </span>
              <div className="pt-8 text-center">
                <a href="https://guess-the-number-taupe-eight.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Vishwanathanselvamoorthy/Guess-The-Number">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

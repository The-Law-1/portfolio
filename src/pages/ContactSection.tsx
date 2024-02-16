import LinkedInSVG from "@/assets/linkedin-white.svg";
import useOnScreen from "@/scripts/useOnScreen";
import { useRef } from "react";

export default function ContactSection() {

  // add class animate-text-slide to the UL when it comes into view

  const animatedList = useRef<HTMLUListElement>(null);

  const isVisible = useOnScreen(animatedList);

  return (
    <div className=" h-screen">
      <div className=" text-center text-white py-20 ">
        {/* https://cruip.com/creating-a-sliding-text-animation-with-tailwind-css/ */}
        <div className="font-extrabold text-center text-xl md:text-4xl bg-clip-text ">
          Let's &nbsp;
            <span className="text-indigo-400 inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul ref={animatedList} className={`block text-left leading-tight [&_li]:block ${isVisible ? 'animate-text-slide' : ''}`}>
                  <li>get in touch!</li>
                  <li>make something awesome!</li>
                  <li>talk about tech news! 🤓</li>
                  <li>expand our network!</li>
                  <li>debate on web frameworks!</li>
                  <li aria-hidden="true">get in touch!</li>
              </ul>
            </span>
        </div>
      </div>

      <div className=" flex justify-center space-x-4 mt-20">
        {/* linkedin button */}
        <a href="https://www.linkedin.com/in/gabriel-griffin-9978471a3/" target="_blank" rel="noreferrer">
          <button className="bg-indigo-400 hover:bg-indigo-500 text-white font-bold p-2 rounded md:text-2xl">
            Connect with me! <img src={LinkedInSVG} alt="linkedin" className="inline w-6"/>
          </button>
        </a>
        {/* mail button */}
        <a href="mailto:gabriel.griffin@epitech.eu">
          <button className="bg-indigo-400 hover:bg-indigo-500 text-white font-bold p-2 rounded md:text-2xl">
            E-mail me! 📧
          </button>
        </a>
      </div>
    </div>
  )
}
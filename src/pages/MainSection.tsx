import GlowButton from "@/components/GlowButton";
import SocialLink from "@/components/SocialLink";
import githubSVG from "@/assets/github.svg";
import linkedinWhite from "@/assets/linkedin-white.svg";

export default function MainSection() {
  return (
    <div className=" flex justify-center w-full  mb-20">
      <div>
        <div className="text-white text-4xl sm:text-5xl md:text-6xl mb-5 leading-normal ">
          Hi!👋<br/>
          I'm Gabriel Griffin<br/>
          A fullstack web developer 🚀
        </div>

        <div className='flex justify-center mb-4'>
          <GlowButton text="About me" href="#about" targetBlank={false}/>
        </div>

        <div className=' grid grid-cols-2 mb-4'>
          <div className=" mx-2 flex justify-end">
            <GlowButton text="I need a dev" href="https://www.linkedin.com/in/gabriel-griffin-9978471a3/" targetBlank={true} />
          </div>
          <div className=" mx-2 flex justify-begin">
            <GlowButton text="I need a website" href="#contact" targetBlank={false}/>
          </div>
        </div>

        <div className=' flex justify-center items-center space-x-2'>
          <SocialLink href="https://github.com/The-Law-1">
            <img src={githubSVG} alt="github" className=" p-2"/>
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/gabriel-griffin-9978471a3/">
            <img src={linkedinWhite} alt="linkedin" className="text-white "/>
          </SocialLink>
        </div>
      </div>
    </div>
  )
}
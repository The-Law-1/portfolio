import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import MainSection from './MainSection';

export default function Index () {

  return (
    <>
      <div className=' bg-eerie-black'>
        {/* intro */}
        <section className=" h-[100vh] flex items-center bg-eerie-black">
          <MainSection />
        </section>

        <div className=' flex justify-center'>
          <div className='w-2/3 h-0.5 rounded-md bg-gray-100'>
          </div>
        </div>

        {/* ABOUT */}
        <section id='about' className="bg-eerie-black">
          <AboutSection />
        </section>
        
        <div className=' flex justify-center'>
          <div className='w-2/3 h-0.5 rounded-md bg-gray-100'>
          </div>
        </div>

        <section id='contact' className="bg-eerie-black">
          <ContactSection />
        </section>
      </div>
    </>
  )
}
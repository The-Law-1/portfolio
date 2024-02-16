export default function GlowButton({text, href, targetBlank = false}: {text: string, href: string, targetBlank?: boolean}) {

  return (
    <div className='relative group w-fit'>
      <div className='absolute -inset-0.5 bg-gradient-to-r blur rounded-lg from-orange-600 to-blue-600 group-hover:opacity-75 opacity-25 transition duration-200 '></div>
        <a href={href} target={targetBlank ? '_blank' : ''} rel='noreferrer'>
          <button className='relative bg-eerie-black sm:text-xl md:text-2xl p-3 rounded-md cursor-pointer transition duration-200 ease-in-out text-center hover:scale-[102%] text-white'>
              {text}
          </button>
        </a>
    </div>
  )
}
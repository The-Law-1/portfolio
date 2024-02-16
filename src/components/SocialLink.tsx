export default function SocialLink({href, children}: {href: string, children: React.ReactNode}) {
  return (
    <div className='relative group'>
      <div className='absolute opacity-0 group-hover:opacity-50 transition-opacity duration-200 bg-gray-600 blur-sm -inset-0.5 rounded-sm '></div>
      <div className={` relative bg-eerie-black border border-gray-500 rounded-lg cursor-pointer transition duration-200 ease-in-out w-12 h-12 flex justify-center items-center
                        hover:scale-[102%]`}>
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      </div>
    </div>
  )
}
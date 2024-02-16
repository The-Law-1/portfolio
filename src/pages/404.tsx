import { Link } from "react-router-dom";

export default function NotFound () {
  return (
    <div className="text-white bg-eerie-black h-screen ">
      <div className="flex flex-col justify-center items-center w-full h-[50vh]">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-2xl font-bold">Page not found</h2>
        <p className="text-xl">There's nothing here!</p>

        <Link to={"/"} className="text-xl font-bold underline">Back to main page</Link>
        {/* <RouterLink to="/" class="text-xl font-bold underline">Volver al inicio</RouterLink> */}
      </div>
    </div>
  )
}
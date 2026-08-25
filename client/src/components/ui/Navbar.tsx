export default function Navbar() {
  return (
    <div className = "w-full flex justify-center ">
      <nav className="w-8/12 h-20 border-2 border-black rounded-2xl backdrop-blur-md  mt-10 flex py-5 px-20 justify-between">
        <h1 className="text-2xl">UpKeep</h1>
        <div className="flex mt-1.5 twxt-xl">
            <h1 className = "ml-10">Features</h1>
            <h1 className = "ml-10">About</h1>
            <h1 className = "ml-10">Signup </h1>
        </div>
      </nav>
    </div>
  )
}

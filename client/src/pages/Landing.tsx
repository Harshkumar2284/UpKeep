import Login from "../components/landing/Login";
import Register from "../components/landing/Register"

export default function Landing() {
  return (
    <div className="w-full flex justify-evenly ">
      <Login />
      <Register />
    </div>
  )
}

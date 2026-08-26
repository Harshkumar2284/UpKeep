import React ,{ useState } from "react"
import axios from 'axios'

axios.defaults.withCredentials = true;

export default function Login() {
    const [mail,setMail] = useState("")
    const [pass,setPass] = useState("")
    const handleMail = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setMail(e.target.value)
    }
    const handlePass = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPass(e.target.value)
    }
    const signIn = async()=>{
        const apiUrl = import.meta.env.VITE_BACKEND
        try {
          const response = await axios.post(`${apiUrl}/api/auth/login`,{
            email:mail,
            password:pass
          })
          console.log(response.data)
        } catch (err:any) {
          console.log(err.response.data.error)
        }
    }
  return (
    <div className="flex flex-col">
      <label htmlFor="email">Email:</label>
      <input className="border border-black" type="text" id="email" value={mail} onChange={handleMail}/>
      <label htmlFor="password">Password:</label>
      <input className="border border-black" type="password" id="password" value={pass} onChange={handlePass}/>
      <button onClick={signIn}>SignIn</button>
    </div>
  )
}

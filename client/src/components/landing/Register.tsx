import React ,{ useState } from "react"
import axios from 'axios'


export default function Login() {
    const [mail,setMail] = useState("")
    const [pass,setPass] = useState("")
    const [tenant,setTenant] = useState("")
    const handleMail = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setMail(e.target.value)
    }
    const handlePass = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPass(e.target.value)
    }
    const handleTenant = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTenant(e.target.value)
    }
    const signIn = async()=>{
        const apiUrl = import.meta.env.VITE_BACKEND
        console.log(apiUrl)
        const response = await axios.post(`${apiUrl}/api/auth/signup`,{
            email: mail,
            password: pass,
            tenantName:tenant
        })
        console.log(response.data)
    }
  return (
    <div className="flex flex-col">
      <label htmlFor="email-register">Email:</label>
      <input className="border border-black" type="text" id="email-register" value={mail} onChange={handleMail}/>
      <label htmlFor="password-register">Password:</label>
      <input className="border border-black" type="password" id="password-register" value={pass} onChange={handlePass}/>
      <label htmlFor="tenant-register">Confirm Password:</label>
      <input className="border border-black" type="text" id="tenant-register" value={tenant} onChange={handleTenant}/>
      <button onClick={signIn}>SignIn</button>
    </div>
  )
}

import  { useState } from "react"
import Button from "../ui/Button"
import { useNavigate } from "react-router-dom"


export default function Sidebar(props:any) {
  const navigate = useNavigate()
  const options = props.options
  const [open,setOpen] = useState(false)
  return (
    <div className=" right-0 block lg:hidden">
      <div className={`${open?"hidden":"block"}`}>
        <Button onClick={()=>setOpen(true)}>
          Open
        </Button>
      </div>
      <div className={` z-10 h-screen bg-[#202021] right-0 top-0 absolute transition-all ${open?"w-32":"hidden w-0"}`}>
        <Button className="mt-4" onClick={()=>setOpen(false)}>&gt;</Button>
        <div className="mt-16">
          {
            options.map((option:any)=>{
              return(
                <Button className="w-full border-t border-b py-5 border-zinc-500 mt-0" variant="primary" key={option.navigate} onClick = {()=>navigate(option.navigate)}>
                  {option.name}
                </Button>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

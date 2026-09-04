import Sidebar from "./Sidebar";
import { useNavigate} from 'react-router-dom'
import Button from "../ui/Button";

export default function Navbar() {
  const navigate = useNavigate()
  const options = [
    {name:"Platform",
      navigate:"/platform"
    },
    {name:"Solution",
      navigate:"/solution"
    },
    {name:"Pricing",
      navigate:"/pricing"
    },
    {name:"Enterprise",
      navigate:"/enterprise"
    }
  ]
  return (
    <nav className="w-full px-4 md:px-16  h-20  flex  justify-between items-center border-b border-zinc-500">
      <div className="flex w-2/4 justify-between">
        <h1 className="text-3xl font-bold">Up<span className="text-red-400">Keep</span></h1>
        <div className="hidden md:block mt-3">
          {options.map((option)=>{
            return(<Button  key={option.name} className="ml-10" onClick={()=>{navigate(option.navigate)}}>
                    {option.name}
                  </Button>)
          })}
        </div>
      </div>
      <div className="text-lg flex">
        
        <Button variant="secondary" className="px-1 text-white ">Login</Button>
        <Sidebar options = {options}/>
      </div>
      
      
    </nav>
  )
}

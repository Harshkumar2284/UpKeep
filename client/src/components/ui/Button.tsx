import type React from "react"
const variants = {
        primary:"text-zinc-300 hover:underline hover:text-blue-500 ",
        secondary:"bg-[#0697E8] border border-black"
    }
interface ButtonProps extends React.ComponentProps<"button">{
  children:React.ReactNode, variant?:keyof typeof variants, className?:string
}


export default function Button({children,variant='primary', className,...props}:ButtonProps) {
    
  return (
    <button className={`${variants[variant]} ${className} hover:cursor-pointer font-semibold`} {...props}>
      {children}
    </button>
  )
}

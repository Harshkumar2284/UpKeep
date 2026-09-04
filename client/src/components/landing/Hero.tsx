import Button from '../ui/Button'
export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center mt-20 md:mt-36 px-1">
        <h1 className="md:text-5xl text-2xl text-center font-semibold text-zinc-200">Enterprise-Grade Multi-Tenant Uptime Monitoring</h1>
        <h2 className="md:text-2xl text-sm text-center text-zinc-400 mt-1 lg:mt-5 w-10/12 font-semibold px-4">Achieve 99.99% uptime <span className='hidden md:block'>with strict data isolation and real-time alerts</span>. Built for modern Saas teams</h2>
        <div className='md:flex mt-10 md:mt-16 w-11/12 md:w-full justify-center'>
            <input placeholder='Enter your website url here' type="text" className="md:w-6/12 w-full text-xl h-10 md:text-2xl px-4 font-semibold rounded-3xl md:rounded-l-4xl md:h-16 text-zinc-600 bg-white" />
            <Button className='md:h-16 h-10 md:w-2/12 w-full rounded-4xl lg:rounded-r-4xl px-5' variant='secondary'>Start Monitoring Now</Button>
        </div>
    </div>
  )
}

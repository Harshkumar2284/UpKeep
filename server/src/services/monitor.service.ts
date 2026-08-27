import Monitor from "../models/monitor.js"

export const addUrl = async(name:string, url:string)=>{
    const check = await Monitor.findOne({url})
    if (check){
        throw new Error("Url has already been added before")
    }
    const newWebsite = await Monitor.create({name,url})
    return {website: newWebsite}
}



// ADD TENANT ID TO THE REQUEST
import {config} from '../config'

const invoke: (path: string) => Promise<any> = async (path:string) => {
    let api_url:string
    api_url = config.NEXT_PUBLIC_API_URL
    if (path !== ""){
        api_url += `/${path}`
    }
    const res = await fetch(api_url,{
        mode:'cors'
    })
    return res.json()
}

export {invoke}
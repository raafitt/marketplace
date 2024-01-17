import { $host, $authHost } from "./index";

export const createType=async(type)=>{
    const response=await $authHost.post('api/type',type)
    return response
}

export const fetchTypes=async()=>{
    const {data}=await $host.get('api/type')
    return data
}

export const fetchBrands=async()=>{
    const {data}=await $host.get('api/brand')
    return data
}

export const createBrand=async(brand)=>{
    const response=await $authHost.post('api/brand',brand)
    return response
}

export const fetchDevices=async()=>{
    const {data}=await $host.get('api/device')
    return data
}


export const fetchPageDevices=async(page)=>{
    const {data}=await $host.get(`api/device?page=${page}`)
    return data
}

export const fetchOneDevice=async(id)=>{
    const {data}=await $host.get('api/device/'+id)
    return data
}

export const createDevice=async(formData)=>{
    const response=await $authHost.post('api/device', formData)
    return response
}
import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


export const recomemdedApi =async()=>{
    return await commonApi('POST',`${serverUrl}/get-featured-properties`,"","")
}

export const ListingApi =async(reqBody)=>{
    console.log(reqBody);
    
    return await commonApi('POST',`${serverUrl}/get-properties`,reqBody,"")
}

export const propertyApi =async(id)=>{
    console.log(id);
    
    return await commonApi('GET',`${serverUrl}/get-property-detail-web/${id}`,"","")
}

export const blogApi =async()=>{
    return await commonApi('GET',`${serverUrl}/get-blogs`,"","")
}


export const CityApi =async()=>{
    return await commonApi('POST',`${serverUrl}/get-our-location-city-properties`,"","")
}

export const AllBlogsApi =async()=>{
    return await commonApi('GET',`${serverUrl}/get-blog-all`,"","")
}

export const BlogDetailsApi =async(id)=>{
    console.log(id);
    
    return await commonApi('GET',`${serverUrl}/get-blog-details/${id}`,"","")
}


// contact us
export const contactApi =async(reqBody)=>{
    console.log(reqBody);
    
    return await commonApi('POST',`${serverUrl}/contact-property`,reqBody,"")
}






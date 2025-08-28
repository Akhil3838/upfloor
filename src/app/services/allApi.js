import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


export const recomemdedApi =async()=>{
    return await commonApi('POST',`${serverUrl}/get-featured-properties`,"","")
}

export const ListingApi =async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/get-properties`,reqBody,"")
}



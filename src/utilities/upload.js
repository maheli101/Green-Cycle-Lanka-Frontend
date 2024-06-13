
import axios from 'axios'

// data yawanna cloud ekata
const upload=async(file)=>{

   

    const data= new FormData();
    data.append("file",file)
    data.append("upload_preset","Green-cycle-lanka-profile")
    data.append("folder","green-cycle-lanka-profile_pictures")

   try{
    const res=await axios.post("https://api.cloudinary.com/v1_1/dlhrutafm/image/upload",data)
    const{url}=res.data
    return url
   }catch(err){
    console.log(err)

   }

}
export default upload;
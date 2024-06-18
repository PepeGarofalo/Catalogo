import  axios  from "axios";
import { LogedUser } from '../../../api/src/saveJwt/saveJWT';
import API_ENDPOINTS from "../config/apiConfig";

export const loadIniciativas =async ()=>{
  const user = new LogedUser()
    try {
      const resultado = await axios.get(API_ENDPOINTS.INICIATIVA,{headers:{
        Authorization :`Bearer ${user._access_token}`
    }});
      return resultado
    } catch (error) {
      console.error(error); 
    }
  }
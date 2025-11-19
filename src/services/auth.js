import axios from "axios"
const BASE_URL = 'http://localhost:3000/auth'
const api = axios.create({
    baseURL: "http:"
})
export const signUp = async (formData)=>{
    const response = await axios.post('http://localhost:/auth/sign-up', formData)
    console.log(response);
}

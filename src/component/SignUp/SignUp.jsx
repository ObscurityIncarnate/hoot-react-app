import { useState } from "react"
import { signUp } from "../../services/auth"
import "./SignUp.css"
const SignUp = ()=>{
    const [formData, setFormData]  = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const handleSubmit =async (e)=>{
        e.preventDefault();
        try {
            const reponse = await signUp(formData)
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }
    const handleChange = (e)=>{
        
        setFormData({...formData,
            [e.target.name]: e.target.value
        });
        
    }

    return(
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default SignUp
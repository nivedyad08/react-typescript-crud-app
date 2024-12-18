import React, { useState } from 'react'
import axios from "../config/axios.d"
import { useNavigate } from 'react-router'

interface RegisterUserType{
    name : string,
    username :string,
    password:string
}

export default function Register() {
    const navigate = useNavigate()
    const [data,setData] = useState<RegisterUserType>({q
        name:"",
        username:"",
        password:""
    })

    const [message,setMessage] = useState<string>()

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) :void=>{
        const id = event.target.id;
        const value = event.target.value

        setData({...data, [id]:value})
    }

    //In TypeScript, the void keyword is used to indicate that a function does not have a return value. 
    const handleFormSubmit = async(event: React.FormEvent<HTMLFormElement>):Promise<void>=>{   
        event.preventDefault();
        if(data.name == "" || data.username == "" || data.password == ""){
            setMessage("Please fill the form")
            return;
        }else{
            try {
                const createUser  =  await axios.post("auth/user/register")
                if(createUser.status === 200){
                    navigate("/login")
                }
            } catch (error) {
                
            }
        }       
    }

  return (
    <>
    <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form onSubmit={handleFormSubmit}>
            <h3>Register Here</h3>

            <label>Name</label>
            <input type="text" placeholder="Name" id="name" value={data.name} onChange={handleInputChange}/>

            <label>Username</label>
            <input type="text" placeholder="Email or Phone" id="username" value={data.username} onChange={handleInputChange}/>

            <label>Password</label>
            <input type="password" placeholder="Password" id="password" value={data.password} onChange={handleInputChange}/>

            <button>Register</button>
            <h5></h5>
            <div className="social">
                <h4>Login</h4>
            </div>
            <div>
                {message ? (
                    <label style={{color:"red", fontSize:"0.7rem"}}>{message}</label>
                ): ''}
            </div>
        </form>
    </>
  )
}


import React, {useState}from 'react'
import UserServices from '../services/UserServices'
import { response } from 'express'
import toast, {Toaster} from 'react-hot-toast';
const Register=()=>{
    const[Firstname, setFirstname]=useState('')
    const[Lastname, setLastname ]=useState('')
    const[Email, setEmail ]=useState('')
    const[Password, setPassword ]=useState('')
    const[bio, setBio ]=useState('')
    const[Birthdate, setBirthdate ]=useState('')
    const[Picture, setPicture ]=useState('')
    
    const register=async (e)=>{
        e.preventDefault();
        console.log("form submited");
        console.log("form Form",Firstname,Lastname,Email,Password,bio,Birthdate);

        const data={
            Firstname:Firstname,
            Lastname:Lastname,
            Email:Email,
            Password:Password,
            bio:bio,
            Birthdate:Birthdate,
            Picture:Picture
        }
        try{
            const response =await UserServices.register(data)
            console.log("response===>", response);
        }catch(err){
            console.log(err)
        }
        
}
return(
    <div className='register'>
        <div className='register-cover'>

        </div>
        <div className='register-content'>

        <div>
            <h1>   Snow Space </h1>
            <p>Snow Space social Media Application </p>
        </div>
        <div>
            <form onSubmit={register}>
                <div className='form-group'>
                    <label>Firstname </label>
                    <input className='input'type="text" 
                    value={Firstname}
                    onChange={(e)=>setFirstname(e.target.value)}/> 
                </div>

                <div className='form-group'>
                    <label>Lastname</label>
                    <input className='input' type="texte"
                     value={Lastname}
                     onChange={(e)=>setLastname(e.target.value)}/>
                    </div>

                    <div  className='form-group'>
                    <label>Email</label>
                    <input className='input' type="email"
                     value={Email}
                     onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div  className='form-group'>
                    <label>Password</label>
                    <input className='input' type="password"
                     value={Password}
                     onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    <div  className='form-group'>
                    <label>bio</label>
                   <textarea
                   value={bio}
                   onChange={(e)=>setBio(e.target.value)}
                   ></textarea>
                    </div>

                    <div  className='form-group'>
                    <label>Picture</label>
                    <input className='input' type="file"/>
                    </div>

                    <div  className='form-group'>
                    <label>Birthdate</label>
                    <input className='input' type="date"
                     value={Birthdate}
                     onChange={(e)=>setBirthdate(e.target.value)}/>
                    </div>

                    <button  className='btn signup' type='submit'> Sign up </button>
            </form>
        </div>
        
    </div>
     </div>
)

}
export default Register;

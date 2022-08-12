import React ,{useState, useEffect} from "react";

import { useHistory} from "react-router-dom";




function Register() { 

     useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('/add');
        }
     },[]);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();
    async function kirish(){
        let item = {name, email, password};
  

        let result =await fetch("http://localhost:8000/api/register", {
         method: "POST",
         body: JSON.stringify(item),
         headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
         }
        })

        result = await result.json();   
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/add")

     }

    return(

    <div className="container">
        <h3 align="center">This is Register</h3>
        <br/>
         <div className="col-lg-6 offset-sm-4">
       <input  type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
         <br/><input  type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
         <br/> <input  type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
         <button onClick={kirish} className="btn btn-primary">Kirish</button>  
         </div>
       
    </div>
);

 }


 export default Register;


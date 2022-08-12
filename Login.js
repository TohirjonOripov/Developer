
import React ,{useState, useEffect} from "react";

import { useHistory} from "react-router-dom";



function Login(){
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('/add');
        }
     },[]);

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

     async function login(){
        console.warn(email,password);
        let item = { email, password};

        let result = await fetch("http://localhost:8000/api/login",{
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(item)
        });
  
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/add");

    }
  

    return(
        <div className="mt-6">
             <h1 align="center">Login</h1>

             <div className="col-sm-4 offset-sm-4">
                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                <br/>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <button onClick={login} className="btn btn-primary">Kirish</button>
             </div>
        </div>
    );
}

export default Login;

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { withRouter } from "react-router-dom";


import React, { useState, useEffect} from 'react';



function UpdateProduct(props){
    
   
   
   
    const [data, setData] = useState([]);
      
    const[name, setName] = useState(data.name);
    const[desc, setDesc] = useState(data.desc);
    const[price, setPrice] = useState(data.price);
    const[file, setFile] = useState(data.file);



    useEffect( async ()=> {
     let result = await fetch('http://localhost:8000/api/get-product/'+ props.match.params.id);
       result = await result.json();
       setData(result);
    })
    
    
    

   
   
   
   
   
    return(
        <div className="container-fluid">
            <br />
             <h2 align="center">UpdateProduct</h2>

             <div className="col-8 offset-sm-3">
            
        {/* <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="text" onChange={(e) => setName(e.target.value)}  id="exampleEmail" defaultValue={name} placeholder="with a placeholder" />
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="exampleEmail">Desc</Label>
          <Input type="text" onChange={(e) => setDesc(e.target.value)}  id="exampleEmail" defaultValue={desc} placeholder="with a placeholder" />
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="exampleEmail">Price</Label>
          <Input type="text"  id="exampleEmail" onChange={(e) => setPrice(e.target.value)} defaultValue={price} placeholder="with a placeholder" />
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="exampleFile" ></Label>
          <Input type="file"  onChange={(e) => setFile(e.target.files[0])}   placeholder="password placeholder" />
          <img src={"http://localhost:8000/" + file} width="100px" />
        </FormGroup>
        
        
        <Button onClick={updated}>Submit</Button>
     */}

             </div>
        </div>
    );
}

export default withRouter(UpdateProduct);
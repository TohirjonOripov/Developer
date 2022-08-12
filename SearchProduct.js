import React, { useState, useEffect } from "react";
import { Table } from 'reactstrap';
import  {useHistory, Link} from "react-router-dom";

function SearchProduct(){

const[data, setData] = useState([]);








async function search(name){
    let result = await fetch('http://localhost:8000/api/search/' + name);
    result = await result.json();
    
    console.warn(result);
    setData(result);
}

    return(
        <div className="container-fluid">
            <h1>Search Product</h1>
            <br/>

            <input type="text" onChange={(e)=>search(e.target.value)} placeholder="Search product" className="form-control col-sm-6" /> 
           
           <br />
           
          {
          <Table striped bordered hover className="container-fluid offset-sm-1">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Image</th>
          <th>Delete</th>
          
        </tr>
      </thead>
      <tbody>   
  { 
  data.map((item) =>
      
 <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.desc}</td>
          <td>{item.price}</td>
          <td>
            
            <img  width="100px" src={"http://localhost:8000/" + item.img_path} /> 
            </td>
        
        
        </tr>
     )
     }
      </tbody>
    </Table>
}
          


        </div>
    );

}

export default SearchProduct;
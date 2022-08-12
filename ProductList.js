import React, { useState, useEffect } from "react";
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, Link } from "react-router-dom";
function ProductList(){

const [data, setData] = useState([]);
const history = useHistory();

useEffect( async () => {
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result);
    
    
    
},[]);

async function Productdelete(id){
   
    let result = await fetch('http://localhost:8000/api/delete/'+id, {
        method: "DELETE"
    });
    result = await result.json();
    
     
    history.push("/product");

}

async function Update(id){
  let result = await fetch("http://localhost:8000/api/get-product/" + id, {
    method: "GET"
  });
}


return(
    <div className="col-10">
        <h1>Product List</h1>
          <br />
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
          <td>
            <button onClick={()=>Productdelete(item.id)} className="btn btn-danger">Delete</button>
          </td>
          <td>
            <Link to={"update/"+item.id}>
            <button className="btn btn-primary">Rename</button>
            </Link>
          </td>
        </tr>
     )
}
      </tbody>
    </Table>


    </div>
);




}

export default ProductList;

import React, { useState } from "react";

import  {useHistory} from "react-router-dom";

function AddProduct(){


    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState("");
    const history = useHistory();

async function Add(){


 


const formData = new FormData();

formData.append('name',name);
formData.append('desc',desc);
formData.append('price',price);
formData.append('img_path',file);

const result = await fetch('http://localhost:8000/api/add-product', {
 method: 'POST',
 body: formData
});


alert("data saved");

history.push("/add");



}
    return(
        <div>
            <h1>AddProduct</h1>



            <div className="col-lg-6 offset-sm-4">
       <input placeholder="name"  type="text" className="form-control"  onChange={(e) => setName(e.target.value)}/>
         <br/><input placeholder="description"  type="text" className="form-control"  onChange={(e) => setDesc(e.target.value)}/>
         <br/> <input placeholder="price" type="text" className="form-control"  onChange={(e) => setPrice(e.target.value)}/><br/>
         <br/> <input placeholder="file" type="file" className="form-control"  onChange={(e) => setFile(e.target.files[0])}/><br/>

         <button onClick={Add} className="btn btn-success">Add Product</button>  
         </div>
        </div>
    );
}

export default AddProduct;
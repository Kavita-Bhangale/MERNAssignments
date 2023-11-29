import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";


const Product = () => {
    const params = useParams();
    const [product,setProduct] = useState({});

    useEffect(() => {
        if(params.pname){
            axios.get("http://localhost:3001/api/products/" + params.pname)
            .then((res) => {
                setProduct({...res.data[0]});
            })
        }
    },[params.pname]);

    return<div>
        {product != null ? 
        <div>
            <h2>{product.pname}</h2>
            <p>{product.description}</p>
            <b>{product.price}</b><br></br>
            <Button>Add to Cart</Button>
        </div>
        : null}
    </div>
}

export default Product;
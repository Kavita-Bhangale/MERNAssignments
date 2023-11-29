import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token') != null){
        axios.get("http://localhost:3001/allproducts/products")
            .then((res) => {
                setProducts(res.data);
            }).catch((error) => {
                alert('Error : ' + error);
            })
        }else{
            alert("Login to see products...")
        }
    }, [])

    const viewMoreOnClicked = (e) => {
        console.log("Product name : ", e.target.name);
        navigate("/product/"+e.target.name);
    }


    return (
        <Row>
            <Col>
                {
                    products.map((product) => {
                        return (
                            <Card style={{ width: '18rem',margin: '5px', float: 'left' }}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.pname}</Card.Title>
                                    <Card.Text>
                                        {product.description}
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">{product.price}</Button>{' '}
                                    <Button variant="primary" name={product.pname} onClick={(e) => viewMoreOnClicked(e)}>View More</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }

            </Col>
        </Row>

    );
}


export default Products;
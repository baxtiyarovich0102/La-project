import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addCart} from "../redux/action";

function Product(props) {

    const {id} = useParams();
    const [product,setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const addProduct = (product)=> {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return(
            <div className={"text-center"} style={{marginTop:"10%"}}>
                Loading...
            </div>
        )
    }

    const ShowProduct = () =>{
        return(
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title}
                    height={"400px"} width={"400px"}/>
                </div>
                <div className="col-md-6">
                    <h4 className={"text-uppercase text-secondary"}>{product.category}</h4>
                    <h1 className={"display-5"}>{product.title}</h1>
                    <p className={"text-danger"} style={{fontSize:"20px"}}>Rating: {product.rating && product.rating.rate} ⭐ </p>
                    <h3 className={"lead display-5 text-success"}>Price: ${product.price}</h3>
                    <p>{product.description}</p>
                    <button className="btn btn-outline-dark" onClick={()=>addProduct(product)}>Add to Cart</button>
                    <NavLink to={"/cart"} className="btn btn-dark ms-2">Go to Cart</NavLink>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    );
}

export default Product;
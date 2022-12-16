import React, { useEffect, useState } from "react";
import axios from "axios";

import { URL_PRODUCT } from "../../../middleware/environment";
import { useParams } from "react-router-dom";

const ShowProduct = () => {

    // const [id, getId] = useParams().id;

    const [product, getProduct] = useState({
        id: useParams().id,
        name: "",
        description: "",
        price: 0,
    });

    useEffect(() => {
        axios.get(`${URL_PRODUCT}/${product.id}`)
        .then((response) => {
            console.log(response.data);
            getProduct(response.data);
        }).catch((err) => {
            console.error(err);
        });
    }, [])


    return (
        <>
            {product.name}
            {product.description}
            {product.price}
        </>
    )
};

export default ShowProduct;
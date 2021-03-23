import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import {getCategory} from "../../functions/category"
import ProductCard from "../../components/cards/ProductCard"

const CategoryHome = ({match}) => {
    const [category,setCategory] = useState({})
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)
    const{slug} = match.params; 

    useEffect(() => {
        setLoading(true);
        getCategory(slug)
        .then(res => {
            setCategory(res.data);
            setProducts(res.data.products);
            setLoading(false);
        })
    },[])
    
    return (
        <>
        </>
    )
}

export default CategoryHome;
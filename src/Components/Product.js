import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cart";
import { createReview } from "../store/reviews";

function Product(props) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [score, setScore] = useState(1);

    const addToCart = async () => {
        try {
            dispatch(addItem({ product: props.obj, quantity }));
        } catch (err) {
            console.log(err)
        }
    }

    const addReview = async () => {
        try {
            dispatch(createReview({ product: props.obj, score }))
        } catch (err) {
            console.log(err);
        }
    }
    
    let count = 0;
    const averageScore = (props.rev.reduce((acc, curr) => {
        if (curr.productId === props.obj.id) {
            count++;
            return acc + curr.score
        }else{
            return acc
        }
    }, 0) / count)
    console.log(averageScore)

    return (
        <div className= "singleProduct">
            <img src={props.obj.image} alt={props.obj.name} style={{ width: "500px", heigh: "500px" }} />   
            <div>
                <Link to={`/product/${props.obj.id}`}>{props.obj.name}</Link>
            </div>
            <div>
                ${props.obj.price}
            </div>    
            <div>
                Qty:
            <select value={quantity} onChange={(e) => setQuantity(e.target.value * 1)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <button onClick={() => addToCart()}>Add To Cart</button>
            </div>
            <div>
                score: {averageScore.toFixed(2)}/5 
            <select value={score} onChange={(e) => setScore(e.target.value * 1)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={() => addReview()}>Submit Review</button> 
            </div>
        </div>
    )
}

export default Product;
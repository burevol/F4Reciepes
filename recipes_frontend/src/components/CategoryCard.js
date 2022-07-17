import React from "react";
import { Link } from "react-router-dom";

function CategoryCard(props) {
    return (
        <Link to={`/category/${props.id}`}>{props.title}</Link>
    );
}

export default CategoryCard;
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {Card, Button} from "react-bootstrap";

function CategoryCard(props) {
    return (
        <Link to={`/recipes/${props.id}`}>{props.title}</Link>
    );
}

export default CategoryCard;
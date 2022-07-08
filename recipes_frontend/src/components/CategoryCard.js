import React, { Fragment } from "react";
import {Card, Button} from "react-bootstrap";

function CategoryCard(props) {
    return (
        <Card>
            <Card.Body>{props.title}</Card.Body>
            <Button>Нажми</Button>
        </Card>
    );
}

export default CategoryCard;
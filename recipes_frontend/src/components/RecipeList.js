import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import {ListGroup} from "react-bootstrap";

function RecipeList() {
    let params = useParams();
    let [recipeList, setRecipeList] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/recipes/?category=${params.id}`).then((response) => {
            setRecipeList(response.data)
        })
    }, [])

    return (
          <ListGroup>
            {
                recipeList !== undefined ? recipeList.map(
                    (item) =>
                        <ListGroup.Item key={item.id}>
                             <Link to={`/recipe/${item.id}`}>{item.header}</Link>
                        </ListGroup.Item>
                ) : ""
            }
        </ListGroup>

    );
}

export default RecipeList;
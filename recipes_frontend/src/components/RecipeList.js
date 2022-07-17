import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {ListGroup} from "react-bootstrap";
import Recipe from "./Recipe";

function RecipeList(props) {
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
                recipeList.map(
                    (item) =>
                        <ListGroup.Item key={item.id}>
                            <Recipe title={item.header} id={item.id} content={item.content} category={item.category}/>
                        </ListGroup.Item>
                )
            }
        </ListGroup>

    );
}

export default RecipeList;
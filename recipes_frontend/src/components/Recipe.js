import React, { useState, useEffect } from "react";
import { Row, Col, Container, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

function Recipe() {

    let params = useParams();
    let [recipeData, setRecipeData] = useState({})

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/recipes/${params.id}/`).then((response) => {
            setRecipeData(response.data)
        })
    }, [])

    return (
        <Container>
      <Row>
          <Col>
              <h4>{ recipeData.header } </h4>
                <p dangerouslySetInnerHTML={{__html:recipeData.content}}></p>
                {
                  recipeData.category !== undefined ? recipeData.category.map((cat) => <Badge pill="true" key={cat.id}>{cat.category}</Badge>) : ""
                }

          </Col>
      </Row>
    </Container>

    );
}

export default Recipe;
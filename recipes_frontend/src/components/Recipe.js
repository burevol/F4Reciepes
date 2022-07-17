import React from "react";
import { Row, Col, Container, Badge } from "react-bootstrap";

function Recipe(props) {
    return (
        <Container>
      <Row>
          <Col> <h4>{ props.title } </h4>
              <p dangerouslySetInnerHTML={{__html:props.content}}></p>
              {
                  props.category.map((cat) => <Badge pill="true" key={cat.id}>{cat.category}</Badge>)
              }
          </Col>
      </Row>
    </Container>

    );
}

export default Recipe;
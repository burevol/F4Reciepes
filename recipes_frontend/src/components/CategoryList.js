import React, {useEffect, useState} from "react";
import CategoryCard from "./CategoryCard";
import {ListGroup} from "react-bootstrap";
import axios from "axios";

function CategoryList() {

    let [categoryListData, setCategoryList] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/categories/').then((response) => {
            setCategoryList(response.data)
        })
    }, [])

    return (
        <ListGroup>
            {
                categoryListData !== undefined ? categoryListData.map(
                    (item) =>
                        <ListGroup.Item key={item.id}>
                            <CategoryCard title={item.category} id={item.id} />
                        </ListGroup.Item>
                ) : ""
            }
        </ListGroup>

    );
}

export default CategoryList;
import React, {useEffect, useState} from "react";
import CategoryCard from "./CategoryCard";
import axios from "axios";

function CategoryList(props) {

    let [categoryList, setCategoryList] = useState([])

    useEffect(()=> {
        axios.get('http://127.0.0.1:8000/categories/').then((response) => {
            setCategoryList(response.data)
        })
    }, [])

    return (
        categoryList.map(
            (item) => <CategoryCard title={item.category} key={item.id}></CategoryCard>
        )
    );
}

export default CategoryList;
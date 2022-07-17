import React, {Fragment, useEffect, useState} from "react";
import CategoryList from "./CategoryList";
import Header from "./Header";
import RecipeList from "./RecipeList";
import {Container} from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App (props) {


    return (
        <BrowserRouter>
            <Header />
            <Routes>>
                <Route path="/" element={<CategoryList />} />
                <Route path="recipes/:id" element={<RecipeList />} />
            </Routes>
        </BrowserRouter>


    );
}

export default App;
import React from "react";
import CategoryList from "./CategoryList";
import Header from "./Header";
import RecipeList from "./RecipeList";
import Recipe from "./Recipe";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App () {

    return (
        <BrowserRouter>
            <Header />
            <Routes>>
                <Route path="/" element={<CategoryList />} />
                <Route path="category/:id" element={<RecipeList/>} />
                <Route path="recipe/:id" element={<Recipe/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import Filter from "./Filter";
import itemData from "../data/items";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleDarkModeClick = () => {
        setIsDarkMode((prevDarkMode) => !prevDarkMode);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className={"App " + (isDarkMode ? "dark" : "light")}>
            <Header onDarkModeClick={handleDarkModeClick} />
            <Filter onCategoryChange={handleCategoryChange} />
            <ShoppingList
                items={itemData}
                selectedCategory={selectedCategory}
            />
        </div>
    );
}

export default App;

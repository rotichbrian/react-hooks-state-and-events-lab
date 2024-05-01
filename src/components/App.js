import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  // Step 1: Add state variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Add event handler to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Step 3: Determine the className based on the dark mode state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Step 4: Add event handler to the dark mode button */}
        <button onClick={toggleDarkMode}>
          {isDarkMode ? " Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
import React, { useState } from "react";
import DisplayFoodItems from "./DisplayFoodItems";
import FetchNutrition from "./FetchNutrition";

function Search({ details }) {
    const [searchField, setSearchField] = useState("");
    
    const filtered = details.filter((entry) => {
        return entry.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
        <div>
            <div class="search">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search ..."
                    onChange={(e) => setSearchField(e.target.value)}
                />
            </div>
            <DisplayFoodItems foodList={filtered} />
        </div>
    );
}
export default Search;
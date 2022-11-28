import React, { useEffect, useState } from "react";
import DisplayFoodItems from "./DisplayFoodItems";
import FetchNutrition from "./FetchNutrition";


const CheckBox = (props) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={props.checked}
                onChange={e => props.onChange(!props.checked)}
                name={props.name}
            />
        </div>
    )
}

function Search({ details }) {
    const [searchField, setSearchField] = useState("");
    const [ingredient1, setIngredient1] = useState(false);

    const filtered = details.filter((entry) => {
        return entry.name.toLowerCase().includes(searchField.toLowerCase());
    });

    useEffect(() => {
        if (ingredient1 === true) {
            const fil = details.filter((entry) => {
                return entry.ingredients.filter((ingredient) => {
                    return ingredient.ingredientName.includes('olive oil');
                });
            })
            console.log(fil);
        }
    }, [ingredient1])

    return (
        <div>
            <div class="search">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search ..."
                    onChange={(e) => setSearchField(e.target.value)}
                />
                <CheckBox checked={ingredient1} onChange={setIngredient1} name={"olive oil"} />
            </div>
            <DisplayFoodItems foodList={filtered} />
        </div>
    );
}
export default Search;
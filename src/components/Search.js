import React, { useState } from "react";
import DisplayFoodItems from "./DisplayFoodItems";
import FetchNutrition from "./FetchNutrition";


// const CheckBox = (props) =>{
//     return (
//     <div>
//         <input 
//             type="checkbox"
//             checked={props.checked}
//             onChange={e => props.onChange(e.target.checked)}
//             name={props.Name}
//         />
//     </div>
//     )
// }

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
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
                disabled={props.disabled}
            />
        </div>
    )
}

function Search({ details }) {
    const [searchField, setSearchField] = useState("");
    const [ingredient1, setIngredient1] = useState(false);
    const [ingredient2, setIngredient2] = useState(false);
    const [ingredient3, setIngredient3] = useState(false);
    const [ingredient4, setIngredient4] = useState(false);
    const [finalData, setFinalData] = useState(null);

    var filtered = details.filter((entry) => {
        return entry.name.toLowerCase().includes(searchField.toLowerCase());
    });

    useEffect(() => {
        if (finalData !== filtered){
            if(ingredient1!=true && ingredient2!=true && ingredient3!= true && ingredient4 !=true){
                setFinalData(filtered)
            }
        } 
    },[filtered])

    useEffect(() => {
        if (ingredient1 === true) {
            const filteredField = filtered.filter((entry) => {
                console.log(entry.ingredients.some((item) => { return item.ingredientName.includes("ginger") }))
                return entry.ingredients.some((item) => { return item.ingredientName.includes("ginger") })
            })
            console.log(filtered);
            setFinalData(filteredField)
        } else if (ingredient2 === true) {
            const filteredField = filtered.filter((entry) => {
                console.log(entry.ingredients.some((item) => { return item.ingredientName.includes("onions") }))
                return entry.ingredients.some((item) => { return item.ingredientName.includes("onions") })
            })
            console.log(filtered);
            setFinalData(filteredField)
        } else if (ingredient3 === true) {
            const filteredField = filtered.filter((entry) => {
                console.log(entry.ingredients.some((item) => { return item.ingredientName.includes("prawns") }))
                return entry.ingredients.some((item) => { return item.ingredientName.includes("prawns") })
            })
            console.log(filtered);
            setFinalData(filteredField)
        } else if (ingredient4 === true) {
            const filteredField = filtered.filter((entry) => {
                console.log(entry.ingredients.some((item) => { return item.ingredientName.includes("nuts") }))
                return entry.ingredients.some((item) => { return item.ingredientName.includes("nuts") })
            })
            console.log(filtered);
            setFinalData(filteredField)
        }else {
            setFinalData(filtered)
        }
    }, [ingredient1, ingredient2, ingredient3, ingredient4])

    if (finalData !== null) {
        return (
            <div>
                <div class="search">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search ..."
                        onChange={(e) => setSearchField(e.target.value)}
                    />
                    <p>Only select one filter each time</p>
                    {"ginger"}
                    <CheckBox checked={ingredient1} onChange={setIngredient1} name={"ginger"} disabled={ingredient2||ingredient3||ingredient4} />
                    {"onions"}
                    <CheckBox checked={ingredient2} onChange={setIngredient2} name={"onions"} disabled={ingredient1||ingredient3||ingredient4} />
                    {"prawns"}
                    <CheckBox checked={ingredient3} onChange={setIngredient3} name={"prawns"} disabled={ingredient2||ingredient1||ingredient4}/>
                    {"nuts"}
                    <CheckBox checked={ingredient4} onChange={setIngredient4} name={"nuts"} disabled={ingredient2||ingredient3||ingredient1}/>
                </div>
                <DisplayFoodItems foodList={finalData} />
            </div>
        );
    }

}
export default Search;
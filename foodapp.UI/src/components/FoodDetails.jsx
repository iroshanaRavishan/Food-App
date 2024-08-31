import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css"
import ItemList from "./ItemList";

export default function FoodDetails({foodId}){
    const [isLoading, setIsLoading] = useState(true)
    const [food, setFood] = useState({});
    const URL =`https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "fff68eceefed475780ed9e1c5a517b59";

    useEffect(()=>{
        async function fetchFood() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json()
            console.log(data)
            setFood(data)
            setIsLoading(false)
        }
        fetchFood()
    }, [foodId])

    return (
       <div>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImage} src={food.image} alt={food.image} />
                <div className={styles.recipeDetails}>
                    <span><strong> 🕑 {food.readyInMinutes} Minutes</strong></span>
                    <span><strong>👪 Serves {food.servings}</strong></span>
                    <span><strong>{food.vegetarian? "🥕 Vegi": "🍗 Non-Vegi"}</strong></span>
                    <span><strong>{food.vegan? "🐄 Vegan":""}</strong></span>
                </div>
                <div>
                <strong>💲{food.pricePerServing / 100} Per serving</strong>
                </div>
                <h2>Ingredients</h2>
                    <ItemList food={food} isLoading={isLoading}/>
                <h2>Instructions</h2>
                <div className={styles.recipeinstructions}>
                    <ol>
                        {isLoading ? (<p>Loading...</p>) : (food.analyzedInstructions[0].steps.map((steps)=>( <li>{steps.step}</li>)))}
                    </ol>
                </div>
            </div>
        </div>
    )
}
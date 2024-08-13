import { useEffect, useState } from "react";

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

    return <div>
       <div>
            <div>
                <h1>{food.title}</h1>
                <img src={food.image} alt={food.image} />
            
                <div>
                    <span>
                        <strong> 🕑 {food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>{food.vegetarian? "🥕 Vegi": "🍗 Non-Vegi"}</span>
                    <span>👪 Serves {food.servings}</span>
                    <span>{food.vegan? "🐄 Vegan":""}</span>
                </div>
                <div>
                    💲{food.pricePerServing / 100} Per serving
                </div>
            </div>
            <div>
                
                <h2>Instructions</h2>
                {isLoading ? (<p>Loading...</p>) : (food.analyzedInstructions[0].steps.map((steps)=>( <li>{steps.step}</li>)))}
            </div>
        </div>
    </div>
}
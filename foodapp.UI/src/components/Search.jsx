import { useEffect, useState } from "react";
import styles from "./search.module.css"

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "fff68eceefed475780ed9e1c5a517b59"

export default function({foodData, setFoodData}) {
    const [query, setQuery] = useState("Pizza");
    useEffect(()=> {
        async function fetchFood(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json()
            // console.log("The Response: ", data.results);
            setFoodData(data.results);

        }
        fetchFood()
    }, [query])

    return <div className={styles.searchContainter}>
        <input className={styles.input} onChange={(e)=> setQuery(e.target.value)} type="text" value={query}/>
    </div>
}
import Item from "./Item";

export default function ItemList({food, isLoading}) {
    return <div>
        {isLoading ? (<p>Loading...</p>): (food.extendedIngredients.map((item, index)=> (
            <Item key={index} item={item}/>
        )))}
    </div>
}
export default function FoodItem({food}) {
    return <div>
        <img src={food.image} alt={food.image} />
        <p>{food.title}</p>
        <button>View Recipe</button>
    </div>
}
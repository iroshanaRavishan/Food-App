export default function FoodList({foodData}) {
    return <div>
         {foodData.map((food)=> (
        <p>{food.title}</p>
     ))}
    </div>
}
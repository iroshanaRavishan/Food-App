import React from 'react'
import Search from './Search'

import FoodList from "./FoodList"
import Container from "./Container"
import InnerContainer from "./InnerContainer"
import FoodDetails from "./FoodDetails"



export default function Home({foodData, setFoodData, foodId, setFoodId}) {
  return (
    <div>
        <Search foodData={foodData} setFoodData={setFoodData} />
        <Container>
            <InnerContainer>
            <FoodList setFoodId={setFoodId} foodData={foodData}/>
            </InnerContainer>
            <InnerContainer>
            <FoodDetails foodId={foodId} />
            </InnerContainer>
        </Container>

    </div>
  )
}

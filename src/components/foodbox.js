import React from 'react';
import { Card, Col, Button } from 'antd';

const computesTotal = (calories, servings) => {
  return calories * servings;
};

export function Foodbox({ food, setAllFoods }) {
  const deleteFood = foodToDelete => {
    setAllFoods(oldFoods => {
      return oldFoods.filter(food => food.name !== foodToDelete.name);
    });
  };

  return (
    <Col>
      <Card
        title={food.name}
        style={{
          width: 230,
          height: 300,
          margin: 10
        }}
      >
        <img src={food.image} height={60} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {computesTotal(food.calories, food.servings)} </b>
          kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(food)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

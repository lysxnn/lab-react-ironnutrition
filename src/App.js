import React from 'react';
import { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Card, Row, Col, Divider, Input, Button, PageHeader } from 'antd';
import { Foodbox } from './components/foodbox';

import foods from './foods.json';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return (
    <div>
    <PageHeader>Food List</PageHeader>
      <Foodbox food={foods[15]}  />
      {allFoods.map((food) => {
        return (
          <div>
            <p> {food.name}</p>
            <img src={food.image} alt={food.name} width={100} />
          </div>
        );
      })}
    </div>
  );
}

export default App;

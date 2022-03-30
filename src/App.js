import React from 'react';
import { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { nanoid } from 'nanoid';
import { Card, Row, Col, Divider, Input, Button, PageHeader } from 'antd';
import { Foodbox } from './components/Foodbox';
import { AddFoodForm } from './components/AddFoodForm';

import foods from './foods.json';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return (
    <div>
    <PageHeader>Add Food Entry</PageHeader>
    <AddFoodForm setAllFoods={setAllFoods} />
      <PageHeader>Food List</PageHeader>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {allFoods.map(food => {
          return <Foodbox key={nanoid()} food={food} />;
        })}
      </Row>
    </div>
  );
}

export default App;

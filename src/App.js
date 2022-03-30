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
  const [filter, setFilter] = useState('');

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <PageHeader>Add Food Entry</PageHeader>
      <AddFoodForm setAllFoods={setAllFoods} />
      <label>
        Search: <Input value={filter} onChange={handleFilter} />
      </label>

      <PageHeader>Food List</PageHeader>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filter === ''
          ? allFoods.map(food => {
              return <Foodbox key={nanoid()} food={food} />;
            })
          : allFoods
              .filter(food => {
                const lowerFilter = filter.toLowerCase();
                return food.name.toLowerCase().includes(lowerFilter);
              })
              .map(food => {
                return <Foodbox key={nanoid()} food={food} />;
              })}

        {/* {allFoods.map(food => {
          return <Foodbox key={nanoid()} food={food} />;
        })} */}
      </Row>
    </div>
  );
}

export default App;

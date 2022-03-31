import React from 'react';
import { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { nanoid } from 'nanoid';
import { Row, Divider, Input, Button } from 'antd';
import { Foodbox } from './components/Foodbox';
import { AddFoodForm } from './components/AddFoodForm';
import foods from './foods.json';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [filter, setFilter] = useState(''); // has to live here because it's lifting the state up
  const [editMode, setEditMode] = useState(false);

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const toggleForm = () => {
    // we don't care about the default state here
    setEditMode(!editMode);
  };

  const feedbackMessage = () => {
    return (
      <div>
        <span>🚫</span> Oops! There is no more content to show.
      </div>
    );
  };

  const isEmpty = allFoods.length === 0;

  return (
    <div className="App">
      <Button type="primary" onClick={toggleForm}>
        {editMode ? 'Hide Form' : 'Add New Food'}
      </Button>
      <div
        className="foodForm"
        style={{ display: editMode ? 'block' : 'none' }}
      >
        <Divider>Add Food Entry</Divider>
        <AddFoodForm setAllFoods={setAllFoods} />
      </div>
      <Divider>Search</Divider>
      <label>
        Search: <Input value={filter} onChange={handleFilter} />
      </label>

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {isEmpty
          ? feedbackMessage()
          : filter === ''
          ? allFoods.map(food => {
              return (
                <Foodbox setAllFoods={setAllFoods} key={nanoid()} food={food} />
              );
            })
          : allFoods
              .filter(food => {
                const lowerFilter = filter.toLowerCase();
                return food.name
                  .toLowerCase()
                  .trim() // removes all the white space in the searchbar
                  .includes(lowerFilter)
                  .trim();
              })
              .map(food => {
                return (
                  <Foodbox
                    setAllFoods={setAllFoods}
                    key={nanoid()}
                    food={food}
                  />
                );
              })}

        {/* {allFoods.map(food => {
          return <Foodbox key={nanoid()} food={food} />;
        })} */}
      </Row>
    </div>
  );
}

export default App;

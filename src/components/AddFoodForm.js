import React from 'react';
import { useState } from 'react';
import { Input, Button } from 'antd';

export function AddFoodForm(props) {
  const [state, setState] = useState({
    // this is a default state so they get default values like empty strings etc.
    name: '',
    image: '',
    calories: Number, // you can set it to 'null' so you don't have the dropdown
    servings: Number
  });

  const changeHandler = event => {
    // console.log(event.target);
    // console.log(event.target.value);
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addFood()
    
  };

  const addFood = () => {
    props.setAllFoods(oldFoods => { // setAllFoods is lifting the state up
      return [state, ...oldFoods];  // with the spread-operator we're creating a shallow copy 
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <Input
          name="name"
          value={state.name}
          type="text"
          onChange={changeHandler}
        />
      </label>
      <label>
        Image:
        <Input
          name="image"
          value={state.image}
          type="text"
          placeholder="Enter URL"
          onChange={changeHandler}
        />
      </label>

      <label>
        Calories:
        <Input
          name="calories"
          value={state.calories}
          type="number"
          onChange={changeHandler}
        />
      </label>
      <label>
        Servings:
        <Input
          name="servings"
          value={state.servings}
          type="number"
          onChange={changeHandler}
        />
      </label>
      <Button type="primary" onClick={addFood}>Create</Button>
    </form>
  );
}

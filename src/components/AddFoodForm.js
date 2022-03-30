import React from 'react';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button, PageHeader } from 'antd';

export function AddFoodForm(props) {
  const [state, setState] = useState({
    name: '',
    image: '',
    calories: Number,
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
    props.setAllFoods(oldFoods => { //setAllFoods is lifting the state up
      return [state, ...oldFoods];
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
      <Button onClick={addFood}>Create</Button>
    </form>
  );
}

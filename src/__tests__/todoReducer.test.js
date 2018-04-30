import React from 'react';
import ReactDOM from 'react-dom';
import reducer from '../reducers/todoReducer';

xdescribe('the ADD_TODO reducer', () => {

  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];

  test('added todo item to store', () => {
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });

  test('call reducer with unknown action', () => {
    expect(reducer(stateBefore, {type: 'unknown action'})).toEqual(stateBefore);
  }); 
});

describe('the TOGGLE_TODO reducer', () => {

  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false
    }
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: true
    }
  ];

  test('toggle todo status', () => {
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });  
});
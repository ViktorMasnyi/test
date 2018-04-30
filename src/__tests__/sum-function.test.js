import React from 'react';
import ReactDOM from 'react-dom';
import functionsum from '../functionsum';

describe('test sum function', () => {
  const a = 1;
  const b = 2;

  test('test 1', () => {
    expect(functionsum(a, b)).toEqual(a + b);
  });
 
});

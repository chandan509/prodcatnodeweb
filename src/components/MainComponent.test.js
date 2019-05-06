import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './MainComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let data = [];
data.push({PERSON : "Bob Jones"});
data.push({PLACE : "Washington"});
let jsonString = JSON.stringify(data);
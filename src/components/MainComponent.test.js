import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './MainComponent';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let data = [];
data.push({PERSON : "Bob Jones"});
data.push({PLACE : "Washington"});
//let jsonString = JSON.stringify(data);

it('Check heading', () => {
    const wrapper = shallow(<MainComponent/>);
    const heading = 'Copy JSON here and click submit'; 
    expect(wrapper.contains(heading)).toEqual(true);    
});
import React from 'react';
import ReactDOM from 'react-dom';
import TableComponent from './TableComponent';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let data = [];
  ReactDOM.render(<TableComponent data={data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

let data = [];
data.push({PERSON : "Bob Jones"});
data.push({PLACE : "Washington"});

it('Render Category table', () => {
    const wrapper = shallow(<TableComponent data={data}/>);
    const th1 = <th>Category</th>;    
    const th2 = <th>Sub Category</th>;
    expect(wrapper.contains(th1)).toEqual(true);
    expect(wrapper.contains(th2)).toEqual(true);
});

it('Render Count table', () => {
const wrapper = shallow(<TableComponent data={data}/>);
const th1 = <th>Category</th>;    
const th2 = <th>Count</th>;
expect(wrapper.contains(th1)).toEqual(true);
expect(wrapper.contains(th2)).toEqual(true);
const row1 = <tr><td>{'PERSON'}</td><td>{1}</td></tr>;
const row2 = <tr><td>{'PLACE'}</td><td>{1}</td></tr>;
expect(wrapper.contains(row1)).toEqual(true);
expect(wrapper.contains(row2)).toEqual(true);
});

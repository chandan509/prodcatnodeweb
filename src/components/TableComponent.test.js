import React from 'react';
import ReactDOM from 'react-dom';
import TableComponent from './TableComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let data = [];
  ReactDOM.render(<TableComponent data={data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

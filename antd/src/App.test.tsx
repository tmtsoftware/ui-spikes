import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import Ocs from './pages/Ocs';

describe('<Ocs>', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<Ocs>hello</Ocs>);
    const linkElement = getByText(/Ocs/i);
    expect(document.body.contains(linkElement));  
  });

  it('test antd component', () => {
    
  })
});

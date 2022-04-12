import React from 'react';
import { render } from '@testing-library/react';

import SampleComponent from './SampleComponent';
import { SampleComponentProps } from './SampleComponent.types';

describe('Test Component', () => {
  let props: SampleComponentProps;

  beforeEach(() => {
    props = {
      foo: 'bar',
    };
  });

  const renderComponent = () => render(<SampleComponent {...props} />);

  it('Should render foo text correctly', () => {
    props.foo = 'hello world';
    const { getByTestId } = renderComponent();

    const component = getByTestId('SampleComponent');

    expect(component).toHaveTextContent('hello world');
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import SampleComponent2 from './SampleComponent2';
import { SampleComponent2Props } from './SampleComponent2.types';

describe('Test Component', () => {
  let props: SampleComponent2Props;

  beforeEach(() => {
    props = {
      foo: 'bar',
    };
  });

  const renderComponent = () => render(<SampleComponent2 {...props} />);

  it('Should render foo text correctly', () => {
    props.foo = 'hello world';
    const { getByTestId } = renderComponent();

    const component = getByTestId('SampleComponent2');

    expect(component).toHaveTextContent('hello world');
  });
});

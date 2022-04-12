import React from 'react';
import SampleComponent from './SampleComponent';

export default {
  title: 'SampleComponent',
};

export const WithBar = (): JSX.Element => <SampleComponent foo="bar" />;

export const WithBaz = (): JSX.Element => <SampleComponent foo="baz" />;

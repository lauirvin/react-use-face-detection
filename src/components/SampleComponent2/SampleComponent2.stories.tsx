import React from 'react';
import SampleComponent2 from './SampleComponent2';

export default {
  title: 'SampleComponent2',
};

export const WithBar = (): JSX.Element => <SampleComponent2 foo="bar" />;

export const WithBaz = (): JSX.Element => <SampleComponent2 foo="baz" />;

import React, { memo } from 'react';
import { SampleComponentProps } from './SampleComponent.types';
import styles from './SampleComponent.module.scss';

export const SampleComponent = memo<SampleComponentProps>(({ foo }) => (
  <div data-testid="SampleComponent" className={styles.container}>
    {foo}
  </div>
));

SampleComponent.displayName = 'SampleComponent';

export default SampleComponent;

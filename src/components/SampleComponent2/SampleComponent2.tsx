import React, { memo } from 'react';
import { SampleComponent2Props } from './SampleComponent2.types';
import styles from './SampleComponent2.module.scss';

export const SampleComponent2 = memo<SampleComponent2Props>(({ foo }) => (
  <div data-testid="SampleComponent2" className={styles.container}>
    {foo}
  </div>
));

SampleComponent2.displayName = 'SampleComponent2';

export default SampleComponent2;

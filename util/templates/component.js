module.exports = (componentName) => ({
  content: `
import React, { memo } from 'react';
import { ${componentName}Props } from "./${componentName}.types";
import styles from './${componentName}.module.scss';

export const ${componentName} = memo<${componentName}Props>(({ foo }) => (
  <div data-testid="${componentName}" className={styles.container}>{foo}</div>
));

${componentName}.displayName = '${componentName}';

export default ${componentName};
`,
  extension: `.tsx`,
});

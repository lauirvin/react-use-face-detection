module.exports = (componentName) => ({
  content: `
import React from "react";
import ${componentName} from "./${componentName}";

export default {
    title: "${componentName}"
};

export const WithBar = (): JSX.Element => <${componentName} foo="bar" />;

export const WithBaz = (): JSX.Element => <${componentName} foo="baz" />;
`,
  extension: `.stories.tsx`,
});

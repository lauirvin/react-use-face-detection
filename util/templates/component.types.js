module.exports = (componentName) => ({
  content: `
export interface ${componentName}Props {
    foo: string;
}
`,
  extension: `.types.ts`,
});

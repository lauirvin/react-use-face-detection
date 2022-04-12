module.exports = (componentName) => ({
  content: `
  export { default as ${componentName} } from "./${componentName}";
  export * from "./${componentName}.types";
`,
  extension: `.tsx`,
});

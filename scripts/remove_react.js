/**
 * Use this script when you are using
 * linked React dependency from the other and
 * you want to make sure only one React instance is used.
 *
 * @USAGE `node remove_react`
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { execSync } = require('child_process');

if (fs.existsSync('node_modules/react')) {
  execSync('cd node_modules && mv react _react');
  console.log('*** Temporary REMOVE local "react" dependencies');
}

if (fs.existsSync('node_modules/react-dom')) {
  execSync('cd node_modules && mv react-dom _react-dom');
  console.log('*** Temporary REMOVE local "react-dom" dependencies');
}

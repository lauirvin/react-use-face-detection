/**
 * Use this script when you want to revert back from
 * the effect of 'remove_react' script.
 *
 * @USAGE `node add_react`
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { execSync } = require('child_process');

if (fs.existsSync('node_modules/_react')) {
  execSync('cd node_modules && mv _react react');
}

if (fs.existsSync('node_modules/_react-dom')) {
  execSync('cd node_modules && mv _react-dom react-dom');
}

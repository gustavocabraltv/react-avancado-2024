// module.exports = {
//   // Lint & Prettify TS and JS files
//   '*.{js,jsx,ts,tsx}': (filenames) => [
//     `prettier --write ${filenames.join(' ')}`,
//     `npm run lint --fix . ${filenames.join(' --file')}`
//   ]
// }



// const path = require('path');

// const buildEslintAndPrettierCommand = (filenames) => {
//   const prettierCommand = `prettier --write ${filenames.join(' ')}`;
//   const eslintCommand = `npm run lint --fix . ${filenames.map((f) => `--file ${path.relative(process.cwd(), f)}`).join(' ')}`;
//   return [prettierCommand, eslintCommand];
// };

// module.exports = {
//   '*.{js,jsx,ts,tsx}': buildEslintAndPrettierCommand,
// };

const path = require('path')
 
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`
 
module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
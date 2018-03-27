const testFolder = './snippet-samples';
const fs = require('fs');

const arr = [];

fs.readdirSync(testFolder).forEach(file => {
  const name = file.slice(0, -3);
  // console.log('NAME:',name);
  const contents = fs.readFileSync(`${testFolder}/${file}`, 'utf8');
  // console.log('CONTENTS:', contents)
  const descIdx = contents.indexOf('```js');
  arr.push({
    command: name,
    code: contents,
    description: contents.slice(0, descIdx)
  });
});

// console.log(arr)

require('fs').writeFile('./script/snippets.json', JSON.stringify(arr), function(
  err
) {
  if (err) {
    console.error('Crap happens');
  }
});

const testFolder = './snippet-samples';
const fs = require('fs');

const arr = [];

fs.readdirSync(testFolder).forEach(file => {
  const name = file.slice(0, -3);
  const contents = fs.readFileSync(`${testFolder}/${file}`, 'utf8');
  const descIdx = contents.indexOf('```js');
  arr.push({
    command: name,
    code: contents,
    description: contents.slice(0, descIdx)
  });
});

require('fs').writeFile('./script/snippets.json', JSON.stringify(arr), function(
  err
) {
  if (err) {
    console.error('Crap happens');
  }
});

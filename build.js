const fs = require('fs');

const indexHTMLPath = './docs/index.html';

const urlFix = (path) =>
  new Promise((resolve) => {
    fs.readFile(path, 'utf8', (err, data) => {
      const result = data
        .replace(/href="\//g, 'href="./')
        .replace(/src="\//g, 'src="./');

      fs.writeFile(path, result, 'utf8', resolve);
    });
  });

urlFix(indexHTMLPath);

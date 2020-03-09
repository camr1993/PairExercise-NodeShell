const fs = require('fs');

function getLs() {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    }
    else {
      process.stdout.write(files.join('\n') + '\n');
      process.stdout.write("prompt > ");
    }
  });
}

module.exports = {
  getLs
}

// could do this:
// module.exports = getLs;

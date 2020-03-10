// require
const {getPwd} = require('./pwd');
const {getLs} = require('./ls');

// if you save pwd module as a function:
// const pwd = require('./pwd);
// pwd()


process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
if (cmd === 'pwd') {
  getPwd();
  process.stdout.write('\nprompt > ');
}
if (cmd === 'ls') {
  getLs();
}
});

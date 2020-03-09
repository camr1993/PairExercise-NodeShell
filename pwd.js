
function getPwd() {
  process.stdout.write(process.cwd());
}

module.exports = {
  getPwd
}

// module.exports = function () {
//   process.stdout.write(process.cwd());
// }


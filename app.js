const fs = require('fs');
fs.readdir('./', (err, result) => {
	console.log(result);
});

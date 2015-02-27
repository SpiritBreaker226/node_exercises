var fs = require('fs');

fs.readdir(process.argv[2], function(err, files) {
	if (!err) {
		files.forEach(function(file) {
			if (file.indexOf("." + process.argv[3]) > 0) {
				console.log(file);
			}
		});
	}
});
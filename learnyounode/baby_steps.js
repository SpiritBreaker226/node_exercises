var results = 0;

// the 2 index is the start of the arugment
for (var i = 2; i < process.argv.length; i++) {
	results += Number(process.argv[i]);
};

console.log(results);
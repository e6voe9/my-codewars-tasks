function duplicateCount(text){
	text = text.toLowerCase();

	let count = 0;

	const txt = new Set(text.split(''));
	let obj = {};

	txt.forEach(el => {
		obj[el] = -1;
	})

	text.split('').forEach(el => {
		obj[el] += 1;
	})

	const values = Object.values(obj);

	if (values.length === 0) return 0

	values.forEach(el => {
		if (el > 0) count++;
	})

	return count
}

console.log(duplicateCount("ababcde"))
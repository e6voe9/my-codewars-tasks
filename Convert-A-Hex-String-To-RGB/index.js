function hexStringToRGB(hexString) {
	const numbers16Array = hexString.split('');
	let _1 = String(numbers16Array[1]) + String(numbers16Array[2]);
	let _2 = String(numbers16Array[3]) + String(numbers16Array[4]);
	let _3 = String(numbers16Array[5]) + String(numbers16Array[6]);

	_1 = parseInt(_1, 16);	
	_2 = parseInt(_2, 16);	
	_3 = parseInt(_3, 16);

  return {
		r: _1,
		g: _2,
		b: _3,
	}
}





console.log(hexStringToRGB("#FF9933"))
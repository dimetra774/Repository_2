function getRandomInt1(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function getRandomInt2(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

num1 = getRandomInt1(9, 100)
num2 = getRandomInt2(9, 100)

alert(num1 + " + " + num2);
alert(num1 + num2);
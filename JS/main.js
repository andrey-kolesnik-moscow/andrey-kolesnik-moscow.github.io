
let output = '';
let massCalc = [''];
let i = 0;
let precision = 3;
let maxOutputLength = 25;
const clickAC = document.getElementById('AC');
const click0 = document.getElementById('0');
const click1 = document.getElementById('1');
const click2 = document.getElementById('2');
const click3 = document.getElementById('3');
const click4 = document.getElementById('4');
const click5 = document.getElementById('5');
const click6 = document.getElementById('6');
const click7 = document.getElementById('7');
const click8 = document.getElementById('8');
const click9 = document.getElementById('9');
const clickBr1 = document.getElementById('Br1');
const clickBr2 = document.getElementById('Br2');
const clickMultiply = document.getElementById('*');
const clickDevide = document.getElementById('/');
const clickMinus = document.getElementById('-');
const clickPoint = document.getElementById('.');
const clickPlus = document.getElementById('+');
const clickEquals = document.getElementById('Equals');
const clickMe = document.getElementById('Me');
const clickIncrement = document.getElementById('Increment');
const short = document.getElementById('Short');
const extended = document.getElementById('Extended');
const clickPi = document.getElementById('Pi');
const clickFactorial = document.getElementById('Factorial');
const clickLess = document.getElementById('less');
const clickMore = document.getElementById('more');
const clickSin = document.getElementById('sin');
const clickCos = document.getElementById('cos');
const clickTan = document.getElementById('tan');
const clickLn = document.getElementById('ln');
const clickLog = document.getElementById('log');
const clickSqrt = document.getElementById('√');

const crash = document.getElementById('Cr');

function factorialNew(num) {
	let res = 1;
	let number = +num;
	for (let i = 1; i < number+1; i++) {
		res *= i;
	}
	return res;
}

short.onclick = function() {
	document.querySelector('.additional-menu').style.display = 'none';
}

extended.onclick = function() {
	document.querySelector('.additional-menu').style.display = 'flex';
}

clickAC.onclick = function() { 
		if (massCalc[i].length != 0) {
			massCalc[i] = massCalc[i].slice(0,massCalc[i].length-1);
			output = output.slice(0,output.length-1);
		} else {
			i--;
			if (massCalc[i] == '3.14159265359') {
				massCalc[i] = '';
				output = output.slice(0,output.length-1);
			} else {
			massCalc[i] = massCalc[i].slice(0,massCalc[i].length-1);
			output = output.slice(0,output.length-1);
			}
		}
		
	document.getElementById('Res').innerHTML = output;
}

clickAC.oncontextmenu = function() { 
		output = '';
		massCalc = [''];
		i = 0;
	document.getElementById('Res').innerHTML = output;
		return false;
}

click0.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		// easyBro - for fun function! 
		return;
	}
	massCalc[i] += '0';
	output += '0';
	document.getElementById('Res').innerHTML = output;
}

click1.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	massCalc[i] += '1';
	output += '1';
	document.getElementById('Res').innerHTML = output;
}

click2.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	massCalc[i] += '2';
	output += '2';
	document.getElementById('Res').innerHTML = output;
}

click3.onclick = function() {
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	} 
	massCalc[i] += '3';
	output += '3';
	document.getElementById('Res').innerHTML = output;
}

click4.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	massCalc[i] += '4';
	output += '4';
	document.getElementById('Res').innerHTML = output;
}

click5.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	if (massCalc[i] == undefined) {massCalc[i] = '';}
	massCalc[i] += '5';
	output += '5';
	document.getElementById('Res').innerHTML = output;
}

click6.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	massCalc[i] += '6';
	output += '6';
	document.getElementById('Res').innerHTML = output;
}

click7.onclick = function() {
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	} 
	massCalc[i] += '7';
	output += '7';
	document.getElementById('Res').innerHTML = output;
}

click8.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	massCalc[i] += '8';
	output += '8';
	document.getElementById('Res').innerHTML = output;
}

click9.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	massCalc[i] += '9';
	output += '9';
	document.getElementById('Res').innerHTML = output;
}

clickBr1.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	massCalc[i] += '(';
	output += '(';
	document.getElementById('Res').innerHTML = output;
}

clickBr2.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	massCalc[i] += ')';
	i++;
	massCalc[i] = '';
	output += ')';
	document.getElementById('Res').innerHTML = output;
}

clickMultiply.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	i++;
	massCalc[i] = '*';
	i++;
	massCalc[i] = '';
	output += '*';
	document.getElementById('Res').innerHTML = output;
}

clickDevide.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	i++;
	massCalc[i] = '/';
	i++;
	massCalc[i] = '';
	output += '/';
	document.getElementById('Res').innerHTML = output;
}

clickMinus.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	i++;
	massCalc[i] = '-';
	i++;
	massCalc[i] = '';
	output += '-';
	document.getElementById('Res').innerHTML = output;
}

clickPoint.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	massCalc[i] += '.';
	output += '.';
	document.getElementById('Res').innerHTML = output;
}

clickPlus.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	i++;
	massCalc[i] = '+';
	i++;
	massCalc[i] = '';
	output += '+';
	document.getElementById('Res').innerHTML = output;
}


clickPi.onclick = function() {
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	i++;
	massCalc[i] = '3.14159265359';
	i++;
	massCalc[i] = '';
	output += 'π';
	document.getElementById('Res').innerHTML = output;
}

clickFactorial.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	i++;
	massCalc[i] = '!';
	i++;
	massCalc[i] = '';
	output += '!';
	document.getElementById('Res').innerHTML = output;
}

clickSin.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	i++;
	massCalc[i] = 'sin';
	i++;
	massCalc[i] = '(';
	output += 'sin(';
	document.getElementById('Res').innerHTML = output;
}

clickCos.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	i++;
	massCalc[i] = 'cos';
	i++;
	massCalc[i] = '(';
	output += 'cos(';
	document.getElementById('Res').innerHTML = output;
}

clickTan.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	i++;
	massCalc[i] = 'tan';
	i++;
	massCalc[i] = '(';
	output += 'tan(';
	document.getElementById('Res').innerHTML = output;
}

clickLn.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	i++;
	massCalc[i] = 'ln';
	i++;
	massCalc[i] = '(';
	output += 'ln(';
	document.getElementById('Res').innerHTML = output;
}

clickLog.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	i++;
	massCalc[i] = 'log';
	i++;
	massCalc[i] = '(';
	output += 'log(';
	document.getElementById('Res').innerHTML = output;
}

clickSqrt.onclick = function() { 
	if (output.length == maxOutputLength) {
		easyBro();
		return;
	}
	i++;
	massCalc[i] = '√';
	i++;
	massCalc[i] = '(';
	output += '√(';
	document.getElementById('Res').innerHTML = output;
}

clickEquals.onclick = function() {
i++;
while (i > 0) {
	switch(massCalc[i-1]) {
		case 'cos' : 
			massCalc[i-1] = Math.cos(eval(massCalc[i]));
			massCalc[i] = '';
			break;
		case 'sin' :
			massCalc[i-1] = Math.sin(eval(massCalc[i]));
			massCalc[i] = '';
			break;
		case 'tan' :
			massCalc[i-1] = Math.tan(eval(massCalc[i]));
			massCalc[i] = '';
			break;
		case 'log' :
			massCalc[i-1] = Math.log10(eval(massCalc[i]));
			massCalc[i] = '';
			break;
		case 'ln' :
			massCalc[i-1] = Math.log(eval(massCalc[i]));
			massCalc[i] = '';
			break;
		case '√' :
			massCalc[i-1] = Math.sqrt(eval(massCalc[i]));
			massCalc[i] = '';
			break;
		}

		if (massCalc[i] == '!') {
			massCalc[i-1] = factorialNew(massCalc[i-1]);
				massCalc[i] = '';
		}
	
		i--;
	
	}

	i = massCalc.length;
	output = '';
	for (let counter = 0; counter < i; counter++) {
		output += massCalc[counter];
	}
	output = eval(output).toFixed(precision); 	
	document.getElementById('Res').innerHTML = output;
}

clickLess.onclick = function() { 
	if (precision != 0) {
	precision--;
	document.getElementById('precision').innerHTML = precision;
}
}

clickMore.onclick = function() { 
	if (precision != 8) {
	precision++;
	document.getElementById('precision').innerHTML = precision;
}
}

// ============= 
// just for fun section (function + event) :)

function easyBro() {
	document.getElementById('infoJoke').innerHTML = 'Easy bro!';
		setTimeout (
			function() {
				document.getElementById('infoJoke').innerHTML = '';
			},1000
			);
}

// crash.onclick = function() {
// 	document.querySelector('.wrapper').style.left = '15%';
// 	document.querySelector('.additional-menu').style.flexWrap = 'noWrap';
// 	document.querySelector('.additional-menu').style.width = '500px';
// 	document.querySelector('.calculator').style.flexWrap = 'noWrap';
// 	document.querySelector('.calculator').style.width = '1000px';
// 	document.getElementById('Cr').parentNode.removeChild(document.getElementById('Cr'));

// }

// =============
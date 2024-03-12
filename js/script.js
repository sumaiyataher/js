// Example starter JavaScript for disabling form submissions if there are invalid fields
//js


//calculation
// let
let number1, number2, number3;
number1 = 5;
number2 = 3;
number3 = number1 + number2;

function calculation(){
    document.getElementById('value').innerHTML = number3;
}
// var
var number25, number27, number28;
number25 = 5;
number27 = 3;
number28 = number25 + number27;

function cal(){
    document.getElementById('var').innerHTML = number28;
}

//focus

function myFunction() {
    document.getElementById('u').style.background="red";
  }
// javascript string

function java(){
    document.getElementById('s_t').innerHTML = 'Javascript';
}

// javascript string

const name = "W3Schools";
let letter = name[2];
function stringAi(){
    document.getElementById("a_i").innerHTML = letter;
}


// array

function array(){
    const cars = ["Saab", "Volvo", "BMW"];
    document.getElementById("j_a").innerHTML = cars;
}



// Array length

function arraysize(){
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
 document.getElementById("s").innerHTML = size;

}

//array at

 function arrayNumber(){
    const fruits = ["Apple", "Banana", "Orange", "Pineapple"];
    let fruit = fruits.at(3);
 	document.getElementById("n").innerHTML = fruit;
 }



// Addition
let number4, number5, number6;
number4 =4;
number5 =5;
number6 = number4 + number5;
function add(){
    document.getElementById('ad_v').innerHTML = number6;
}

// Subtraction
let number7, number8, number9;
number7 =4;
number8 =5;
number9 = number7 - number8;
function sub(){
    document.getElementById('sub_v').innerHTML = number9;
}

// Multiplication
let number10, number11, number12;
number10 =4;
number11 =5;
number12 = number10 * number11;
function multi(){
    document.getElementById('mul_v').innerHTML = number12;
}

// Division

let number13, number14, number15;
number13 =20;
number14 =5;
 number15 = number13 / number14;
function divi(){
    document.getElementById('div_v').innerHTML = number15;
}
// Modulas

let number16, number17, number18;
number16 =5;
number17 =3;
 number18 = number16 % number17;
function modu(){
    document.getElementById('mod_v').innerHTML = number18;
}

// Exponentiation

let number19, number20, number21;
number19 =4;
number20 =7;
 number21 = number19 ** number20;
function exp(){
    document.getElementById('ex_v').innerHTML = number18;
}


// dblclick
function textClick(){
    document.getElementById('c_t') .innerHTML='Hellow World';
}

// showtext
function textShow(){
    document.getElementById('s_t').style.display='block';
}

// hidetext
function textHide(){
    document.getElementById('h_t').style.display='none';
}


// fontchange
function fontChange(){
    document.getElementById('c_f').style.fontSize='35px';
}

// color change

function colorChange(){
    document.getElementById('text').style.color="red";
}

// bg change

function backgroundcolorChange(){
    document.getElementById('b_g').style.backgroundColor="red";
}


//bulb on/off
function bulbOn(){

	document.getElementById('bulb').src = 'images/on.gif';
}
function bulbOff(){

	document.getElementById('bulb').src = 'images/off.gif';
}

// show datef
function showDate(){
    document.getElementById('s_d').innerHTML = Date();
}
// text change
function textChange(){
          document.getElementById('t_c').innerHTML = "hello";
}

// decimal change
function decimalChange(){
    document.getElementById('d_c').innerHTML = "10.5";
}
// <!-- alert -->
function greet(){
    alert("hellow world!");
}




//  assignmentOperator addition
let x, y;
x = 5;
y =10;

x += y
function assignmentOperatorAddition(){
    document.getElementById('as_a').innerHTML = x;
}


//  assignmentOperator substraction

let a, b;
a = 10;
b =5;

b -= a
function assignmentOperatorSubstraction(){
    document.getElementById('a_s').innerHTML = b;
}

//  assignmentOperatorMultiplication 

let c, d;
c= 20;
d =10;

d *= c
function assignmentOperatorMultiplication (){
    document.getElementById('o_m').innerHTML = d;
}

//  assignmentOperatorExponentiation

let e, f;
e= 20;
f =10;

e *= f
function assignmentOperatorExponentiation (){
    document.getElementById('o_e').innerHTML = e;
}

//  assignmentOperatorDivision

let g, h;
g= 40;
h =10;

h /= g
function assignmentOperatorDivision (){
    document.getElementById('d_o').innerHTML = h;
}

//  assignmentOperatorModulus

let i, j;
i= 40;
j =10;

i %=j
function assignmentOperatorModulus (){
    document.getElementById('m_a').innerHTML = i;
}
// uppercase
function textUpper(){
     let text=document.getElementById("u_t").innerHTML;
    document.getElementById("u_t").innerHTML=text.toUpperCase();
    }

 // lower case
function textLower(){
     let text=document.getElementById("l_t").innerHTML;
    document.getElementById("l_t").innerHTML=text.toLowerCase();
    }
//jQ
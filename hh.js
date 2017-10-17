function calcul()

{ 
var x = document.querySelector('.quantity').value;
var y = document.querySelector('.price').value;
var z = document.querySelector('.total').value = x*y ;
var a = document.querySelector('.qua').value;
var b = document.querySelector('.pri').value;
var c = document.querySelector('.tot').value = a*b;
var f = document.querySelector('.quan').value;
var g = document.querySelector('.pric').value;
var h = document.querySelector('.tota').value =f*g;
var quanti = document.querySelector('.quanti').value;
var pricee = document.querySelector('.pricee').value;
var totale = document.querySelector('.totale').value = quanti*pricee;
var net= document.querySelector('#net'). value=z+c+h+totale;

}


// Stampare tutti i numeri da 1 a 100 con le seguenti regole:
// al posto dei multipli di 3 stampare "Fizz"
// al posto dei multipli di 5 stampare "Buzz"
// al posto dei multipli di 3 e 5 stampare "FizzBuzz"
var htmlIn = '';

for (var i = 1; i <= 100; i++) {
    if ((i%3 == 0) && (i%5 == 0)) {
        htmlIn = htmlIn + '<li class="fizz">Fizz<span class="buzz">Buzz</span></li>';

    } else if ((i%3 != 0) && (i%5 == 0)) {
        htmlIn = htmlIn + '<li class="buzz">Buzz</li>';
    } else if ((i%3 == 0) && (i%5 != 0)) {
        htmlIn = htmlIn + '<li class="fizz">Fizz</li>';

    }else{
        htmlIn = htmlIn + '<li>'+ i +'</li>';
    }
}

htmlIn = '<ul>' + htmlIn + '</ul>';

document.getElementById('lista').innerHTML = htmlIn;

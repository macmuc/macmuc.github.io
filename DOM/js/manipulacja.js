'use strict' 

var mainHeader = document.getElementById('main-header');

mainHeader.innerHTML = 'Treść nagłówka';
/*mainHeader.innerHTML = mainHeader + 'Treść nagłówka';*/

var link = document.getElementsByClassName('link')[0];//przypisujemy pierwszy link do zmiennej

link.href = 'http://akademia108.pl';//Nadpisuje atrybut href w linku


console.log(link.classList); //pobiera liste klas w linku

link.className = 'nowa-klasa'; //nadpisuje nazwę klasy w linku

link.className += ' nowa-klasa'//dodaje klase w linku

mainHeader.style.color = 'red'; //modyfikacja właściwości css , dodajemy style w nagłówku
function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
	computerMove = `papier`
} else if(randomNumber == 3){
	computerMove = `nożyce`
}

printMessage('Mój ruch to: ' + computerMove);


let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == `2`){
	playerMove = `papier`
} else if(playerInput == `3`){
	playerMove = `nożyce`
}

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
  } else if( computerMove == `kamień` && playerMove == `nożyce`){
	  printMessage(`Przegrywasz`)
  } else if( computerMove == `kamień` && playerMove == `kamień`){
	  printMessage(`remis`)
  } else if( computerMove == `nożyce` && playerMove ==`papier`){
	  printMessage(`przegrywasz`)
  } else if( computerMove == `nożyce` && playerMove == `kamień`){
		printMessage(`wygrywasz`)
  } else if( computerMove == `nożyce` && playerMove == `nożyce`){
		printMessage(`remis`)
  } else if( computerMove == `papier` && playerMove == `nożyce`){
		printMessage(`wygrywasz`)
  } else if( computerMove == `papier` && playerMove == `papier`){
			printMessage(`remis`)
  } else if( computerMove == `papier` && playerMove == `kamień`){
		printMessage(`przegrywasz`)
  } else if( computerMove == `kamień` && playerMove == `nieznany ruch`){
		printMessage(`zły wybór sekwencji`)
  } else if( computerMove == `nożyce` && playerMove == `nieznany ruch`){
	printMessage(`zły wybór sekwencji`)
  } else if( computerMove == `papier` && playerMove == `nieznany ruch`){
	printMessage(`zły wybór sekwencji`)
  }  
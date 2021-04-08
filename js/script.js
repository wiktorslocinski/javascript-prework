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

function getMoveName(argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	} else if(argMoveId == 2){
		return `papier`;
	} else if(argMoveId == 3){
		return `nożyce`;
	}
  
	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
  }

let computerMove = getMoveName(randomNumber);


/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
	computerMove = `papier`
} else if(randomNumber == 3){
	computerMove = `nożyce`
}
*/

printMessage('Mój ruch to: ' + computerMove);


let playerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == `2`){
	playerMove = `papier`
} else if(playerInput == `3`){
	playerMove = `nożyce`
}
*/

printMessage('Twój ruch to: ' + playerMove);

const displayResult = function(argComputerMove, argPlayerMove){
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		return 'Ty wygrywasz!';
		} else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
			return 'Remis!';
		} else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
			return 'Ty przegrywasz!';
		} else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
			return 'Remis!';
		} else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
			return'Ty przegrywasz!';
		} else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
			return 'Ty wygrywasz!';
		} else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
			return 'Ty przegrywasz!';
		} else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
			return 'Ty wygrywasz!';
		} else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
			return 'Remis!';
		} else {argPlayerMove == "nieznany ruch"
		return 'Tym razem przegrywasz :(';
		}
	}

displayResult (computerMove, playerMove);
const result = displayResult (computerMove, playerMove);
printMessage(result)

/*
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
  */
 
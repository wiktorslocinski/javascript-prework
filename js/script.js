{
	const playGame = function(playerInput){

		function printMessage(msg){
			let div = document.createElement('div');
			div.innerHTML = msg;
			document.getElementById('messages').appendChild(div);
		}
		
		function clearMessages(){
			document.getElementById('messages').innerHTML = '';
		}
	
	clearMessages()
	
		const getMoveName = function(argMoveId){
			if(argMoveId == 1){
			return 'kamień';
			} else if(argMoveId == 2){
				return 'papier';
			} else if(argMoveId == 3){
				return 'nożyce';
			}  else {
			printMessage('Nie znam ruchu o id ' + argMoveId + '.');
			return 'nieznany ruch';
			}
		}
	
		const randomNumber = Math.floor(Math.random() * 3 + 1);
	
		console.log('Wylosowana liczba to: ' + randomNumber);
	
		const computerMove = getMoveName(randomNumber);
	
		printMessage('Mój ruch to: ' + computerMove);
	
	
	
		/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/
	
		console.log('Gracz wpisał: ' + playerInput);
	
		const playerMove = getMoveName(playerInput);
	
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
	
		const result = displayResult (computerMove, playerMove);
		printMessage(result)
	   
	
	
	}
	document.getElementById('play-rock').addEventListener('click', function(){
		playGame("1");
	  });
	document.getElementById('play-paper').addEventListener('click', function(){
		playGame('2');
	  });
	document.getElementById('play-scissors').addEventListener('click', function(){
		playGame('3');
	  });
	}
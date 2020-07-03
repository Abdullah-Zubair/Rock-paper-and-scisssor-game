// https://gist.github.com/df500d2b48c5cf06ffe2addf229aeecb

//function for checking user choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb')
      {
        return userInput;
      }
    else
      {
        console.log ('Enter Valid Choice');
      }
  }
  //function for getting computer choice
  const getComputerChoice = () => {
    switch (Math.floor(Math.random ()*3))
      {
        case 0 : return 'rock';
          break;
        case 1 : return 'paper';
          break;
        case 2 : return 'scissors';
          break
        default : console.log('Computer Error');
          break;
      }
  }
  //function for comparing user and computer choice and return winner
  const determineWinner = (userChoice,computerChoice) =>
  {
    if (userChoice === computerChoice )
      {
        return 'The game was a tie';
      }
    if ( userChoice === 'rock' )
      {
        if ( computerChoice === 'paper' )
          {
            return 'The computer won';
          }
        else 
          {
            return 'You won!';
          }
      }
    if ( userChoice === 'paper'  )
      {
        if ( computerChoice === 'scissors')
          {
            return 'The computer won';
          }
        else
          {
            return 'You won!';
          }
      }
    if ( userChoice === 'scissors' )
      {
        if ( computerChoice === 'rock')
          {
            return 'The computer won';
          }
        else 
          {
            return 'You won!';
          }
      }
    //cheat code
    if (userChoice === 'bomb')
      {
        return 'You won!';
      }
  }
  //functiion for starting game
  const playGame = () =>
  {
   const userChoice =getUserChoice('bomb'); const computerChoice = getComputerChoice() ;
    console.log( 'You threw: ' + userChoice );
    console.log( 'The Computer threw: ' + computerChoice );
    
    console.log ( determineWinner ( userChoice,computerChoice ) )
    
  }
  //function calling
  playGame();
  
  
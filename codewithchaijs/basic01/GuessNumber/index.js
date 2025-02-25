let randomNumber= parseInt(Math.random()*100+1)

console.log(randomNumber)

let userInput= document.getElementById('guessField')
const submitBtn= document.querySelector('.button')
const gussedNumbers= document.getElementById('gussedNumber')
const displayUserResult=document.getElementById('result')
const resultContainer=document.querySelector(".result-container")
const attempts=0
const newGame= document.createElement('p')

const previousGuessNumbers=[]

let gameStatus=true

submitBtn.addEventListener('click',(e)=>{
	e.preventDefault()
	const userInputValue= userInput.value 
	validateNumber(userInputValue)
})

function validateNumber(number){
   if(isNaN(number)||number===''){
	alert(`Please Enter the Valid Number`)
	userInput.value=''
   }else if( number < 1){
	alert(`Please Enter the Number More than 1`)
	userInput.value=''
   }else if(number >= 100){
	alert('Please Enter the Number Less than 100')
	userInput.value=''
   }else{
	previousGuessNumbers.push(number)
	if(attempts===11){
		displayNumbers(previousGuessNumbers)
		gameOver()
		userInput.value=''
	}else{
		userInput.value=''
		displayResult(number)
		displayNumbers(previousGuessNumbers)
	}
	
   }
}

function displayNumbers(number){
	gussedNumbers.innerHTML=number
	console.log(previousGuessNumbers)
}

function displayResult(number){
	if(number<randomNumber){
		displayUserResult.innerHTML=`Your number is Too low`
		displayUserResult.classList.add('output')
	}else if( number > randomNumber){
		displayUserResult.innerHTML=`Your number is Too High`
	}else{
		displayUserResult.innerHTML=`Congratulation You Won The Game and Number is: ${randomNumber}`
	    displayUserResult.classList.remove('output')
		displayUserResult.classList.add('winner')
		gameOver()
	}
}

function gameOver(){
	userInput.setAttribute('disabled','')
	newGame.innerHTML=`<button id="newgame">Restart</button>`
	resultContainer.appendChild(newGame)
	gameStatus=false
	restartGame()
}

function restartGame(){
  const newGameBtn= document.getElementById('newgame')
  newGameBtn.addEventListener('click',()=>{
	randomNumber=parseInt(Math.random()*100+1)
	userInput.removeAttribute('disabled')
	gameStatus=true
	resultContainer.removeChild(newGame)
  })
	


}
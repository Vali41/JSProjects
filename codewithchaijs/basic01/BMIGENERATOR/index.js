const form= document.querySelector('form')

form.addEventListener('submit',(e)=>{
	e.preventDefault()
	const height= parseInt((document.querySelector('#height')).value)	
	const weight= parseInt((document.querySelector('#weight')).value)
	const result= document.querySelector("#result")

	if(height===''|| height < 0 || isNaN(height)){
		result.innerHTML=`Please enter Valid value, entered Value is: ${height}`
		
	}else if( weight===''|| weight<0|| isNaN(weight)){
		result.innerHTML=`Please enter Valid value, entered Value is: ${weight}`
	}else{
		const bmiResult= (weight / ((height * height) / 10000)).toFixed(2)
		console.log(bmiResult)
		result.innerHTML=`<span>${bmiResult}</span>`
	}
	height='';
	weight=''
})
const clockElement=document.getElementById('clock')

setInterval(()=>{
	let date=new Date()
	clockElement.innerHTML= date.toLocaleTimeString()
},1000)
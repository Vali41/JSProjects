const body=document.querySelector('body')
const buttons=document.querySelectorAll(".button")

buttons.forEach(button=>{
	button.addEventListener('click' , (e)=>{
		console.log(e.target.id)
		switch(true){
			case e.target.id==='gray':
				body.style.backgroundColor=e.target.id
				break
			case e.target.id==='white':
				body.style.backgroundColor=e.target.id
				break
			case e.target.id==='blue':
				body.style.backgroundColor=e.target.id
				break
			case e.target.id==='yellow':
					body.style.backgroundColor=e.target.id
					break
			default:
				null
		}
	})
})
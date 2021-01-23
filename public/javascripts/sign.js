let formUp =document.querySelector('#sign_up_form');
let formIn =document.querySelector('#sign_in_form');
let log_out_user=document.querySelector('#log_out_user');
let return_to_home=document.querySelector('#return_to_home');

formUp.addEventListener('submit', (e)=>{
	e.preventDefault()

    let objSignUp={
    	name:formUp.elements['name'].value,
        email:formUp.elements['email'].value,
        password:formUp.elements['password'].value,
    } 
    console.log(objSignUp)
    formUp.reset()
	fetch('/auth/signup',{
		method:'POST',
		headers:{
			"Content-Type":'application/json',
			"Accept":'application/json',
			["x-access-token"]:localStorage.getItem('token')
		},
		body:JSON.stringify(objSignUp)
	}).then((res)=>res.json())
	.then(data=>{
		
        alert(data.message)
       

       
	})



})
formIn.addEventListener('submit', (e)=>{
	e.preventDefault()

    let objSignUp={
    	name:formIn.elements['name'].value,
        password:formIn.elements['password'].value,
    } 
    console.log(objSignUp)
    formIn.reset()
	fetch('/auth/signin',{
		method:'POST',
		headers:{
			"Content-Type":'application/json',
			"Accept":'application/json',
			["x-access-token"]:localStorage.getItem('token')
		},
		body:JSON.stringify(objSignUp)
	}).then((res)=>res.json())
	.then(data=>{
		localStorage.setItem('token',data.accessToken )
        location.href='/home'
            
	})



})


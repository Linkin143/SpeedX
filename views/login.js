// import axios from 'axios';




const loginSubmit = document.querySelector('.cont_form_login');
loginSubmit.addEventListener('submit', e => {
  e.preventDefault();
  console.log("hi from the loginSubmit event listener");
  const email = document.getElementById('EmailSignup').value;
  const password = document.getElementById('passSignup').value;
  signupData(email, password);
  
  const loginData = async (email, password) => {
    console.log(email, password)
    try{
        const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:3000/api/users/login',
            data:{
                email,
                password
            }
        })
        console.log(res)
    }catch(err){
        console.log(err.response.data)
    }
}

});


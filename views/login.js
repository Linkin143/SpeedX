// import axios from 'axios';

  const loginData = async (email, password) => {
    console.log(email, password)
    $(".loading-loader").css("display","initial")
    try{
        const res = await axios({
            method: 'POST',
            // url: 'http://127.0.0.1:3000/api/users/login',
            url: '/api/users/login',

            data:{
                email,
                password
            }
        })
        console.log(res)
        setInterval(function() {
          window.location.href = "/";
        }, 1000);
        $(".loading-loader").css("display","none")
        console.log(res.data);
          $('#errorshowLogin').text('Successfully Loggedin')
    }catch(err){
      console.log(err.response.data);
      $(".loading-loader").css("display","none")
      $('#errorshowLogin').text(err.response.data.error);
    }
}



const loginSubmit = document.querySelector('.cont_form_login');
loginSubmit.addEventListener('submit', e => {
  e.preventDefault();
  console.log("hi from the loginSubmit event listener");
  const email = document.getElementById('emailLogin').value;
  const password = document.getElementById('passLogin').value;
  loginData(email, password);

});

async function logout() {
    console.log("in for logout");
    try {
      const res = await axios({
        method: 'GET',
        // url: 'http://127.0.0.1:3000/api/users/logout'
        url: '/api/users/logout'
      });
      window.location.href = "/";
    } catch (err) {
      console.log("Error logging out", err);
    }
  }

const signupData = async (email, phone, password, name, confirmPassword) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/users/signup',
      data: {
        email,
        phone,
        name,
        password,
        confirmPassword
      }
    });
    setInterval(function() {
      window.location.href = "/";
    }, 3000);
    
    console.log(res.data);
      $('#errorshowSignup').text('Successfully Registered')
  } catch (err) {
      data = err.response.data.message
      parts = data.split(",")
      error = parts[0]
      console.log(err.response.data.message);
      $('#errorshowSignup').text(error)
  }
};

const signupSubmit = document.querySelector('.cont_form_sign_up');
signupSubmit.addEventListener('submit', e => {
  e.preventDefault();
  console.log("hi from the signupSubmit event listener");
  const email = document.getElementById('EmailSignup').value;
  const phone = document.getElementById('phoneSignup').value;
  const password = document.getElementById('passSignup').value;
  const name = document.getElementById('usernameSignup').value;
  const confirmPassword = document.getElementById('c-passSignup').value;
  signupData(email, phone, password, name, confirmPassword);
});

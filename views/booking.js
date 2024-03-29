// import axios from 'axios';
console.error($('#userID').text().trim())

const AddBookingData = (pickup_address, dropoff_address, pickup_date, expected_price, user_id, userEmail, userName, Requirements) => {
    console.log(pickup_address, dropoff_address, pickup_date, expected_price, user_id, userEmail, userName, Requirements)
    try{
        const res = axios({
            method: 'POST',
            url: '/api/bookings/addbooking',

            data:{
                pickup_address,
                dropoff_address,
                pickup_date,
                expected_price,
                user_id,
                userEmail,
                userName,
                Requirements
            }
        })
        console.log(res)
        console.log(userName)
        console.log(res.data);
        document.getElementById('statusBooking').textContent = "Successfully";

    }catch(err){
      console.log(err.response.data);
      document.getElementById('statusBooking').textContent = "Oops... something went wrong";

    }
}


const AddBooking = document.getElementById("addBooking");
AddBooking.addEventListener('click', e => {
  e.preventDefault();
  const userID = $('#userID').text().trim();
  if(userID == "")
  {
          window.location.href = "/signin";
  }else{
      console.log("hi from the AddBooking event listener");
      const pickup_address = document.getElementById('myPickUpAddress').value;
      const dropoff_address = document.getElementById('myDropOffAddress').value;
      const pickup_date = document.getElementById('bookingDate').value;
      const expected_price = $('#expectedPrice').text().trim();
      const user_id = $('#userID').text().trim();
      const userEmail = $('#userEmail').text().trim();
      const userName = $('#userName').text().trim();
      const Requirements = document.querySelector('input[name="Requirements"]:checked').value;
      document.getElementById('statusBooking').textContent = "Loading Please Wait...";
      AddBookingData(pickup_address, dropoff_address, pickup_date, expected_price, user_id, userEmail, userName, Requirements);
  }
});


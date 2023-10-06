const myOrders = async (userID) => {
    try {
    const res = await axios({
        method: 'GET',
        url: `api/bookings/myorders/${userID}`,
    });
    console.log(res.data);
    const loopRan = res.data.results;

    for (let i = 0; i < loopRan; i++) {
  console.log(i, loopRan);

  function Status() {
    if(res.data.objects.bookings[i].status === "Waiting List")
    {
        return "<td style='color: orange'><b> Under Review </b></td>"
    }
    else if(res.data.objects.bookings[i].status == "Accepted"){
        return "<td style='color: green'><b> Accepted </b></td>"
    }
    else if(res.data.objects.bookings[i].status == "Failed"){

        return "<td style='color: red'><b> Failed </b></td>"
    }
  }
function payment_link(){
    
    if (res.data.objects.bookings[i].payment_link === "Delivery Not Approved") {
        return `<div class="Payment-button">
                    <button type="button" disabled class="btn btn-outline-primary btn-lg ">Pay Online</button>
                </div>`
      }
      else{
        return `<div class="Payment-button">
        <a href="${res.data.objects.bookings[i].payment_link}"><button type="button" class="btn btn-outline-primary btn-lg ">Pay Online</button></a>
    </div>`
    }
}
  $('#myorderCards').append(`
  <div class="MyProfile-card">
  <div class="MyProfile-card-body">
      <table>
          <tbody>
              <tr>
                  <td>Order Id</td>
                  <td>:</td>
                  <td>
                  ${res.data.objects.bookings[i]._id}
                  </td>
              </tr>
              <tr>
                  <td>Pickup Address</td>
                  <td>:</td>
                  <td>
                  ${res.data.objects.bookings[i].pickup_address}
                  </td>
              </tr>
              <tr>
                  <td>DropOff Addres</td>
                  <td>:</td>
                  <td>
                  ${res.data.objects.bookings[i].dropoff_address}

                  </td>
              </tr>
              <tr>
                  <td>Order Date</td>
                  <td>:</td>
                  <td>
                  ${res.data.objects.bookings[i].booking_date}

                  </td>
              </tr>
              <tr>
                  <td>PickUp Date</td>
                  <td>:</td>
                  <td>
                  ${res.data.objects.bookings[i].pickup_date}
                  </td>
              </tr>
              <tr>
                  <td>Order Total</td>
                  <td>:</td>
                  <td>
                  ${res.data.objects.bookings[i].expected_price}
                  </td>
              </tr>
              <tr>
                  <td>Payment mode</td>
                  <td>:</td>
                  <td>
                  ${res.data.objects.bookings[i].payment_method}
                  </td>
              </tr>
              <tr>
                  <td>Status</td>
                  <td>:</td>
                  
                  ${Status()}
                  
              </tr>

          </tbody>
      </table>
      
  </div>
   
  ${payment_link()}

  <div class="SpeedX-bottom-sign">
      <h6 style="color: white; margin-left: 390px;">
      Taking you into great beyond!
      </h6>
  </div>
</div>
  `);
}


    
    //end
    } catch (err) {
    console.log(err);
    }
};
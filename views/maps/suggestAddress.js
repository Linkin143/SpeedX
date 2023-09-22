
// function pickupAddress(){
//   console.log("pickupAddress")
//     pickupAddress = $('#myPickUpAddress').val()
//     myDropOffAddress = $('#myDropOffAddress').val()
//     console.warn(pickupAddress)
//     fetch(`https://api.geoapify.com/v1/geocode/search?text=${pickupAddress}%20india&format=json&apiKey=cac0d1f5b91e40929f7b19b1d10df20d`)
//       .then(response => response.json())
//       .then(result => $("#pickupOrdinates").val(result.results[0].lat+","+result.results[0].lon))
//       .catch(error => console.log('error', error));
// }


// function DropOffAddress() {
//   console.log("DropOffAddress")
//     myDropOffAddress = $('#myDropOffAddress').val();
//     console.warn(myDropOffAddress);
//     fetch(`https://api.geoapify.com/v1/geocode/search?text=${myDropOffAddress}%20india&format=json&apiKey=cac0d1f5b91e40929f7b19b1d10df20d`)
//       .then(response => response.json())
//       .then(result => {
//         $("#dropoffOrdinates").val(result.results[0].lat + "," + result.results[0].lon);
//         findDistance();
//       })
//       .catch(error => console.log('error', error));
//   }
  

// function findDistance(){
//     pickupOrdinates = $("#pickupOrdinates").val()
//     dropoffOrdinates = $("#dropoffOrdinates").val()
//     console.log(pickupOrdinates,dropoffOrdinates)
//     initMap1(pickupOrdinates,dropoffOrdinates)
// }
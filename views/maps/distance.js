function findDistance() {
  const pickupAddress = $('#myPickUpAddress').val();
  const dropOffAddress = $('#myDropOffAddress').val();
  console.error(pickupAddress, dropOffAddress);

  if(pickupAddress == "" || dropOffAddress == ""){
      $("#distance").text("0 KM");
      $("#expectedPrice").text("0 Rs ");
  }else{

    // Define the headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  };

  // Define the query parameters
  const params = {
    pickupAddress,
    dropOffAddress,
  };

  axios
    .get(`/getDistance`, {
      headers, // Add the headers here
      params, // Add the query parameters here
    })
    .then(function (response) {
      // handle success
      console.log(response);
      if(response.data.rows[0].elements[0].status === "NOT_FOUND"){
        console.warn("distance NOT_FOUND")
        $("#distance").text("0 KM");
        $("#expectedPrice").text("0 Rs ");
      }else{
        const distance = response.data.rows[0].elements[0].distance.text;
        $("#distance").text(distance);
        const expectedPrice = parseFloat(distance.split(" ")[0].replace(',', '')) * 300;
        $("#expectedPrice").text("   Rs "+ expectedPrice);
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  }

}

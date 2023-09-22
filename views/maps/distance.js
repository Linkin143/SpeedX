
    function findDistance(){
        pickupAddress = $('#myPickUpAddress').val()
        dropOffAddress = $('#myDropOffAddress').val();
        console.error(pickupAddress, dropOffAddress)
        axios
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        axios
          .get(`${proxyUrl}https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${dropOffAddress}&origins=${pickupAddress}&key=AIzaSyDAh5_JZiyJUj0YJFbn4f7UGDZrBTuiem0`)
          .then(function (response) {
            // handle success
            console.log(response);
            distance = response.data.rows[0].elements[0].distance.text;
            $("#distance").text(distance)
            var expectedPrice = parseInt(distance, 10)
            $("#expectedPrice").text("   Rs "+expectedPrice*300)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }

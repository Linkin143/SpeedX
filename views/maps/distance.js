
    /*Map Initialization*/
    var map,direction_plugin;
    function initMap1(pickup_position, dropoff_position){
        console.error(pickup_position, dropoff_position)
        map = new mappls.Map('map', {
            center: [28.09, 78.3],
            zoom: 5
        });
        map.addListener('load',function(){ 
            /*direction plugin initialization*/
            var direction_option = {
                map: map,
                // divWidth:'350px',
                isDraggable:false,
                start: {label: 'PickUp', geoposition: `${pickup_position}` },
                end: {label: 'DropOff', geoposition: `${dropoff_position}` },
                Profile:['driving']
            }
            mappls.direction(direction_option,function(data) {
                direction_plugin=data;
                console.log(direction_plugin);
                console.error("distance: ",direction_plugin.data[0].distance)
                distance = direction_plugin.data[0].distance
                $('#distance').text(distance)
                s = distance.split(" ")
                cost = s[0]
                $('#expectedPrice').text(cost*300)

            });
        });
    }

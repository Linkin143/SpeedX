// map = new mappls.Map('map', {center:{lat:21.26602,lng:79.20632} });

var map,val;
var indicator=0
function styleMap(){
var style= document.getElementById("StyleMap");
val=$('#StyleMap').val("standard-hybrid");
console.log("Outside",val)
initMap1()
}

function initMap1() {
    map = new mappls.Map('map', {center:{lat:21.26602,lng:79.20632} });
        mappls.setStyle(val);
        if(indicator==0){
            style=mappls.getStyles();
        container = document.getElementById('StyleMap');
        for(i = 0; i < style.length; i++){
            container.innerHTML+='<option value="'+style[i].name+'">'+style[i].displayName+'</option>';           
        }
        }
        indicator=1
}